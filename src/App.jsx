import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [context, setContext] = useState(false);
  return (
    <div className={"app " +(context && "dark")}>
      <Outlet context={[context, setContext]} />
    </div>
  );
}

export default App;
