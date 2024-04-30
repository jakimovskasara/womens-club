import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Routes } from "@/app-utils/routes";
import { SignInFormType } from "./types";
import { SignInFormSchema } from "./utils";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export const SignInForm = () => {
  const form = useForm<SignInFormType>({
    resolver: zodResolver(SignInFormSchema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (values: SignInFormType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Sign in
        </Button>
        <div className="text-center">
          <Link
            to={Routes.FORGOT_PASSWORD}
            className="text-sm text-gray-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don't have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" to={Routes.REGISTER}>
          sign up
        </Link>
      </p>
    </Form>
  );
};
