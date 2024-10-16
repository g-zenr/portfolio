import cors from "cors";
import { constants } from "./constantsConfig";

const corsOptions = {
  origin: [constants.ORIGIN.URL],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

export default cors(corsOptions);
