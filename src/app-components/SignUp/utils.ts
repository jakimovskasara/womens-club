import { z } from "zod";

const SignUpFormSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(255, "First name is too long"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(255, "Last name is too long"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
    confirmPassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { SignUpFormSchema };
