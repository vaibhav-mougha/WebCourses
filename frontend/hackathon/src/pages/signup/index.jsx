import React, { useEffect, useState } from "react";
import "../signup/signup.css";
import { getRegistration } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Input, useToast } from '@chakra-ui/react'
import { useRouter } from "next/router";


const initial = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  person: "user",
};

const Signup = () => {
  const toast = useToast()
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
      console.log(res)

      if (res && res.payload && res.payload.data && res.payload.data.msg==="registred"){
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:"top"
          })
          router.push(`login/`);
         
      } else if (res && res.payload && res.payload.data && res.payload.data.msg==="email is allready added try to login"){
        toast({
          title: 'User already exist',
          description: "Please  login.",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position:"top"
        })
      }
    });
  };

  return (
    <div className="full">
      <div className="main">
        <form className="form">
          <h2
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Create an account
          </h2>
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
          <button className="para" onClick={handleClick}>
            Continue
          </button>
          <p>Already have an account?</p>
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
      </div>
    </div>
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
