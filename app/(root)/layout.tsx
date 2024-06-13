import { ChildProps } from "@/types";
import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
