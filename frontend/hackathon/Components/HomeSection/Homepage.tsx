import React from "react";

import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import { courses } from "./Courses";
import HomePageCourseCard from "./HomePageCourseCard";
import { GiFlexibleStar } from "react-icons/gi";
import { FcGlobe, FcMoneyTransfer } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const handleTech = () => {
    router.push(`technicalconsultant/`);
  };
  
  return (
    <>
      <Container maxW={"100%"} bg={"#1E90FF"} padding={2}>
        <>
          <Flex
            height={"750px"}
            margin={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            gap={10}
          >
            <Box>
              <Image
                src="https://preview.colorlib.com/theme/edumark/img/banner/edu_ilastration.png.webp"
                alt="Homepage"
                width={"100%"}
                height={"100%"}
              />
            </Box>

            <Flex
              justifyContent={"flex-start"}
              direction={"column"}
              fontSize={"50px"}
              color={"white"}
              mt={-5}
            >
              <Text textAlign={"left"}>Learn Your</Text>
              <Text>Favorite Course</Text>
              <Text>From Here</Text>
              <Button
                size="lg"
                bg="#2F7693"
                mt="24px"
                fontSize={"24px"}
                _hover={{ color: "black" }}
                onClick={() => handleTech()}
              >
                Contact Us
              </Button>
            </Flex>
          </Flex>
        </>
      </Container>

      <Container
        maxW={"container.xl"}
        padding={2}
        marginTop={"50px"}
        centerContent
        gap={10}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          fontSize={"50px"}
        >
          <Box alignItems={"center"}>
            <Box width={"100px"} height={"8px"} bg={"#1E90FF"}></Box>
          </Box>

          <Text fontWeight={600}>Popular Courses</Text>
        </Flex>

        <Grid
          w="full"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          p={"10px"}
          justifyContent={"center"}
          gap={10}
        >
          {courses.map((item) => {
            return (
              <GridItem key={item.id}>
                <HomePageCourseCard props={item} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>

      <Container
        maxW={"container.xl"}
        padding={2}
        marginTop={"50px"}
        centerContent
        gap={10}
      >
        <Flex
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          gap={10}
        >
          <Box>
            <Image
              src="https://ih1.redbubble.net/image.3466184358.0383/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
              alt="Picture"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://i.pinimg.com/originals/e4/3b/30/e43b30464e7f8dfd8af62ab84909f436.png"
              alt="Picture"
              width={"100%"}
              height={"100%"}
              borderRadius={5}
            />
          </Box>
        </Flex>
      </Container>

      <Container
        maxW={"container.xl"}
        padding={2}
        marginTop={"50px"}
        centerContent
        gap={10}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          fontSize={"50px"}
        >
          <Box alignItems={"center"}>
            <Box width={"100px"} height={"8px"} bg={"#FFA07A"}></Box>
          </Box>

          <Text fontWeight={600}>Our Course Speciality</Text>
          <Text fontSize={16} textAlign={"center"}>
            Your domain control panel is designed for ease-of-use and <br />
            allows for all aspects of your domains.
          </Text>
        </Flex>

        <Grid
          w="full"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          p={"10px"}
          justifyContent={"center"}
          gap={10}
        >
          <GridItem>
            <Box
              border={"1px solid lightgrey"}
              width={"100%"}
              _hover={{ bg: "#FFA07A", color: "white" }}
              borderRadius={5}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                padding={10}
              >
                <Box>
                  <GiFlexibleStar color="#1E90FF" size={40} />
                </Box>
                <Text fontSize={24} fontWeight={600}>
                  Flexibility
                </Text>
                <Text textAlign={"center"}>
                  Learning virtually from anywhere allows you or your team to
                  pursue coursework without commuting to a physical campus and
                  learning at youe own pace.
                </Text>
              </Flex>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              border={"1px solid lightgrey"}
              width={"100%"}
              _hover={{ bg: "#FFA07A", color: "white" }}
              borderRadius={5}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                padding={10}
              >
                <Box>
                  <FcGlobe size={40} />
                </Box>
                <Text fontSize={24} fontWeight={600}>
                  Wider Range
                </Text>
                <Text textAlign={"center"}>
                  One of the significant advantages is that our students can
                  learn from worldwide and find the program that best meets
                  their needs without uprooting their lives.
                </Text>
              </Flex>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              border={"1px solid lightgrey"}
              width={"100%"}
              _hover={{ bg: "#FFA07A", color: "white" }}
              borderRadius={5}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                padding={10}
              >
                <Box>
                  <FcMoneyTransfer size={40} />
                </Box>
                <Text fontSize={24} fontWeight={600}>
                  Affordability
                </Text>
                <Text textAlign={"center"}>
                  With a broader range of offerings and types of credentials you
                  can choose an online program that not only meets your
                  professional needs but also that fits in your budget.
                </Text>
              </Flex>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              border={"1px solid lightgrey"}
              width={"100%"}
              _hover={{ bg: "#FFA07A", color: "white" }}
              borderRadius={5}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                padding={10}
              >
                <Box>
                  <FaUsers color="#90EE90" size={40} />
                </Box>
                <Text fontSize={24} fontWeight={600}>
                  Collaboration
                </Text>
                <Text textAlign={"center"}>
                  One of the benefits of our courses are the message boards and
                  grouping tools that allow students to post their feedback on
                  readings and other assignments and respond to their
                  classmates.
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
