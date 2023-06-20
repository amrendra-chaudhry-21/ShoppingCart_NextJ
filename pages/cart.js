import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import CartList from "../components/CartList";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {cartItem.length <= 0 ? (
          <h1 className="text-center text-4xl mt-32">Your Cart Is Empty!</h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}

        {cartItem.length > 0 && (
          <div className="max-w-[800px] mx-auto mt-4">
            <button className="text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
