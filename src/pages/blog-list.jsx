import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import SectionTitle from "@/components/blog/blog-grid/section-title";
import BlogGridArea from "@/components/blog/blog-grid/blog-grid-area";
import Header from "@/layout/headers/header";

const BlogListPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog List" />
      <Header/>
      <SectionTitle/>
      <BlogGridArea list_area={true} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default BlogListPage;
