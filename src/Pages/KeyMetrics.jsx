import { Box, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

import alan from "../assets/alan.png";

import { FaUsers } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { FiActivity } from "react-icons/fi";
import { TbPigMoney } from "react-icons/tb";
import { getActiveUsers, getTopArtist, getTopStreams, getTotalRevenue, getTotalStreams, getTotalUsers } from "../utils";

const KeyMetrics = () => {
   
  return (
    <Box p={4}>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]} gap={5}>
        <Box border={"1px solid #021c1c"} p={4} borderRadius={10}>
          <Text fontSize={12}>Total Users</Text>
          <Flex alignItems={"center"} justifyContent={"space-between"} p={2}>
            <Box>
              <FaUsers size={30} />
            </Box>
            <Text fontSize={20}>{getTotalUsers()}</Text>
          </Flex>
        </Box>
        <Box border={"1px solid #021c1c"} p={4} borderRadius={10}>
          <Text fontSize={12}>Active Users</Text>
          <Flex alignItems={"center"} justifyContent={"space-between"} p={2}>
            <Box>
              <FiActivity size={30} />
            </Box>
            <Text fontSize={20}>{getActiveUsers()}</Text>
          </Flex>
        </Box>
        <Box border={"1px solid #021c1c"} p={4} borderRadius={10}>
          <Text fontSize={12}>Total Streams</Text>
          <Flex alignItems={"center"} justifyContent={"space-between"} p={2}>
            <Box>
              <GiMusicalNotes size={30} />
            </Box>
            <Text fontSize={20}>{getTotalStreams()}</Text>
          </Flex>
        </Box>
        <Box border={"1px solid #021c1c"} p={4} borderRadius={10}>
          <Text fontSize={12}>Total Revenue</Text>
          <Flex alignItems={"center"} justifyContent={"space-between"} p={2}>
            <Box>
              <TbPigMoney size={30} />
            </Box>
            <Text fontSize={20}>${getTotalRevenue()}</Text>
          </Flex>
        </Box>
      </Grid>

      <Box  mt={10}>
        <Text fontSize={15}>Top Artist</Text>
      </Box>
      <Flex marginTop={5} borderRadius={10} p={4} boxShadow={"1px 1px 5px black"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text fontSize={20} color={"#01FFFF"}>
            {getTopArtist().name}
          </Text>
          <Text fontSize={8}>{getTopArtist().rank} Streams</Text>
        </Box>
        <Box>
          <Image src={alan} w={20} />
        </Box>
      </Flex>
    </Box>
  );
};

export default KeyMetrics;
