import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import Footer from "./components/Footer";

const ServiceOverview = dynamic(() => import("./components/homepage/serviceOverview"), {
  loading: () => <div className="min-h-screen animate-pulse bg-gray-50/50"></div>,
  ssr: true
});

export default function Main() {
  return (
    <div >
      <Navbar />
      <Home/>
      <ServiceOverview />
      <Footer />
    </div>
  );
}
