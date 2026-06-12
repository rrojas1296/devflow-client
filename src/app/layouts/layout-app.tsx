import HeaderApp from "@/shared/components/header-app/header-app";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const LayoutApp = ({ children }: Props) => {
  return (
    <div>
      <HeaderApp />
      <section className="w-11/12 max-w-9xl mx-auto py-5">{children}</section>
    </div>
  );
};

export default LayoutApp;
