import {
  IoFingerPrintOutline,
  IoPersonCircleOutline,
  IoKey,
} from "react-icons/io5";
import Heading from "../components/Heading";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Heading
        level="1"
        className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12 px-6"
        title="Log in"
      />
      <main className="px-6">
        <section className="pt-12">
          <form className="w-full space-y-6">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold py-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                  <IoPersonCircleOutline size={32} />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="border-b-4 border-black py-4 w-full"
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
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border-b-4 border-black py-4 w-full"
                />
              </div>
            </div>
            <Link to="/feed">
              <Button title="LOG IN" color="border-black text-black" />
            </Link>
            <div>
              <button className="p-4 aspect-square rounded-full flex justify-center items-center h-32 bg-primarycolor mx-auto mt-20">
                <IoFingerPrintOutline size={64} style={{ color: "white" }} />
              </button>
              <p className="text-center pt-4">One-Touch Login</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
