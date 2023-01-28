import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";

const HomePageCourseCard = ({ props }) => {
  return (
    <Box
      boxShadow="0 4px 5px 3px rgba(119, 53, 136, 0.459)"
      backgroundColor="transparent"
      transition={{ all: "0.5s", ease: "0s" }}
      height="100%"
      padding="20px"
      paddingTop={"10px"}
      borderRadius="5px"
      _hover={{
        transform: "scale(1.04)",
        overflow: "hidden",
        boxShadow: "0 4px 4px 5px rgba(129, 72, 144, 0.561)",
      }}
    >
      <Flex>
        <VStack gap={"2px"}>
          <Box w={"100%"} h={"100%"} paddingBottom={3} borderRadius="10px">
            <Image src={props.image} alt="card-img" w={"100%"} h={"100%"} />
          </Box>

          <Text fontSize={"xl"} fontWeight={"bold"}>
            {props.Title}
          </Text>
          <Text fontSize={"17px"} textAlign={"justify"}>
            {props.desc}
          </Text>

          <HStack marginTop={"5px"}>
            <Button
              variant="primary"
              color="white"
              backgroundColor="#623686"
              borderColor="#623686"
              _hover={{
                backgroundColor: "#6d20c5d7",
                borderColor: "#6d20c5d7",
              }}
            >
              Show More
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HomePageCourseCard;
