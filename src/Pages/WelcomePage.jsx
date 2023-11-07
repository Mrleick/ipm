import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/Login">Login</Link>
    </>
  );
};

export default WelcomePage;
