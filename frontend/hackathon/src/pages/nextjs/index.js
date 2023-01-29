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
    router.push(`nextjs/${id}`);
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
        Learn NextJS
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
                  src="data:image/jpeg;base64,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"
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
                    Learn NextJS with ease
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
                    Subject: NextJS
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
  let res = await fetch("http://localhost:8080/next/");
  let data = await res.json();

  return {
    props: {
      redux: data,
    },
  };
}
