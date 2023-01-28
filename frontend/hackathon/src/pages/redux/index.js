import style from "./redu.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Modal,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";

const Page = ({ redux }) => {
  const router = useRouter();
  const [data, setData] = useState(redux);

  const handleClick = (id) => {
    console.log("Visiting page :/", id);
    router.push(`redux/${id}`);
  };

  return (
    <Box className={style.redu} mb="5rem">
      <Button mt="1rem" ml="3rem" onClick={() => router.back()}>
        Go Back
      </Button>

      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        color="#0A1C93"
        fontFamily={"body"}
        mt="3rem"
        mb="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textDecoration="underline"
      >
        Learn Redux
      </Heading>

      <Grid
        className={style.gridbox}
        textAlign="left"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={1}
      >
        {data?.map((ele) => (
          <Box key={ele._id} onClick={() => handleClick(ele._id)}>
            <Center py={6}>
              <Box
                key={ele._id}
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Avatar
                  size={"xl"}
                  //   src={ele.img}
                  src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                  alt={"Avatar Alt"}
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {ele.heading}
                </Heading>
                <Box>
                  <Text fontWeight={600} color={"gray.500"} mb={4}>
                    Learn Redux with ease
                  </Text>
                  <Text fontWeight={600} color={"gray.500"} mb={4}>
                    Duration : {ele.duration}
                  </Text>
                </Box>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  {ele.desc}{" "}
                </Text>
                <Box color="gray">Reading Time : 5 min max</Box>
                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    Category: Frontend
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    4.7 <StarIcon color="tomato" mb="3px" />
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("blue.50", "blue.800")}
                    fontWeight={"400"}
                  >
                    Subject: Redux
                  </Badge>
                </Stack>
              </Box>
            </Center>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
export default Page;

export async function getServerSideProps() {
  let res = await fetch("http://localhost:8080/redux/");
  let data = await res.json();

  return {
    props: {
      redux: data,
    },
  };
}
