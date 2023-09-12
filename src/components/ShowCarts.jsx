import React from "react";
import { useGetAllCartsQuery } from "../features/ApiSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCardSlice";

const ShowCarts = () => {
  const { data, isLoading } = useGetAllCartsQuery();
  const dispatch = useDispatch()

  const handleAddToCart = (cart)=>
  {
    dispatch(addToCart(cart))  
  }

  return (
    <>
      {isLoading ? (
        <p className="text-white">is loading...</p>
      ) : (
        <>
          <div className=" mx-3 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 ">
            {data?.map((cart) => (
              <div className="border shadow " key={cart.id}>
                <div className="mx-auto">
                  <img
                    src={cart.image}
                    className="mx-auto p-2 w-full object-scale-down h-48 w-96"
                    alt="..."
                    style={{}}
                  />
                  <div className="p-3">
                    <h5 className="text-md font-bold truncate my-2">{cart.title}</h5>
                    <p className="my-2">
                     نمونه متن کوتاه برای ساختن متن کارت و تشکیل بخش عمده ای از محتوای کارت.
                    </p>
                    <p className="my-3 Text-sm"> قیمت: {cart.price} تومان </p>
                    <Link to="/basket" onClick={()=> handleAddToCart(cart)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex justify-center">
                      افزودن به سبد خرید
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ShowCarts;
