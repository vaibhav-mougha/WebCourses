import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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
