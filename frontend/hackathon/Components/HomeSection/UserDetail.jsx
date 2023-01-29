import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Badge,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { ImUserTie } from "react-icons/im";
import { useRouter } from "next/router";
import { SIGNOUT } from "../../src/Redux/actiontypes";
import { getLocalData } from "../../src/Utils/LocalStorage";

const UserDetail = () => {
  const userName = getLocalData("name") || "";
  const userEmail = getLocalData("useremail") || "";
  const userType = getLocalData("usertype") || "";

  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("useremail");
    localStorage.removeItem("usertype");
    localStorage.removeItem("isAuth");
    setTimeout(() => {
      router.push("/homepage");
    }, 2000);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Menu>
        <MenuButton _hover="none">
          <ImUserTie
            cursor="pointer"
            color={{ base: "black", sm: "black", md: "white", lg: "white" }}
            size={24}
          />
        </MenuButton>
        <MenuList
          m={["auto", "auto"]}
          maxW="300px"
          w={["90%", "90%", "300px", "300px"]}
          p="1rem 1.5rem"
        >
          <Text
            textAlign="center"
            fontSize="1.2rem"
            fontWeight="bold"
            color={"#3662d8"}
          >
            Hi, {userName}
          </Text>
          <Text
            textAlign="center"
            m="7px 0px"
            fontSize="1rem"
            color={"#3662d8"}
          >
            {userEmail}
          </Text>
          <Flex justify="center">
            <Badge
              w="60%"
              bg="#3662d8"
              color="white"
              p="0.3rem 0.5rem"
              borderRadius="20px"
              mb="5px"
              textAlign="center"
              fontSize="16px"
            >
              {userType}
            </Badge>
          </Flex>
          <Box p="0.5rem">
            <MenuItem
              justifyContent="center"
              onClick={handleSignOut}
              w="80%"
              m="10px auto"
              p="0.4rem "
              color="white"
              bg="#3662d8"
              textAlign="center"
              fontSize="18px"
              borderRadius="1rem"
            >
              SignOut
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserDetail;
