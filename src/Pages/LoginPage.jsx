import { IoFingerPrintOutline } from "react-icons/io5";
export default function LoginPage() {
  return (
    <main className="px-6 h-screen">
      <section>
        <h1 className="text-4xl font-extrabold pb-52 pt-10">Log in</h1>
        <form className="w-full space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold py-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                <ion-icon
                  style={{ color: "black" }}
                  size="large"
                  name="person-circle-outline"
                ></ion-icon>
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
              password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                <ion-icon
                  style={{ color: "black" }}
                  size="large"
                  name="key"
                ></ion-icon>
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

          <button
            type="submit"
            className="uppercase p-5 rounded-full border-4 border-black font-bold tracking-wide bg-white block w-full"
          >
            Log in
          </button>
          <div>
            <button className="p-4 aspect-square rounded-full flex justify-center items-center h-32 bg-primary mx-auto mt-20">
              <IoFingerPrintOutline size={64} style={{ color: "red" }} />
            </button>
            <p className="text-center pt-4">One-Touch Login</p>
          </div>
        </form>
      </section>
    </main>
  );
}
