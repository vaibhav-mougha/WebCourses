import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const SignUpPopUp = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(`login/`);
  };

  const handleSignup = () => {
    router.push(`signup/`);
  };
  
  return (
    <Menu>
      <MenuButton
        color={"white"}
        p="0.5rem 1rem"
        fontSize={18}
        fontWeight={"500"}
        borderRadius={"1rem"}
        textAlign={"center"}
        border={"1px solid white"}
        _hover={{
          color: "#257CFF",
          backgroundColor: "white",
          boxShadow: "0 1px 1px 1px #257CFF",
        }}
      >
        Sign in for free
      </MenuButton>
      <MenuList
        m={["auto", "auto"]}
        maxW="400px"
        w={["85%", "90%", "400px", "400px"]}
        p="1rem 1.5rem"
      >
        <Text fontSize="1.2rem" fontWeight="bold" color={"black"}>
          You could be getting lower prices.
        </Text>
        <Text m="7px 0px" fontSize="0.8rem" color={"black"}>
          Go GEEK. Save time and get more courses to explore.
        </Text>

        <MenuItem w="100%">
          <Box
            w="100%"
            m="10px 0px"
            p={"0.4rem "}
            color="white"
            backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
            textAlign={"center"}
            fontSize="20px"
            borderRadius={"1rem"}
            onClick={() => handleLogin()}
          >
            Sign in
          </Box>
        </MenuItem>
        <MenuItem w="100%" borderRadius={"1rem"}>
          <Box
            m="15px 0px"
            w="100%"
            color="white"
            backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
            p={"0.4rem "}
            textAlign={"center"}
            fontSize="20px"
            borderRadius={"1rem"}
            onClick={() => handleSignup()}
          >
            Sign up, it's free
          </Box>
        </MenuItem>

        <Box borderTop="0.5px solid gray" color={"black"} p="1rem 0px">
          <MenuItem fontSize="0.9rem">Feedback</MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default SignUpPopUp;
