import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Define the BaseLayout component, which receives children as a prop.
export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-grow w-full">{children}</div>
      <Footer />
    </div>
  );
}
