import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <header className="bg-black py-2 text-md shadow-md flex justify-center">
        <div className="container mx-2 flex justify-between">
          <h3 className="text-white py-2">shopping card</h3>
          <span className="relative flex my-auto">
            <BiCart className="text-white relative" />
            <span className="absolute inline-flex text-red-500 opacity-75 left-4 -top-3">
              {cartTotalQuantity}
            </span>
          </span>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
