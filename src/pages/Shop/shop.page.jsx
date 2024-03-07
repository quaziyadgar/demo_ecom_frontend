import React from "react";
import { Header, Products } from "components";

export const Shop = () => {
  return (
    <>
      <Header param={false} title="Shop" />
      <Products />
    </>
  );
};
