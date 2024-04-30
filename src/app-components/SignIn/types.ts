import { z } from "zod";
import { SignInFormSchema } from "./utils";

type SignInFormType = z.infer<typeof SignInFormSchema>;

export type { SignInFormType };
