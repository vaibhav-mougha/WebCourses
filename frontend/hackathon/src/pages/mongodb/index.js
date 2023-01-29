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
    router.push(`mongodb/${id}`);
  };

  return (
    <Box className={style.redu} mb="5rem">
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
        Learn MongoDB
        {/* Mongo Db */}
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
                    Learn MongoDB with ease
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
                    Category: Backend
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
                    Subject: MongoDB
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
  let res = await fetch("https://web-course-backend.vercel.app/mongo/");
  let data = await res.json();

  return {
    props: {
      redux: data,
    },
  };
}
