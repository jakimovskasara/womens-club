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
import { SignUpFormType } from "./types";
import { SignUpFormSchema } from "./utils";
import { GoogleSignUpButton } from "./GoogleSignUpButton";
import { Checkbox } from "@/components/ui/checkbox";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

// TODO: Make DB call when ready

export const SignUpForm = () => {
  const form = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const [terms, setTerms] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  const onSubmit = (values: SignUpFormType) => {
    if (terms) {
      console.log(values);
    }
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
          <div className="space-y-2 md:flex md:space-x-4 md:space-y-0">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="md:w-1/2">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="md:w-1/2">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Confirm your password"
                      type={showRepeatPassword ? "text" : "password"}
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() =>
                        setShowRepeatPassword((prevState) => !prevState)
                      }
                    >
                      {showRepeatPassword ? (
                        <AiFillEyeInvisible />
                      ) : (
                        <AiFillEye />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Sign up
        </Button>
        <div className="flex flex-col space-y-2 mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms-checkbox"
              onCheckedChange={() => setTerms((prevState) => !prevState)}
            />
            <label
              htmlFor="terms-checkbox"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[0.8rem] text-muted-foreground"
            >
              By clicking Sign up, I agree that I have read and accepted the
              Terms of Use and Privacy Policy.
            </label>
          </div>
          {form.formState.isSubmitted && !terms && (
            <label
              htmlFor="terms-checkbox"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[0.8rem] text-red-500"
            >
              You must agree to the Terms of Use and Privacy Policy to sign up.
            </label>
          )}
        </div>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleSignUpButton>Sign up with Google</GoogleSignUpButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account?&nbsp;
        <Link className="text-blue-500 hover:underline" to={Routes.LOGIN}>
          Sign in
        </Link>
      </p>
    </Form>
  );
};
