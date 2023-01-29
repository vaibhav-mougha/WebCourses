import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
  Heading,
} from "@chakra-ui/react";
import Front from "./Front";

const Page = () => {
  return (
    <div>
      <Box bg="#EBF7FF">
        <Box color="black" align="center" justify="center" pb="5rem"  pt="5rem">
          {/* Container */}

          <Box
            mb="2rem"
            w="90%"
            //   border="2px solid black"
            bg="white"
            borderRadius="2rem"
            pt="5rem"
            pb="15rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Heading
              fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              textDecoration="underline"
              color="#257CFF"
            >
              Users Courses
            </Heading>

            <Box
              border="1px solid gray"
              mt="2rem"
              width="80%"
              borderRadius="1rem"
              p="1rem"
            >
              <Text fontSize="2rem">Happy Learning !...</Text>

              <Text fontSize="1.5rem" color="gray">
                Select any specific tabs for watching courses videos
              </Text>

              <Box
                bg="white"
                w="90%"
                color="black"
                align="center"
                justify="center"
                margin="auto"
                borderRadius="1rem"
                p="3rem"
                // border="1px solid white"
                box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              >
                <Tabs>
                  <TabList>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "2rem" }}
                      fontWeight="bold"
                      mr="2rem"
                    >
                      Playlist
                    </Text>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        FrontEnd Courses
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Backend Courses
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        FullStack Courses
                      </Text>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Front />
                    </TabPanel>

                    <TabPanel>
                      <Front />
                    </TabPanel>

                    <TabPanel>
                      <Front />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Page;
