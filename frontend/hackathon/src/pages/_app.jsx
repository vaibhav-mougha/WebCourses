import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from 'react-redux'
import {store} from "../Redux/store"

import Navbar from "../../Components/HomeSection/Navbar";
import Footer from "../../Components/HomeSection/Footer";


function MyApp({ Component, pageProps }) {
  return (
   
    <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
    
  );
}

export default MyApp;
