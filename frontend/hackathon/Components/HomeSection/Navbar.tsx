import React from "react";
import { ReactNode } from 'react';
import { Box, Flex, Hide, Text, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Button,
  Link,useColorModeValue,
  useColorMode,

} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLessThan, FaGreaterThan, FaSearchengin } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";
import SignUpPopUp from "./SignUpPopUp";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue("#257CFF", "gray.900"),
    }}
    href={'#'}>
    {children}
  </Link>
);


const Navbar = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const hamStyle = {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
    color: "white",
    backgroundColor: "#2F7693",
    padding: "0.5rem ",
    borderRadius: "0.4rem",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const logoIcon = {
    fontSize: "30px",
    color: "#fc766aff",
    fontFamily: { Lobster: "cursive" },
    fontWeight: 600,
  };

  const handleFullStackClick = () => {
    router.push(`fullstack/`);
  };

  const handleBackEndClick = () => {
    router.push(`backend/`);
  };

  const handleFrontEndClick = () => {
    router.push(`frontend/`);
  };

  const handleHomeClick = () => {
    router.push(`/`);
  };
  

  return (
    <Box
      w={"100%"}
      // bg={"#2F7693"}
      bg= {useColorModeValue("#257CFF", "gray.900")}
      p={"0px 15px"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Flex h={"80px"} justify={"space-between"} alignItems={"center"}>
        {/* Name Logo */}

        <Flex columnGap={"7px"} cursor={"pointer"}>
          <Flex
            justify={"center"}
            align={"center"}
            color={"#e3e9ee"}
            fontSize={24}
          >
            <Text color={"#fc766aff"}>
              <FaLessThan />
            </Text>
            <Text>
              <FaSearchengin />
            </Text>
            <Text color={"#fc766aff"}>
              <FaGreaterThan />
            </Text>
          </Flex>
          <Flex
            justify={"center"}
            align={"center"}
            fontSize={"30px"}
            color={"#fc766aff"}
            fontFamily={"Lobster, cursive"}
            fontWeight={600}
            gap={"5px"}
            onClick={() => handleHomeClick()}
          >
            <Text> Web</Text>
            <Text color={"white"}> Courses</Text>
          </Flex>
        </Flex>

        {/* Different Tabs */}
        <Flex
          display={["none", "none", "none", "flex"]}
          justify="space-between"
          alignItems={"center"}
          gap={"15px"}
        >
          <Flex
            alignItems="center"
            color="white"
            h="40px"
            p="0px 18px"
            borderRadius="5px"
            columnGap="2.5px"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >
            <AiOutlineHome size={20} />
            <Text fontSize={"18px"}  onClick={() => handleFrontEndClick()}>
              FrontEnd <Hide below="lg">Courses</Hide>
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            color="white"
            h="40px"
            p="0px 18px"
            borderRadius="5px"
            columnGap="2.5px"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >
            <MdBackpack size={18} />
            <Text fontSize={"18px"} onClick={() => handleBackEndClick()}>BackEnd Courses</Text>
          </Flex>

          



          <Flex
            alignItems="center"
            color="white"
            h="40px"
            p="0px 18px"
            borderRadius="5px"
            columnGap="2.5px"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >
            <AiOutlineRocket size={20} />
            <Text fontSize={"18px"} onClick={() => handleFullStackClick()}>Full Stack Courses</Text>
          </Flex>

          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <Box color="#257CFF"><MoonIcon /></Box> : <SunIcon />}
              </Button>


          <Flex
            alignItems="center"
            color="white"
            h="40px"
            p="0.5rem 1rem"
            borderRadius="5px"
            columnGap="2.5px"
           
          >
            <SignUpPopUp />
          </Flex>
        </Flex>

        {/*Hamburger Menu */}
        <Box
          display={["inline-block", "inline-block", "inline-block", "none"]}
          bg={"#e3e9ee"}
          p={"5px"}
          borderRadius={"5px"}
        >
          <GiHamburgerMenu color="#257CFF" onClick={onOpen} size={"40px"} />
        </Box>

        {/* HamBurger Drawer */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody>
              <Flex
                m="25px auto"
                style={hamStyle}
                onClick={onClose}
                _hover={{
                  backgroundColor: "white",
                  boxShadow: "0 1px 1px 1px #257CFF",
                }}
              >
                <AiOutlineHome size={20} />
                <Text fontSize={"18px"} onClick={() => handleFrontEndClick()}>FrontEnd Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                onClick={onClose}
                _hover={{
                  backgroundColor: "white",
                  boxShadow: "0 1px 1px 1px #257CFF",
                }}
              >
                <MdBackpack size={18} />
                <Text fontSize={"18px"} onClick={() => handleBackEndClick()}>BackEnd Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                onClick={onClose}
                _hover={{
                  backgroundColor: "white",
                  boxShadow: "0 1px 1px 1px #257CFF",
                }}
              >
                <AiOutlineRocket size={20} />
                <Text fontSize={"18px"} onClick={() => handleFullStackClick()}>Full Stack Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                _hover={{
                  backgroundColor: "white",
                  boxShadow: "0 1px 1px 1px #257CFF",
                }}
              >
                <SignUpPopUp />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
