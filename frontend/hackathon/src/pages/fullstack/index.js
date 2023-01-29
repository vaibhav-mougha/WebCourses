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

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`redux/`);
  };

  const handleReactClick = () => {
    router.push(`react/`);
  };

  const handleNextClick = () => {
    router.push(`nextjs/`);
  };

  const handleExpressClick = () => {
    router.push(`express/`);
  };

  const handleNodeClick = () => {
    router.push(`nodejs/`);
  };

  const handleMongoClick = () => {
    router.push(`mongodb/`);
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
        FullStack Courses
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
        <Box onClick={() => handleClick()}>
          <Center py={6}>
            <Box
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
                Learn Redux
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 03:45 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Redux essentially makes it easier for developers to understand
                when, where, why, and how the state of an application has
                changed, and gives confidence that the application will behave
                in a predictable manner when it does.
              </Text>
              <Box color="gray">Reading Time : 07:35 hrs max</Box>
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
                  4.9 <StarIcon color="tomato" mb="3px" />
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

        <Box onClick={() => handleReactClick()}>
          <Center py={6}>
            <Box
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAB5CAMAAAA+nSLfAAAAPFBMVEX///9h2vtZ2ftP1/v7/v/e9v7z/P973/xz3fug5/zp+f7H8P3l+P6r6f33/f+W5fzX9P667f2G4fzP8v5+q+tsAAAGV0lEQVR4nNUc2Xq0KkxAxQ1RfP93PUoCgrLYcdqfk5vOhywhewK0qp7AIjg5gPfj8GjAAcPY4yixPB6Ug62jlADsP/jYPhjTjpw4o7rtO6hIZuaEiRnp58yQuSfXQfILmNSdNynOLOrUEMECY7rUkI9R0VRfo0NWGh7C3yLTU8NxrnjnUJ6pKThgUszhph6FuNH+HSoLxYWXY1P1NCp2CmSINCdRKFPjpEctiB59p05Ig/FsmQUxG2fqqlGtJQojwhHwEZvfoLLoOS4EmFeCe6fE3+lyflh9VVv1B/aGMPKYgqprcystI1w0V9sqbyZI6ZleKHYLu2nuXywFmLBtgoWppaEBCj8xk2HYWJAsGnpmhAZUtTaiwsLqognDPje/WqFjlmRD0tDuEI0Z7RAlkeU0A1+otXZtLOYNB7N811at/R3trcnGP0Wl7TQu8Q7GbhBDIxbmpwbdt/tUYCbYaaLHKa5XQb4DUC5srPPQ5PVwdF0PHVNdwT4EdPIRaEuXEbfNep+ckmhF+NjaAS5xh6yhsbhktry+wmV7gkvdISq5+GR9ZWAe4cKt4c/o6+/jIk/hzXibb+CS0lPjCWjK+iOIV7jk9Wg1ERv+TdHwnR5l7YuJ+tZqzUdu7+wL2N24WW/ZyRpkFovbePXK7g6grrHP6JqRcCDE4LSDAIr/PO28LMaTvhFXt/GLi1kAwE/nsrwoqBTZUUSI2elAjPAEARia8OMZkAnRb1BATgGYsCUsnqCUnwe8a9zAzAHXbJx2kA9gXjJGPAFNfC8oLL7x6RMiAzT+VKUNj0PyhskXb9thmppmaZppGtoW6i0sEMegHnyeB8xaqf1Eoh6abRQmJ2M+mGYxbs3g+W1Ib+IanwdXeOehGYXqjkQ6UNLwYe+xd+mUGJsBln8ruiaRENW8CMUJY+FqRhylnW6EK7G06fTmEaCadj/G4ooRWHD2qQc4YGCZdfaFHMh1jqZaOagnLF5GkOh24FxJKfsD9r+K86MxhRIX08+rU4PgNwk9ts4okJvydg7NWs8tRp3dIcA3WlHGxY+oU49XRDTP5a4WLQa4CXIDY/fwt90VT95lbUdnfKrbQ0+u2+nk2tRABnCJycgTrA/a+7puVtn50+3T90+IM0hCvVH+ymCzMjE/kM6xkYCdu0NKZA6b2S0s73yRMMuZU8toecgBLPyclg3st5DMm12mOOUWiSkjcjNuwErHlufQAcglE/SDBB0OYJPEXSJest5OdWREbfNJCLs49sjpZQ1rGXIKJ4ifN2ULoSR2TlCLswsR1kJurq+GHCRdT9AAoQzafPTRdtlJnCIZJE3LbWm2c9eCLYKA1EZb84CarxfCENBddOzsavwWRzRGyH1MKlO0k/Ynob5XqXcr0otx8fc3ObGWDJXqLDb0mjM1sSKxqTcfxa0hEMu14jgk0PZYeBtEvAdbaruqnlOy9j5NpvVOMExsjlgN83i3y+YYI7+E2UKbtDHgfWLjLTxKt4Z3wfgCgpgOaef1Eb4f9+p1aKAb0L1w6GLyGmd/Br+wBYPEhw7Yy/nS3zyfyz9oUcBZErayjeGHaRgvWdcVICOEAMLV5+0e3bg1DUxROKAUmdtkeGbaO9N8WM413QrrfMPkAEf0nUgmXuswouqSJVGlmXlwTnHlkEbWERlnD4k8GqiLhMkfp1gRc0k9dwFU/LRDGWyT+aJzMAQcS2ZRszWSjnQ3IbL4xqKx41IeGcs4gxmQqPgcYGpgbq8xHJd7SaN6dOqpbHr7oEKIFtfPKYLicpkJcxqaDpvOquL4pIqLsnGbIYMLqmjqeKMy1daDniXRpSR5KUWPWotWGfalKLtbkj8qyk8/jF/UX8QvRcV1JcW7f5IHXKU3lgcUlR/5eaPL23+QNxaVT1cl1RmqouovVUl1Kb2HYup1Gpti6ph6/K/Xd39U/C6m7g2zFnMegNQp5JzkgJLOj751rjaj6X1zrhY4b+z+0XljSeewJZ1Pl3RuX9J9hpLueRR0/6Wke0El3Zcq6R5ZSffrSrp3WNJ9zPLuqf5/7u/+1b3mku57l3QPvqT3ASW9myjpPUlJ72yKen9U0ruskt6rlfSOr6j3jSW9+/zKe9j5S+9h3XfC/KN3wvxr74Srmrsex8I/eT9d0rvy6rP39uJX3ttXRf0fguqv/j/DfxcwVkZsFG4XAAAAAElFTkSuQmCC"
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
                Learn React
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 02:50 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                React is used for building interactive user interfaces and web
                applications quickly and efficiently with significantly less
                code than you would with vanilla JavaScript. In React, you
                develop your applications by creating reusable components that
                you can think of as independent Lego blocks.
              </Text>
              <Box color="gray">Reading Time : 05:35 hrs max</Box>
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
                  4.9 <StarIcon color="tomato" mb="3px" />
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

        <Box onClick={() => handleNextClick()}>
          <Center py={6}>
            <Box
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
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPEhIPDxASEg8PEhIRDw8PEhQRDw8PGBQZGRgUGSQcIC4zHB44HxgWJzgnKy8/Q0NDGiU9TjszTTE0NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIANUA7QMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAUGBwj/xABKEAABAgMGBAMFAggKCwAAAAABAAIDETEEIUFRYXEFEpHBBrHhBxOBodEiQiQyUmJzdLKzFBUjMzQ1coKS0xYlQ0VTVXWUlaLw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APm6oU+I7qJpg3fEd0FJinxHdRNUDcdx3QCoY7dwpmmDXbuEFIGO3cKZpg127hBSbeyiabT5IGqb2Kiapp8igabex8lE1TT5HyQNU3sfJRNU0+R8kAqbUbhRNU03jcIEqbUbhSm2o3CBJhJMIAoCCgIApJlJBTqncpIdU7lJA3fTyQh308kkHE5jmeqYcZVNRjus5qgbviO6CuY5nqqDjKpqMd1nNMG74jugvmOZ6phxvvNM9Qs5qmmu3cIK5jmeqYcb7zTPUKJpjHbuED5jmeqprjmaZqJqmnyQPmOZ6qmuOZocVnNNp8igrmOZ6qmuOZocdFnNU0+R8kFcxzPVNrjmaHHRZzVNPkfJBXMcz1VNcZi81GKzmqabxuEFBxzPVNrjMXmoxWc1TTeNwgfMcz1TDjmeqkFNqBlxzPVAccz1SKAgZccz1S5jmeqCkgtzjM3mpxS5jmeqTqncpIKc45nDHRHMcz1Sd9PJJBweY5qg4yriO6zVCnxHdBXMc0w4yriO6zVCh3HdBXMc1Qcb78O4UIbjt3CCuY5qmuN9+HcLNUMdu4QVzHNU1xzwWU1TTXZBXMc02vOeBWapp8igrnOabXnPA+SzmtLOx0RxZDa57gDNkNpe4XZNmgOY5ptec8D5LmN4HbXXjh9tIzFjtBH7CT+D2tl77Fa2CRvfZY7BTVqDic5zVNeZjcLEPEyJiYMiMQcirYbxuEFh5zVMcZi/ELIFU03jcIK5jmqa45rMFU2qCuY5phxzUJhBRcc0uY5oKSC3OMzfiUuY5odU7lJA3OOeXkjmOaTv/uiEHXc23QKg67CowGqzVCh3HdA+bboFQdcaVGA1UJih3HdA+bboFQdWlMhmFmqbjt3CCubboEw6tKZDMLOaYx27hBXNt0Cprq0pkFnNcvhdgjWyKyzWZhiRokw1guAGLnH7rRiT9EHH5vmQBcLyaBe48N+za22yUS0SskA3j3rOa0vboy7lxvcQR+SV9C8GeArPw0NjRQ2PbamM5v2IJlSED+LlzVN9AZD2qDx/CfZ3wyzAF1nFpeKvtcos9eWQaPg1ergwWw2hrGNY0Uaxoa0fALVCAQhCDg2/hVntQ5bTZ4UZuUaG18tpi5eL417LrHGm+yPfZYleX+egEzneHGY+DpDJfQkIPzh4i8LWzhh/CYQMImTbTC+1AcSZAEy+ydHAaTXTMdeKVGAX6jjQmxGlj2hzXAhzXAOa4GoINQvlHjb2b+75rVwxhLB9qLYxNxAqXQsx+Z0wag+Z823QKmuvw6BZNcqaUF823QJh23QKJpgoLLr8OgRzbdApNUINHOvNKnAJT26BJ1TuUIKcdsMBklPboEO+nkhB1nNt0CoOuNKjAarNMUO47oK5tugVB1xpUYDVZqhQ7jugrm26BAdWlMhmFCoGu3cIHzbdAmHVpTIZhQmDXbuEG9ks7474cGC0vixXBkNjQOZzjQabmkiV+hfBHhOFwqBy3PtUUA2mOB+M78luTBgPjivJ+x3wyIbDxSM37cYOh2QO+7BnJ8TdxEgch+cvqiAQhCAQhCAQhCAQhCAQhCD5N7T/AAYG8/FLGwACb7bBaBKVTHbl+cP735U/l7XXinQL9TOaCCCAQRIg3gjJfnrx34c/iu2FjBKzR5xbNk1s/twv7pIGzm6oPPc23QJtdt0CiaoILLr8OgRzbdApJQg0c680qcAlzbdApdU7lCDRztsMBkjm26BS76eSSDrObQdFQddQVHdZqhQ7jugrm0HRUHXGlR3WSoUO47oK5tuiYdW4Uy1ChNuO3cIK5tAudwPhzrbaYNkZc60PawuEpsZOb3fBgc74Lrpr6L7FLB723RrSRMWWByt0iRXSB/wsiD+8g+2WWzsgw2QobQ2HCa2HDa2jWNADWj4ALdC6vhvHbNa4logQInNGsb/d2iHyuaWOmRiLxMG8ZIO0QhcTiNuh2WFEtEZ3LCgsdEiOALi1jRMmQvKDloXnR4vsxv8AdW6Rp/q62/5aP9L7N/wrf/422/5aD0SFwLPxKFEjRbO1x99Z+QxGOaWkMeJteJj7TTIiYxBC56AXAs0b37jEb/MtJbCOEUi5z9W1AzvN4LSuq49b+dz7JDMTkhsEXiESA18SLDgOP2YLAwE+8fIj7N4bzOuJYSm+LbKxt0G2thsb/wAutjWNY0fo7gAEHpULzUHxnZXtD2Mtr2OaHNezh9scx7SJhwIh3iWK7qwWxtohiKwPa105CNDfBiCRIM2vAIpiEHLXjPadwb+F8PiRGicWx/hEMymS1o/lG3VmzmMs2tXs1D2BwLXCYIIINCDUIPysHbKg7Za8UsZs1oj2Yz/B40SEJ1LWOLWu+IAPxWDSgvm2RzbKSb00FudeaVKObQKXVO5Qg0c7bDyS5tlLvp5IQdZPQfP6pg3UFRnrqoVCh3HdA56D5/VUDcbhUZ66rNUKHcd0DnoPn9U2mtwprmNVCbTXbuEDnoPmvs/sMs4FmtcWQm+0thk5hkJpH7w9V8WX3D2Gn8AtIytrz8PcQfog+lr5xwuwxOa32+yM5rZY+K20e7Bl/CrI73Ri2c6kNDmzo5rcCV9HXl/BH+8/+rWzyhoO74fbIdqhQ7RBdzQozA9hzaRQjA4EGkiF1fj3+q+Ifqkb9grNn+rrVKlh4hFmPybLxB33dGRDf/bn+WFp49/qviH6pG/YKDvLN+I3+y3yWq8xB8MvLWn+NeJibW3CNBkLv0S3s/h17HteeJcReGOa4siRYJhvkZ8rgIYmDQ3oI8TcMiEw+IWJs7dYg7kZPlba7O6RiWZ51lNpNHAHNTa/FEM2WDaLIPfRra4QrHANzn2gzBa8D8UNk4vOAadF3lttcOzw3x4zgyFCa573mjWgTJXzrh0N9htA45aIAhWO3veHwXAtfwtsUsEO0OE5AvLR7yUpFzayKD3PAOF/wOCGOeYsd7jFtNocAHWi0OlzPIFBcABgGtGC5HF/6NaP0MX9grmLh8X/AKNaP0MX9goOD4M/qzh36jZP3DF3a6TwZ/VnDv1GyfuGLu0AhCEH539pUH3fFrWJCT3Qoja/egMn/wCwcvNNdoPmvW+1hwPFY0vuw4AO/ID5ELx7Sg1JvoPmieg+ak1QgtxvNwqc0T0HzSdU7lJBo46DDPJKeg+aD9PJJB1nNoPn9VQdcbhUZ66rNUKHcd0DnoPn9UwbjcKjPVQqFDuO6Bz0Hz+qbTW4U1zChU3HbuECnoPmvsPsJtc2W6z4tiQYw152uaf3beq+Or2/si4oLNxNjHGTLXDdZzkH3PYT8Wco/tIP0MvM+DWFv8Y8zXN5uKWtzeYEczTyScJ1Gq9MhBxOIWJlphRIEYc0OK3lcKGWBBFCDIgihAK8nxu0xX8M4jYY8322zWV7SWi+1QXNcIVoaB+VyuBAo5rhSRPt11nFLE55ZHgyFps/N7udwiw3S54Djg13K2/Ata6+UiHVQvG1ga1oL7RMNAP4Bbagfolp/pvYPy7R/wBhbv8AKXeWWOIrGxGzk4UNzmmha4YOBBBBoQQuQg8laoLuKWv3T2OHDeHva6JMENt1ubeGS+9CZcTgXSF/KvTWmzsjMfCiND4cRpZEY4Ta9jhItOkit0IPK+G3RbHEdwq0F72Q2mJw+0uBIi2ScvcvdT3jKatkZVXfcWBNnjgCZMGIABUnkK5iEHS+D2FvDrA1wLXNsdla4OBDmuEFoIINCp4vCjx/dwmQCGfwmzxHRjEZJjIFohxCSJz+01hAlO83gVXeIQeX8JcJfZDFa6CIUNzYci4wnR4kYF/O5zochEbIsk9zQ8/a5p3L1CFxOJ25llgRbRE/EgQ3xX58rWlxA1uQfnnx9ahG4pbniRAjCGDrCYyGR1YV0DToPmpiRnRHviPM3xHue85ve4ucepKGoNCb6D5pz0HzUGvxTQaON5uFTmlPQfNJ1TuUkGjjoMM8kT0HzUu+nkhB1kxl80wRI3YjHdZqhQ7jugqYy+aoESN2Ix3WaYodx3QVMZfNNpF92GeoUJtx27hBUxl81cCO6G5sSGSyJDc18Nwq17XBzXfAgFYpjHbuEH6n8NcZZxGyQLZDkPesBe0f7OKLns+DgR0K7dfAPZP4tFgtBslofy2S2OEnOubBtNzWuOTXABpOjTcAV9/QCEIQcZsHkeXN/Ffe9uT5fjDcAA7A5z5KEIBCEIBCEIBCEIBfMfbNx8QoEPhzHfylpIiRwDe2zsdNoOXM8D4Mcve8a4rCsECJao7uWHCbMyq51GtbmSZADVfmjjnF4nELTEtcf8eM+YaDNsNguaxugEhrecUHDBGXzVNIy+ahNqDQkTp80TGSnEpoLcRM3YlExl81LqncoQaOIyyx0SmMvmpd9PJCDrJjI9fRUCJG41GO+izTFDuO6CpjI9fRUCJG41GO+izVCh3HdBUxkevomCL7jTPUaLNUMdu4QOYyPX0VAi+40z1GizVNx27hAGWR6+i+xezD2hCIGcN4g+UQSbZLS83RBQQXk0dg040rLm+OIGOyD9gIXwnwR7UolkDbNxHmj2cSbDtA+1HgiknT/nG/MfnXBfaOGcTgWyGI1mjMiwnUewzE8jkdDeg5yEIQCEIQCEIQC4lvtkOzQ3R472w4UMcz3vMmtH1y3XTeKfGNj4W0iPF5o8pss0KTo7p0JH3W/nOkN6L4V4s8X2ri8RpjEMgMdODZWEmGw4Ocfvvl946yAmUHL8e+M38XjAMDmWKA4+4hEyL3U988flSmAMATmZ+XZKYr19FmFbahBUxkevoqBGR6+ihMILJGR6+iJjI9fRSalCDRxEzWpx9EpjI9fRS6p3KEGjiMjhjpsiYyPX0Uu+nkhB1cxkevoqBEjcajHfRQqFDuO6BzGR6+ioESNxqMd9FmmKHcd0FTGR6+ippF9xpnqNFmqbjt3CBzGR6+ippF9xpnqNFmm3HbuEFTGR6+ibZX3GmfooVNx2QF2R6+i5vCuKR7HE97ZY0SDExdDfIOAwcJScNCCuCm3sfJB9P4L7Y7TDAZbbOy0ASBiwne5iyxJEi1x25V7Gwe1vhcUfyro9nOIiwXOHwMPmX5+Tb2Pkg/SsL2icIeJi3wxo9sRh6OaFnH9pPB2VtzXHKHCjP/AGWGS/Nybex8kH3LiXtisUOYs0C0R3ChcGwIRO5JI/wrw/HPajxG2TZDc2yQnXctnn74tOBe68HVoavCqmVG4QU53MS5xcXOJc5znTc5xvLiTU6pslMXGox9FITZUbhBQlkevoqaRMXHr6LMKm1G6C5jI9fRNpGR6+ihMILJEzcevoiYyPX0Ump3QgtxEzcanH0RMa9fRJ1TuUkGjiMjhjpslMZHr6JO+nkkg627X5JiUjWoy1WaoUO48igq7XoqEpGtRhus1Qodx3QO7X5KmyvrTuFmqbjt3CB3aqmyvrTuFCbcdu4QO7VU2V9aLNU3HZA7tVTZa0Pks1Tex8kDu1VNlrQ+SzVN7HyQO7X5Kmy1ofJQm3sfJBV2qbJTFahQqZUbhAxLVUyUxWoWYVsqNwgLtVTZTFVATbUboLu1TEtVBQEGhlM1qi7VQandNBo6UzWpSu1UuqdyhBo6WuHki7VS76eSSDrLsz0H1VCUjeajAZHVZpih3HkUF3ZnoPqqEpG81GA11WSoUO47oKuzPQfVNsr7zTLUaqE2mu3cIKuzPT1VNlfeaZajVZptx27hBV2Z6eqpsr7zQ4eqhNuOxQO7M9PVU2WZocNN1Cbex8kFXZnp6ptlmaHDTdZqm9j5FBV2Z6eqpsszQ4abrNUzsfJA7sz09VbJTF5qMPVZKmVG4QUJZnp6qmSmLzUYeqzVMqNwgd2Z6eqbZTF5rl6qAqbUboHdmenqmJZnp6qSgILMpm81y9UXZnp6qTU7oQaOlM3mpw9UXZnp6qXVO5SQaOlmcMNN0XZnp6qXfTyQg6tUKHcd0IQJUKHcd0IQJU3HbuEIQCpuO3cIQgSpuOyEIBNvY+SEIBNvY+SEIBNvY+SEIBUyo3CEIEqZUbhCEAE21G6EIGUwhCANUIQgbqncoQhBTvp5JIQg/9k="
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
                Learn NextJS
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 04:20 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                One of the features of Next. js is the way it renders on the
                server side and client side, otherwise known as “universal
                apps.” That's crucial for the single page applications (SPAs) it
                builds, and how it helps those SPAs have much-improved success
                in terms of SEO (search engine optimization).
              </Text>
              <Box color="gray">Reading Time : 01:35 hrs max</Box>
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
                  4.3 <StarIcon color="tomato" mb="3px" />
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

        <Box onClick={() => handleExpressClick()}>
          <Center py={6}>
            <Box
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgAuAwfMMDkwZScsLkBAeZ4GjyfB7GtIzcA&usqp=CAU"
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
                Learn Express
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 03:45 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Express is a node js web application framework that provides
                broad features for building web and mobile applications. It is
                used to build a single page, multipage, and hybrid web
                application. It's a layer built on the top of the Node js that
                helps manage servers and routes.
              </Text>
              <Box color="gray">Reading Time : 07:35 hrs max</Box>
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
                  4.9 <StarIcon color="tomato" mb="3px" />
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("blue.50", "blue.800")}
                  fontWeight={"400"}
                >
                  Subject: Express
                </Badge>
              </Stack>
            </Box>
          </Center>
        </Box>

        <Box onClick={() => handleNodeClick()}>
          <Center py={6}>
            <Box
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
                Learn NodeJS
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 02:50 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Node JS allows developers for executing JavaScript code outside
                of a browser. Backend and frontend of our app can be written in
                JavaScript. That enables developers to share some code and
                allows one team to work on the whole application.
              </Text>
              <Box color="gray">Reading Time : 05:35 hrs max</Box>
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
                  4.9 <StarIcon color="tomato" mb="3px" />
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

        <Box onClick={() => handleMongoClick()}>
          <Center py={6}>
            <Box
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
                Learn MongoDB
              </Heading>
              <Box>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  Duration of Crash Course : 04:20 hrs
                </Text>
              </Box>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Using MongoDB can provide many benefits to a software
                development team. Its flexible schema makes it easy to evolve
                and store data in a way that is easy for programmers to work
                with. MongoDB is also built to scale up quickly and supports all
                the main features of modern databases such as transactions.
              </Text>
              <Box color="gray">Reading Time : 01:35 hrs max</Box>
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
                  4.3 <StarIcon color="tomato" mb="3px" />
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
      </Grid>
    </Box>
  );
};
export default Page;
