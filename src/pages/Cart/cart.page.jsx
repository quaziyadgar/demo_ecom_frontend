import { CartItem, Header } from "components";
import React from "react";

export const Cart = () => {
  return (
    <>
      <Header param={false} title="Cart" />
      <CartItem />
    </>
  );
};
