import React from "react";
import { Navbar, Blogs, Footer } from "../components";

function Homepage() {
  return (
    <>
      <div>
        <Navbar />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
