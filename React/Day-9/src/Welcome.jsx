import { Link, Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="w-screen min-h-screen text-2xl flex flex-col justify-between">
      {/* NavBar */}
      <div className="NavBar flex justify-evenly p-6 bg-indigo-900 text-white">
        <Link to="/"><h1>JustChill</h1></Link>
        <div className="flex justify-between gap-4">
          <Link to="/Home"><p>Home</p></Link>
          <Link to="/About"><p>About</p></Link>
          <Link to="/Contact"><p>Contact</p></Link>
        </div>
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>

      <div className="footersection flex w-full bg-indigo-900 h-14 items-center justify-center text-white">
        Footer
      </div>
    </div>
  );
}
