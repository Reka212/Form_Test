import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" ? (
        <Login onSwitch={() => setPage("register")} />
      ) : (
        <Register onSwitch={() => setPage("login")} />
      )}
    </>
  );
}

export default App;
