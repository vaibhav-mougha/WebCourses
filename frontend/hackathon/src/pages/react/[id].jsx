import React from 'react';
import { useRouter } from 'next/router';
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
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";

const Page = ({redux}) => {
    const router = useRouter();
    // console.log(router);

    
  return (
    <Box mt="2rem">
        <Button mt="1rem" ml="3rem" onClick = {() => router.back()}>Go Back</Button>
        <Box key={redux._id} 
        // border="2px solid black"     
                    mt="3rem">
            <Center py={6}>
              <Box
                key={redux._id}
                maxW={"950px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                onClick = {() => handleClick(redux._id)}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"} >
                  {redux.heading}
                </Heading>
                <Box 
                // border="2px solid black"
                mt="1rem"
                 display="flex" justifyContent="center" alignItems="center">
                <iframe width="800" height="450" src={redux.url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </Box>
                
                <Text fontWeight={600} color={"gray.500"} mb={4} mt="2rem">
                  Learn React with ease
                </Text>
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
    </Box>
  )
}

export async function getStaticPaths() {
    let response = await fetch(`http://localhost:8080/react/`);
    let data = await response.json();

    return {
        paths: data.map((react) => ({
            params:{id:react._id.toString()
        }})),
        fallback: false, // can also be true or 'blocking
    };
}

export async  function getStaticProps(context){
    const {
        params: {id},
    } = context;

    let response = await fetch(`http://localhost:8080/react/${id}`);
    let data = await response.json();
    return {
        props: {
            redux: data,
        },
    };
}

export default Page;