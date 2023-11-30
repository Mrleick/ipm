import {
  IoFingerPrintOutline,
  IoPersonCircleOutline,
  IoKey,
} from 'react-icons/io5';
import Heading from '../components/Heading';
import Button from '../components/ui/Button';
import { loginEndpoint } from '../../spotify';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Heading
        level="1"
className="font-bold text-4xl pl-6 inline-block text-black py-20"
        title="Log in"
      />

      <main className="px-6">
        <section>
          <form className="w-full space-y-16">
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
                  className="border-b-2 border-black py-2 px-4 w-full focus:outline-none focus:border-primarycolor"
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
                  className="border-b-2 border-black py-2 px-4 w-full focus:outline-none focus:border-primarycolor"
                />
              </div>
            </div>
            <Link to="/feed">
              <Button title="LOG IN" color="border-black text-black" />
            </Link>
            <div className="flex flex-col items-center mt-8">
              <button className="p-4 aspect-square rounded-full bg-primarycolor">
                <IoFingerPrintOutline size={32} style={{ color: 'white' }} />
              </button>
              <p className="text-center pt-4 text-sm">One-Touch Login</p>
            </div>
            <div className="login-page">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="logo-spotify"
                className="logo"
              />
              <a href={loginEndpoint}>
                <div className="text-black">LOG IN</div>
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
