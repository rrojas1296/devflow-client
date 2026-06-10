import { VITE_API_URL } from "@/app/config/environments";
import axios from "axios";

export const instance = axios.create({
  baseURL: VITE_API_URL + "/api",
});
