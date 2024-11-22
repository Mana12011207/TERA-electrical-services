import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen sm:border sm:border-purple-500 ">
      <Header />
      <div className="container mx-auto h-full w-full max-w-[1536px] flex-grow flex">
        {children}
      </div>
      <Footer />
    </div>
  );
}
