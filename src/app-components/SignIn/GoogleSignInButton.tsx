import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type GoogleSignInButtonProps = {
  children: ReactNode;
};

export const GoogleSignInButton = ({ children }: GoogleSignInButtonProps) => {
  const googleSignIn = () => {
    console.log("Google sign in");
  };

  return (
    <Button onClick={googleSignIn} className="w-full">
      {children}
    </Button>
  );
};
