import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import Footer from "./components/Footer";
export default function Main() {
  return (
    <div >
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}
