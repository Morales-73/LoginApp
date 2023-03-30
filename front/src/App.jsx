import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./components/Login"
import {Register} from "./components/Register"
import {NoPage} from "./components/NoPage"
import {Home} from "./components/Home";
import {Logout} from "./components/Logout";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
