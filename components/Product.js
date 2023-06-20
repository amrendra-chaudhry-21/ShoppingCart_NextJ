import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import toast from "react-hot-toast";
import { BsHeart } from "react-icons/bs";

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      });
    }

    toast(`${product.title} added to cart`);
  };

  return (
    <div className="bg-gray-200">
      <img src={product.image} alt="" className="mx-auto w-[450px] h-[450px]" />
      <div className="flex items-center justify-between">
        <div className="px-5">
          <h2 className="font-bold mt-2">{product.title}</h2>
          <p>{product.category}</p>
        </div>

        <div className="px-5">
          <BsHeart title="Add to Wishlist" className="cursor-pointer" />
        </div>
      </div>
      <div className="my-4 px-5">
        <small className="bg-green-600  rounded-full px-4 text-white tracking-widest mr-3">
          {product.rating.rate}
        </small>
      </div>
      <p className="text-2xl my-4 px-5 flex items-center justify-end">
        ${product.price}
      </p>
      <button
        className="bg-red-600 text-white py-4 px-12 mt-2 block mx-auto hover:bg-red-800"
        onClick={addItemsToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
