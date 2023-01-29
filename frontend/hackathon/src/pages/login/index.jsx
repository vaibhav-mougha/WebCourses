import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../Redux/action";
import { getLocalData, saveLocalData } from "../../Utils/LocalStorage";
import {
  useToast,
  Text,
  Spinner,
  Input,
  Box,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const initial = {
  email: "",
  password: "",
};

export default function Login() {
  const [formdata, setformdata] = useState(initial);
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const { alldata, isLoading, isError } = useSelector((state) => {
    return {
      alldata: state.alldata,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  });

  const inputCSS = {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    boxSizing: "borderBox",
    marginTop: "6px",
    marginBottom: "16px",
    fontSize: "14px",
  };

  const { email, password } = formdata;

  const handleChange1 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, email: event.target.value });
  };

  const handleChange3 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, password: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formdata);
    dispatch(getLogin(formdata)).then((res) => {
      console.log(res);
      if (res.payload.msg === "logged in success") {
        saveLocalData("token", res.payload.token);
        saveLocalData("name", res.payload.username);
        saveLocalData("useremail", res.payload.useremail);
        saveLocalData("usertype", res.payload.usertype);
        saveLocalData("mobile", res.payload.mobile);
        let isAuth = true;
        saveLocalData("isAuth", isAuth);
        toast({
          title: "Login Successfull.",
          description: "Welcome to Web Courses ",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        router.push(`/`);
      } else if (res.payload.msg === "User Not found") {
        toast({
          title: "User Not found",
          description: "Enter the correct credentials.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  const nameLocal = getLocalData("name") || "";

  return (
    <Box
      margin={"auto"}
      width={{ base: "80%", sm: "80%", md: "50%", lg: "35%" }}
      mt="4rem"
      mb="4rem"
    >
      <Box
        padding={"20px"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        <form margin="auto" padding="20px" borderRadius="5px" height={"90vh"}>
          <Heading
            fontSize={{ base: "3xl", sm: "3xl", md: "5xl", lg: "5xl" }}
            fontFamily={"body"}
            mt="1rem"
            mb="2rem"
            textAlign={"center"}
            textDecoration="underline"
            color="#257CFF"
            _hover={{
              color: "#257CFF",
            }}
          >
            Login Form
          </Heading>
          {nameLocal ? (
            <Text mb={"20px"} fontSize={"18px"} color={"green"}>
              You are login, keep explore
            </Text>
          ) : null}
          <Input
            style={inputCSS}
            placeholder="Enter email"
            onChange={handleChange1}
            value={email}
          />{" "}
          <br />
          <Input
            style={inputCSS}
            placeholder="Enter Password"
            type={"password"}
            onChange={handleChange3}
            value={password}
          />
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              fontSize: "80%",
              color: "rgb(97, 97, 97)",
            }}
          >
            By logging in, I agree to the Terms & Conditions, Privacy Statement
            and Rewards Terms and Conditions.
          </p>
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : null}
          <Button
            width={"100%"}
            margin={"auto"}
            marginTop={"15px"}
            onClick={handleClick}
            fontSize={"24px"}
            color="white"
            backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >
            Login
          </Button>
          <p
            style={{
              marginTop: "20px",
              fontSize: "90%",
              color: "rgb(97, 97, 97)",
              textAlign: "center",
            }}
          >
            Don't have an account?
          </p>
          <p
            style={{
              fontSize: "90%",
              color: "rgb(97, 97, 97)",
              textAlign: "center",
            }}
          >
            or continue with
          </p>
          <Flex margin={"auto"} width={"30px"} height={"30px"} gap={"10px"}>
            <img
              src="https://a.travel-assets.com/egds/marks/apple.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src="https://a.travel-assets.com/egds/marks/facebook.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
