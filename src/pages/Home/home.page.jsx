import React from "react";
import {
  ProductSection,
  WhyChooseUs,
  WeHelp,
  PopularProduct,
  Testimonial,
  Blog,
  Header,
} from "components";

export const Home = () => {
  return (
    <>
      <Header />
      <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <Testimonial />
      <Blog />
    </>
  );
};
