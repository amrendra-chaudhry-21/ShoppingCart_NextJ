import React from "react";

const CartList = ({ data }) => {
  const { title, image, count, rating,category,price } = data;

  return (
    <div>
      <div className="bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between">
        <img className="h-[100px]" src={image} alt="" />

        <div>
          <div className="font-bold text-2xl">{title}</div>
          <div>Rating: {rating.rate}</div>
          <div>Category: {category}</div>
        </div>

        <div className="text-3xl font-bold">${price}</div>
      </div>
    </div>
  );
};

export default CartList;
