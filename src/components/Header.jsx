import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location);
  function pathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-50">
      <header className=" flex justify-between items-center px-3 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="flex">
            <FaHome className=" h-5 w-5 text-blue-800 font-semibold" />
            <h1 className=" font-semibold">
              <span className=" font-semibold text-blue-800">NK</span>
              BOOKING&SELL
            </h1>
          </div>
        </Link>
        <div className="">
          <ul className="flex gap-5">
            <Link to={"/"}>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathRoute("/") && " text-black border-b-blue-700"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to={"/offer"}>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathRoute("/offer") && "text-black border-b-blue-700"
                }`}
              >
                Offers
              </li>
            </Link>
            <Link to={"/sign-in"}>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  pathRoute("/sign-in") && "text-black border-b-blue-700"
                }`}
              >
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
