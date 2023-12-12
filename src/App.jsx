import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [context, setContext] = useState(false);
  const [preemToken, setPreemToken] = useState()
  return (
    <div className={"app " + (context && "dark")}>
      <Outlet context={[context, setContext,preemToken,setPreemToken]} />
    </div>
  );
}

export default App;
