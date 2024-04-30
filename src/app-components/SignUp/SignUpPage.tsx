import { AuthLayout } from "../AuthLayout/AuthLayout";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-full bg-pink-200"></div>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </div>
  );
};
