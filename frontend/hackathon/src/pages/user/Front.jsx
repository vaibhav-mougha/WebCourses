import React from "react";
import {
  Box,
  Input,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";

const Front = () => {
  const [page, setPage] = React.useState(1);

  const handlepage = (p) => {
    setPage(page + p);
  };

  return (
    <Box>
      <div>
        <Box
          display="flex"
          w="25rem"
          margin="auto"
          // border="1px solid red"
          justifyContent="space-between"
        >
          <Input
            w="15rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Video by Name"
          />
          <Button ml="2rem" variant="outline" size={["sm", "sm", "md", "md"]}>
            Search
          </Button>
        </Box>
        <Box
          display={{ lg: "flex" }}
          mt="2rem"
          justify="space-between"
          // border="1px solid black"
          w="50%"
        >
          {/* All Courses */}
          <Button variant={"outline"} textTransform={"capitalize"}>
            All Playlist
          </Button>

          {/*  Add New Courses */}
          <Button
            bg="#257CFF"
            borderRadius="1rem"
            variant="solid"
            ml={{ lg: "2rem" }}
            mr={{ lg: "2rem" }}
            mt={{ base: "2rem", lg: "0rem" }}
            mb={{ base: "2rem" }}
            color="white"
            _hover={{
              background: "white",
              color: "#257CFF",
              border: "2px solid #257CFF",
            }}
          >
            Add New Video
          </Button>

          <Button
            bg="#31AE33"
            borderRadius="1rem"
            variant="solid"
            // ml="3rem"
            color="white"
            _hover={{
              background: "white",
              color: "#31AE33",
              border: "2px solid #31AE33",
            }}
            ml="1rem"
          >
            Save
          </Button>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Topic Name</Th>
                <Th>Category</Th>
                <Th>Duration</Th>
                <Th>
                  <Button
                    colorScheme="red"
                    borderRadius="1rem"
                    variant="solid"
                    _hover={{
                      background: "white",
                      color: "red",
                      border: "2px solid red",
                    }}
                  >
                    Delete
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>{/* Not Completed Yet */}</Tbody>
          </Table>
        </TableContainer>
        <Box mt="2rem">
          <Button disabled={page === 1} onClick={() => handlepage(-1)}>
            Previous
          </Button>
          <Button disabled={true}>{page}</Button>
          <Button onClick={() => handlepage(1)}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Front;
