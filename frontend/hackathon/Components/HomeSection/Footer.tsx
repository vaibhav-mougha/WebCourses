import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLessThan,
  FaGreaterThan,
  FaSearchengin,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import React from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Flex columnGap={"7px"} cursor={"pointer"}>
                <Flex
                  justify={"center"}
                  align={"center"}
                  color={"black"}
                  fontSize={24}
                >
                  <Text color={"#fc766aff"}>
                    <FaLessThan />
                  </Text>
                  <Text>
                    <FaSearchengin />
                  </Text>
                  <Text color={"#fc766aff"}>
                    <FaGreaterThan />
                  </Text>
                </Flex>
                <Flex
                  justify={"center"}
                  align={"center"}
                  fontSize={"30px"}
                  color={"#fc766aff"}
                  fontFamily={"Lobster, cursive"}
                  fontWeight={600}
                  gap={"5px"}
                >
                  <Text> CODE</Text>
                  <Text color={"black"}> SEARCH</Text>
                </Flex>
              </Flex>
            </Box>
            <Text fontSize={"sm"}>© 2023 Code Search. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Products</ListHeader>
            <Link href={"#"}>Full Stack Course</Link>
            <Link href={"#"}>Front End Course</Link>
            <Link href={"#"}>Back End Course</Link>
            <Link href={"#"}>Free Crash Course</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>About Company</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
