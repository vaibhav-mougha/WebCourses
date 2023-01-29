import React, { useState } from "react";
import "../login/login.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../Redux/action";
import { getLocalData, saveLocalData } from "../../Utils/LocalStorage";
import { useToast, Text, Spinner, Input, Box, Heading, Button } from "@chakra-ui/react";
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
    <Box mt="4rem" mb="4rem">
      <form className="form">
      <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
            fontFamily={"body"}
            mt="2rem"
            mb="2rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textDecoration="underline"
            color="#257CFF"
            // backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              // backgroundColor: "white",
              // boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >Login Form</Heading>
        {nameLocal ? (
          <Text mb={"20px"} fontSize={"18px"} color={"green"}>
            You are login, keep explore
          </Text>
        ) : null}
        <Input
          placeholder="Enter email"
          onChange={handleChange1}
          value={email}
        />{" "}
        <br />
        <Input
          placeholder="Enter Password"
          onChange={handleChange3}
          value={password}
        />
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          Selecting this checkbox will keep you signed into your account on this
          device until you sign out. Do not select this on shared devices.
        </p>
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          By creating an account, I agree to the Terms & Conditions{" "}
          <a href="T&C">Terms and Conditions</a>,{" "}
          <a href="https://www.tripoto.com/privacy-policy">
            {" "}
            Privacy Statement
          </a>{" "}
          and <a href=""> Rewards Terms and Conditions.</a>
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
        <Button className="para" onClick={handleClick}  mt="1rem"
            fontSize={"24px"}
            color="white"
            backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center">
          Login
        </Button>
        <p>Don't have an account?</p>
        <p>or continue with</p>
        <div>
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
        </div>
      </form>
    </Box>
  );
}
