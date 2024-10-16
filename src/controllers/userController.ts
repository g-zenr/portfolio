import { Request, Response } from "express";
import { User, IUser } from "../models/userModel";
import generateToken from "../utils/generateToken";
import { constants } from "../config/constantsConfig";

export const login = async (req: Request, res: Response) => {
  try {
    const { prcnumber, password } = req.body;

    const user: IUser | null = await User.findOne({ prcnumber }).exec();

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({
        message: constants.MESSAGES.AUTHENTICATION.INVALID_CREDENTIALS,
      });
    }

    const userId = (user._id as unknown as string).toString();
    const token = generateToken(userId);

    res.json({ token, role: user.role });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: constants.MESSAGES.ERROR.UNKNOWN_ERROR_OCCURRED });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { prcnumber, password, role } = req.body;

    const existingUser = await User.findOne({ prcnumber }).exec();
    if (existingUser) {
      return res.status(400).json({
        message: constants.MESSAGES.USER_CREATION.USER_ALREADY_EXISTS,
      });
    }

    const user: IUser = new User({ prcnumber, password, role });
    await user.save();

    res.status(201).json({
      message: constants.MESSAGES.USER_CREATION.USER_CREATED_SUCCESSFULLY,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: constants.MESSAGES.ERROR.UNKNOWN_ERROR_OCCURRED });
    }
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: unknown) {
    res
      .status(500)
      .json({ message: constants.MESSAGES.ERROR.ERROR_FETCHING_USERS });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      return res
        .status(404)
        .json({ message: constants.MESSAGES.USER_OPERATIONS.USER_NOT_FOUND });
    }
    res.json(user);
  } catch (error: unknown) {
    res
      .status(500)
      .json({ message: constants.MESSAGES.ERROR.ERROR_FETCHING_USER });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { prcnumber, password, role } = req.body;
    const user = await User.findById(req.params.id).exec();

    if (!user) {
      return res
        .status(404)
        .json({ message: constants.MESSAGES.USER_OPERATIONS.USER_NOT_FOUND });
    }

    if (prcnumber) user.prcnumber = prcnumber;
    if (password) user.password = password;
    if (role) user.role = role;

    await user.save();

    res.json({
      message: constants.MESSAGES.USER_OPERATIONS.USER_UPDATED_SUCCESSFULLY,
    });
  } catch (error: unknown) {
    res
      .status(500)
      .json({ message: constants.MESSAGES.ERROR.ERROR_UPDATING_USER });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).exec();
    if (!user) {
      return res
        .status(404)
        .json({ message: constants.MESSAGES.USER_OPERATIONS.USER_NOT_FOUND });
    }
    res.json({
      message: constants.MESSAGES.USER_OPERATIONS.USER_DELETED_SUCCESSFULLY,
    });
  } catch (error: unknown) {
    res
      .status(500)
      .json({ message: constants.MESSAGES.ERROR.ERROR_DELETING_USER });
  }
};

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.q;
    const users = await User.find({
      prcnumber: { $regex: searchQuery, $options: "i" },
    });
    res.json(users);
  } catch (error: unknown) {
    res
      .status(500)
      .json({ message: constants.MESSAGES.ERROR.ERROR_SEARCHING_USERS });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as { id: string }).id;
    const user = await User.findById(userId).exec();

    if (!user) {
      return res
        .status(404)
        .json({ message: constants.MESSAGES.USER_OPERATIONS.USER_NOT_FOUND });
    }

    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: constants.MESSAGES.ERROR.UNKNOWN_ERROR_OCCURRED });
    }
  }
};
