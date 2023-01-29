import React, { useEffect, useState } from "react";
import "../signup/signup.css";
import { getRegistration } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
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
    <Box className="full" mt="4rem" mb="4rem">
      <Box className="main">
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
          >
            Create an account
          </Heading>
          <Input placeholder="Enter Name" onChange={handleChange} />
          <br />
          <Input placeholder="Enter email" onChange={handleChange1} /> <br />
          <Input placeholder="Enter Mobile" onChange={handleChange2} /> <br />
          <Input placeholder="Enter Password" onChange={handleChange3} />
          <br />
          <select
            className="select"
            id=""
            onChange={handleChange4}
            style={{ marginTop: "10px" }}
          >
            <option>Select Person</option>
            <option value="user">User</option>
            <option value="Admin">Admin</option>
          </select>
          <br />
          <p style={{ marginTop: "10px", marginBottom: "15px" }}>
            By creating an account, I agree to the the terms & Conditions
            <a href=""> Terms and Conditions</a>,
            <a href=""> Privacy Statement</a>&{" "}
            <a href=""> Rewards Terms and Conditions.</a>
          </p>
          <Button
            className="para"
            onClick={handleClick}
            mt="1rem"
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
            alignItems="center"
          >
            Continue
          </Button>
          <p>Already have an account?</p>
          <Box>
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
          </Box>
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
