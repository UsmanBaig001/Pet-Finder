import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Details from "./details/Details";

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
