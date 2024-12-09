import Image from "next/image";
import Header from "./components/Header";
import Main from "./home/page";
import Store from "./store/page";
import JoinUs from "./join-us/page";
import Login from "./login/page"
import Footer from "./components/Footer";
import ProductDetails from './product-details/page';
import Checkout from './checkout/page'
import Pooter from "./components/Pooter";
import Gear from "./gear";

export default function Home() {
  return (
    <>
    <Header />
    {/* <JoinUs /> */}
    {/* <Login /> */}
    {/* <Gear /> */}
    {/* <ProductDetails /> */}
    <Checkout />

    <Footer />
    {/* <Pooter /> */}
    </>
  );
}
