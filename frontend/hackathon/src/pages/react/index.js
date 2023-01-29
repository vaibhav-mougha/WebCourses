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
    router.push(`react/${id}`);
  };

  return (
    <Box className={style.redu} mb="5rem">
      <Button mt="1rem"
        ml="3rem"
        onClick={() => router.back()}
        fontSize={"24px"}
        color="white"
        backgroundColor="#257CFF"
        _hover={{
          color: "#257CFF",
          backgroundColor: "white",
          boxShadow: "0 1px 1px 1px #257CFF",
        }}>
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
        _hover={{
          color: "#257CFF",
          // backgroundColor: "white",
          // boxShadow: "0 1px 1px 1px #257CFF",
        }}
      >
        Learn React
      </Heading>

      <Grid
        className={style.gridbox}
        textAlign="left"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
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
                  src="data:image/png;base64,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"
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
                    Learn React with ease
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
                    Subject: React
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
  let res = await fetch("http://localhost:8080/react/");
  let data = await res.json();

  return {
    props: {
      redux: data,
    },
  };
}
