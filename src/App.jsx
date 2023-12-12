import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [context, setContext] = useState(false);
  const [preemToken, setPreemToken] = useState()
  const [GlobalPlayer,setGlobalPlayer] = useState()
  return (
    <div className={"app " + (context && "dark")}>
      <Outlet context={[context, setContext,preemToken,setPreemToken,GlobalPlayer,setGlobalPlayer]} />
    </div>
  );
}

export default App;
