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
    router.push(`nodejs/${id}`);
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
        Learn NodeJS
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
                    Learn NodeJS with ease
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
                    Subject: NodeJS
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
  let res = await fetch("http://localhost:8080/node/");
  let data = await res.json();

  return {
    props: {
      redux: data,
    },
  };
}
