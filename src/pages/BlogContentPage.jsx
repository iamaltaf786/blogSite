import React from "react";
import { Navbar, Footer, BlogContent } from "../components";

function BlogContentPage({ blogs }) {
  return (
    <>
      <div>
        <Navbar />
        <BlogContent blogs={blogs ? blogs : ""} />
        <Footer />
      </div>
    </>
  );
}

export default BlogContentPage;
