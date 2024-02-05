import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Details from "./Details/Details";

export default function Index() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:petsId" element={<Details />} />
      </Routes>

      <Footer />
    </>
  );
}
