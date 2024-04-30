import { z } from "zod";
import { SignUpFormSchema } from "./utils";

type SignUpFormType = z.infer<typeof SignUpFormSchema>;

export type { SignUpFormType };
