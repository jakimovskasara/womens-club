import { AuthLayout } from "../AuthLayout/AuthLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-full bg-pink-200"></div>
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </div>
  );
};
