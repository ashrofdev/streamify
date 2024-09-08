import React, { useState } from "react";
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Grid,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { DB } from "../DATABASE";

const StreamTable = () => {
  const [filter, setFilter] = useState("");

  console.log(filter);

  const filteredStreams = DB.streams.filter(
    (stream) =>
      stream.artist.toLowerCase().includes(filter.toLowerCase()) ||
      stream.title.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Box p={2}>
      <InputGroup mb={10} p={4} w={["100%", "60%"]}>
        <Input
          variant='flushed'
          onChange={(e) => setFilter(e.target.value)}
          borderColor={"#021c1c"}
          focusBorderColor='white'
          _placeholder={{ opacity: 0.5 }}
          p={2}
          placeholder='Search by song or artist'
        />
        <InputRightElement width='4.5rem' mt={4} opacity={0.5}>
          <CiSearch />
        </InputRightElement>
      </InputGroup>
      <TableContainer
        display={{
          base: "none",
          md: "block",
        }}
        h={"70vh"} overflowY={"scroll"}
      >
        <Table variant='unstyled'>
          <Thead>
            <Tr>
              <Th>Song Name</Th>
              <Th>Artist</Th>
              <Th>Date Streamed</Th>
              <Th isNumeric>Stream Count</Th>
              <Th>User ID</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={12} mt={10}>
            {filteredStreams.map((stream) => (
              <Tr borderTop={"1px solid #021c1c"}>
                <Td>{stream.title}</Td>
                <Td>{stream.artist}</Td>
                <Td>{stream.date}</Td>
                <Td isNumeric>{stream.streamCount}</Td>
                <Td isNumeric>{stream.userId}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Stack
        display={{
          base: "block",
          md: "none",
        }}
      >
        {filteredStreams.map((stream) => (
            <Grid my={2} bgColor={"#021c1c"} gap={2} p={5} borderRadius={10} templateColumns={["repeat(2,1fr)","repeat(3,1fr)"]}>
              <Box>
                <Text fontSize={8} fontWeight={900}>
                  Title
                </Text>
                <Text fontSize={12}>{stream.title}</Text>
              </Box>
              <Box>
                <Text fontSize={8} fontWeight={900}>
                  Artist
                </Text>
                <Text fontSize={12}>{stream.artist}</Text>
              </Box>{" "}
              <Box>
                <Text fontSize={8} fontWeight={900}>
                  Date
                </Text>
                <Text fontSize={12}>{stream.date}</Text>
              </Box>{" "}
              <Box>
                <Text fontSize={8} fontWeight={900}>
                  Streams
                </Text>
                <Text fontSize={12}>{stream.streamCount}</Text>
              </Box>{" "}
              <Box>
                <Text fontSize={8} fontWeight={900}>
                  User ID
                </Text>
                <Text fontSize={12}>{stream.userId}</Text>
              </Box>
            </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default StreamTable;
