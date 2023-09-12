import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearBasket,
  decreaseCart,
  removeFromCart,
} from "../features/addToCardSlice";
import { calculateTotalPrice } from "../features/addToCardSlice";

const BasketPage = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [carts]);

  const handleRemoveFromCart = (cart) => {
    dispatch(removeFromCart(cart));
  };
  const handleDecreaseCart = (cart) => {
    dispatch(decreaseCart(cart));
  };
  const handleincreaseCart = (cart) => {
    dispatch(addToCart(cart));
  };
  const handleClearBasket = () => {
    dispatch(clearBasket());
  };
  return (
    <>
      <Link to="/" className="text-center no-underline">
        <h2 className="text-black my-3">Shopping Cart</h2>
      </Link>
      {carts.cartItems.length === 0 ? (
        <div>
          <p className="text-center">سبد شما خالی میباشد</p>
        </div>
      ) : (
        <div className="overflow-x-auto px-3">
          <table className="border w-full sm:w-8/12 mx-auto">
            <thead className="border border-b-1">
              <tr className="font-bold text-center">
                <td className=" text-start py-2 ps-3">محصول:</td>
                <td>قیمت:</td>
                <td>تعداد:</td>
                <td className="mx-10">جمع کل:</td>
              </tr>
            </thead>
            {carts.cartItems?.map((cart) => (
              <tbody key={cart.id}>
                <tr className="py-3">
                  <td className="flex pe-10">
                    <img
                      src={cart.image}
                      alt={cart.title}
                      className=" p-2 object-scale-down h-12 w-12 "
                    />
                    <div className="block ps-4 w-[200px] ">
                      <p className="text-start truncate sm:text-break">
                        {cart.title}
                      </p>
                      <p
                        className="text-red-500 text-start"
                        style={{ fontSize: "12px" }}
                        onClick={() => handleRemoveFromCart(cart)}
                      >
                        حذف محصول
                      </p>
                    </div>
                  </td>
                  <td className="text-center px-7">{cart.price}</td>
                  <td className="text-center ">
                    <div className="flex mx-auto justify-around border rounded">
                      <div
                        className="px-5 sm:px-3 py-1"
                        onClick={() => handleincreaseCart(cart)}
                      >
                        +
                      </div>

                      <div className="px-5 sm:px-3 py-1">
                        {cart.cartQuantity}
                      </div>
                      <div
                        className="px-5 sm:px-3 py-1"
                        onClick={() => handleDecreaseCart(cart)}
                      >
                        -
                      </div>
                    </div>
                  </td>
                  <td className="text-center px-5">
                    <p className="w-28 mx-auto">
                      {cart.price * cart.cartQuantity * 1000} تومان
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
      {carts.cartItems.length === 0 ? (
        <div className="flex justify-center">
          <Link
            to="/"
            type="button"
            className="btn btn-sm  btn-outline-secondary "
          >
            بازگشت به صفحه نخست
          </Link>
        </div>
      ) : (
        <div className="md:flex justify-around mt-4 block mx-3">
          <div className="border p-3">
            <div className="flex justify-between">
              <h5 className="font-bold">قیمت نهایی:</h5>
              <p className="font-bold">{carts.cartTotalAmount} تومان</p>
            </div>
            <p className="text-start text-sm mt-3">
              قیمت نهایی قابل پرداخت سبد خرید شما
            </p>
            <br />
            <Link
              to=""
              className="text-start bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm w-full flex justify-center"
            >
              پرداخت
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full justify-center text-sm mt-2 flex"
              onClick={() => handleClearBasket()}
            >
              حذف کامل سبد خرید
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BasketPage;
