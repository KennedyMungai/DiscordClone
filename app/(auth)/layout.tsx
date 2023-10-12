import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-zinc-600">
      {children}
    </div>
  );
};

export default AuthLayout;
