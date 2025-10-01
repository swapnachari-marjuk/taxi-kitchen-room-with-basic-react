import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 max-w-11/12 mx-auto py-4">
      <Logo></Logo>
      <nav>
        <ul className="flex gap-8 md:gap-14 ">
          <li className="">
            <a
              href="#"
              className="border-b-3  py-1 border-amber-400 duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 py-1 border-amber-400 duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 py-1 border-amber-400 duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 py-1 border-amber-400 duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
