import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="bg-slate-200 p-10 rounded-md ">{children}</div>;
};
