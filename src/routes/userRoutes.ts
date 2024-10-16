import { Router } from "express";
import {
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
  getCurrentUser,
} from "../controllers/userController";
import endpoints from "../config/endpointsConfig";
import authMiddleware from "../utils/authMiddleware";

const router = Router();

// Public routes
router.post(endpoints.API_ENDPOINTS.USER.LOGIN, login);
router.post(endpoints.API_ENDPOINTS.USER.REGISTER, createUser);

// Protected routes (requires authentication)
router.get(endpoints.API_ENDPOINTS.USER.ALL, authMiddleware, getAllUsers);
router.get(endpoints.API_ENDPOINTS.USER.SINGLE, authMiddleware, getUserById);
router.put(endpoints.API_ENDPOINTS.USER.UPDATE, authMiddleware, updateUser);
router.delete(endpoints.API_ENDPOINTS.USER.DELETE, authMiddleware, deleteUser);
router.get(endpoints.API_ENDPOINTS.USER.SEARCH, authMiddleware, searchUsers);
router.get(
  endpoints.API_ENDPOINTS.USER.CURRENT,
  authMiddleware,
  getCurrentUser
);

export default router;
