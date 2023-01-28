import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../Components/HomeSection/Navbar";
import Footer from "../../Components/HomeSection/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
