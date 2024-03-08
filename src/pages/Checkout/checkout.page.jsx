import { CheckoutDetails, Header } from "components";
import React from "react";

export const Checkout = () => {
  return (
    <>
      <Header title="Checkout" param={false} />
      <CheckoutDetails />
    </>
  );
};
