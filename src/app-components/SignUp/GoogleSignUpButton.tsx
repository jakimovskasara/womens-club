import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type GoogleSignUpButtonProps = {
  children: ReactNode;
};

export const GoogleSignUpButton = ({ children }: GoogleSignUpButtonProps) => {
  const googleSignUp = () => {
    console.log("Google sign up");
  };

  return (
    <Button onClick={googleSignUp} className="w-full">
      {children}
    </Button>
  );
};
