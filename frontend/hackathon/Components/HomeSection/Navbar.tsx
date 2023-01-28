import React from "react";
import { Box, Flex, Hide, Text, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLessThan, FaGreaterThan, FaSearchengin } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";
import SignUpPopUp from "./SignUpPopUp";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <Box
      w={"100%"}
      bg={"#2F7693"}
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
          >
            <Text> CODE</Text>
            <Text color={"#e3e9ee"}> SEARCH</Text>
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
              color: "black",
              backgroundColor: "#b7ced8",
              boxShadow: "0 1px 1px 1px black",
            }}
          >
            <AiOutlineHome size={20} />
            <Text fontSize={"18px"}>
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
              color: "black",
              backgroundColor: "#b7ced8",
              boxShadow: "0 1px 1px 1px black",
            }}
          >
            <MdBackpack size={18} />
            <Text fontSize={"18px"}>BackEnd Courses</Text>
          </Flex>

          <Flex
            alignItems="center"
            color="white"
            h="40px"
            p="0px 18px"
            borderRadius="5px"
            columnGap="2.5px"
            _hover={{
              color: "black",
              backgroundColor: "#b7ced8",
              boxShadow: "0 1px 1px 1px black",
            }}
          >
            <AiOutlineRocket size={20} />
            <Text fontSize={"18px"}>Full Stack Courses</Text>
          </Flex>

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
          <GiHamburgerMenu color="black" onClick={onOpen} size={"40px"} />
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
                  backgroundColor: "#b7ced8",
                  boxShadow: "0 1px 1px 1px black",
                }}
              >
                <AiOutlineHome size={20} />
                <Text fontSize={"18px"}>FrontEnd Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                onClick={onClose}
                _hover={{
                  backgroundColor: "#b7ced8",
                  boxShadow: "0 1px 1px 1px black",
                }}
              >
                <MdBackpack size={18} />
                <Text fontSize={"18px"}>BackEnd Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                onClick={onClose}
                _hover={{
                  backgroundColor: "#b7ced8",
                  boxShadow: "0 1px 1px 1px black",
                }}
              >
                <AiOutlineRocket size={20} />
                <Text fontSize={"18px"}>Full Stack Courses</Text>
              </Flex>

              <Flex
                m="25px auto"
                style={hamStyle}
                _hover={{
                  backgroundColor: "#b7ced8",
                  boxShadow: "0 1px 1px 1px black",
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
