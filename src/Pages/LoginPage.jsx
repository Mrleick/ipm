import {
  IoFingerPrintOutline,
  IoPersonCircleOutline,
  IoKey,
} from "react-icons/io5";
import Heading from "../components/Heading";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import FooterMenu from "../components/FooterMenu";

export default function LoginPage() {
  return (
    <>
      <header className="dark:bg-primarycolor">
        <Heading
          level="1"
          className="font-bold text-4xl pl-6 inline-block text-black dark:bg-primarycolor dark:text-white pt-10 pb-18"
          title="Log in"
        />
      </header>
      <main className="px-6 pb-7 dark:bg-primarycolor">
        <section>
          <form className="w-full space-y-8 dark:bg-primarycolor dark:text-white">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold py-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                  <IoPersonCircleOutline
                    size={32}
                    className=" dark:text-white"
                  />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="border-b-2 dark:bg-primarycolor dark:text-white dark:border-white border-black py-2 px-4 w-full focus:outline-none focus:border-primarycolor"
                />
              </div>
            </div>
            <div className="flex flex-col pb-10">
              <label htmlFor="password" className="font-bold py-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                  <IoKey size={32} />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border-b-2 dark:bg-primarycolor dark:text-white dark:border-white border-black py-2 px-4 w-full focus:outline-none focus:border-primarycolor"
                />
              </div>
            </div>
            <Link to="/feed">
              <Button
                title="LOG IN"
                className=""
                color="border-black text-black  dark:bg-primarycolor dark:border-white  dark:text-white"
              />
            </Link>
            <div className="flex flex-col items-center mt-4">
              <button className="p-4 aspect-square rounded-full dark:bg-gradient-color1 bg-primarycolor">
                <IoFingerPrintOutline size={32} style={{ color: "white" }} />
              </button>
              <p className="text-center pt-4 pb-24 text-sm">One-Touch Login</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
