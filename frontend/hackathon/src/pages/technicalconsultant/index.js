import "./techSupp.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Box, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const socket = io.connect("http://localhost:3001");

function techSupp() {
  const router = useRouter();

  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
    console.log(room);
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    console.log({ message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // alert(data.message)
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <Box className="techSupp" mb="4rem">
      <Button
        mt="1rem"
        ml="3rem"
        onClick={() => router.back()}
        fontSize={"24px"}
        color="white"
        backgroundColor="#257CFF"
        _hover={{
          color: "#257CFF",
          backgroundColor: "white",
          boxShadow: "0 1px 1px 1px #257CFF",
        }}
      >
        Go Back
      </Button>

      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        fontFamily={"body"}
        mt="3rem"
        mb="1rem"
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
        Technical Consultant for Courses
      </Heading>

      <Box
        maxW={"640px"}
        w={"full"}
        //   bg={useColorModeValue("white", "gray.900")}
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        }
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        margin="auto"
        // border="1px solid black"
        mt="3rem"
      >
        <Input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          mt="1rem"
        />
        <Button
          onClick={joinRoom}
          mt="1rem"
          ml="3rem"
          fontSize={"24px"}
          color="white"
          backgroundColor="#257CFF"
          _hover={{
            color: "#257CFF",
            backgroundColor: "white",
            boxShadow: "0 1px 1px 1px #257CFF",
          }}
        >
          {" "}
          Join Room
        </Button>
        <Input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          mt="1rem"
        />
        <Button
          onClick={sendMessage}
          mt="1rem"
          ml="3rem"
          fontSize={"24px"}
          color="white"
          backgroundColor="#257CFF"
          _hover={{
            color: "#257CFF",
            backgroundColor: "white",
            boxShadow: "0 1px 1px 1px #257CFF",
          }}
        >
          {" "}
          Send Message
        </Button>
        <Heading
          textAlign="left"
          mt="2rem"
          fontFamily={"body"}
          mb="1rem"
          textDecoration="underline"
          color="#257CFF"
          // backgroundColor="#257CFF"
          _hover={{
            color: "#257CFF",
            // backgroundColor: "white",
            // boxShadow: "0 1px 1px 1px #257CFF",
          }}
        >
          {" "}
          Message:
        </Heading>
        <Text textAlign="left" mt="1rem" fontSize="1.5rem">
          {messageReceived}
        </Text>
      </Box>
    </Box>
  );
}

export default techSupp;
