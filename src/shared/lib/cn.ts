import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const cn = (...values: ClassValue[]) => twMerge(clsx(...values));
