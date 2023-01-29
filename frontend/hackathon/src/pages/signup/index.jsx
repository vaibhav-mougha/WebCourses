import React, { useEffect, useState } from "react";
import { getRegistration } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const initial = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  person: "user",
};

const Signup = () => {
  const toast = useToast();
  const router = useRouter();
  const [formdata, setformdata] = useState(initial);
  const dispatch = useDispatch();

  const inputCSS = {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    boxSizing: "borderBox",
    marginTop: "6px",
    marginBottom: "16px",
    fontSize: "14px",
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, name: event.target.value });
  };
  const handleChange1 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, email: event.target.value });
  };
  const handleChange2 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, mobile: event.target.value });
  };
  const handleChange3 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, password: event.target.value });
  };
  const handleChange4 = (event) => {
    console.log(event.target.value);
    setformdata({ ...formdata, person: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(formdata);
    dispatch(getRegistration(formdata)).then((res) => {
      console.log(res);

      if (
        res &&
        res.payload &&
        res.payload.data &&
        res.payload.data.msg === "registred"
      ) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        router.push(`login/`);
      } else if (
        res &&
        res.payload &&
        res.payload.data &&
        res.payload.data.msg === "email is allready added try to login"
      ) {
        toast({
          title: "User already exist",
          description: "Please  login.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

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
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "5xl" }}
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
            Create an account
          </Heading>
          <Input
            style={inputCSS}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <br />
          <Input
            style={inputCSS}
            placeholder="Enter email"
            onChange={handleChange1}
          />
          <br />
          <Input
            style={inputCSS}
            placeholder="Enter Mobile"
            onChange={handleChange2}
          />
          <br />
          <Input
            style={inputCSS}
            placeholder="Enter Password"
            onChange={handleChange3}
          />
          <br />
          <select
            id=""
            onChange={handleChange4}
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "white",
              border: "none",
              color: "#257cff",
              borderRadius: "5px",
            }}
          >
            <option>Select Person</option>
            <option value="user">User</option>
            <option value="Admin">Admin</option>
          </select>
          <br />
          <p
            style={{
              marginTop: "10px",
              marginBottom: "15px",
              fontSize: "80%",
              color: "rgb(97, 97, 97)",
            }}
          >
            By creating an account, I agree to the the terms & Conditions
            <a href=""> Terms and Conditions</a>,
            <a href=""> Privacy Statement</a>&{" "}
            <a href=""> Rewards Terms and Conditions.</a>
          </p>
          <Button
            width={"100%"}
            margin={"auto"}
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
            Continue
          </Button>
          <p
            style={{
              fontSize: "90%",
              color: "rgb(97, 97, 97)",
              textAlign: "center",
              padding: "15px",
            }}
          >
            Already have an account?
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
};

export async function getServerSideProps() {
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    props: {},
  };
}

export default Signup;
