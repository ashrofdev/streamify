import React from "react";
import { HStack, Box, Flex } from "@chakra-ui/react";
import { SiBaremetrics, SiSoundcharts } from "react-icons/si";
import { SlList } from "react-icons/sl";

const Sidebar = ({ tab, setTab }) => {
  return (
    <Flex
      mt={[0, 5]}
      pt={[0, 20]}
      fontSize={12}
      direction={["row", "column"]}
      mb={[5, 0]}
      gap={[0,5]}
    >
      <Flex
        bgColor={tab === "metrics" && "#021c1c"}
        onClick={() => setTab("metrics")}
        py={4}
        pl={[0, 8]}
        pr={[0, 5]}
        w={"100%"}
        borderRightRadius={[0, 50]}
        justifyContent={["center", "flex-start"]}
        alignItems={"center"}
        gap={4}
        cursor={"pointer"}
        className='nav-btn'
      >
        <Box zIndex={10}>
          <SiBaremetrics />
        </Box>
        <Box zIndex={10} display={{ base: "none", lg: "block" }}>Key Metrics</Box>
      </Flex>
      <Flex
        bgColor={tab === "charts" && "#021c1c"}
        onClick={() => setTab("charts")}
        py={4}
        px={[2, 0]}
        pl={[0, 8]}
        pr={[0, 5]}
        w={"100%"}
        borderRightRadius={[0, 50]}
        justifyContent={["center", "flex-start"]}
        alignItems={"center"}
        gap={4}
        cursor={"pointer"}
        className='nav-btn'
      >
        <Box zIndex={10}>
          <SiSoundcharts />
        </Box>
        <Box zIndex={10} display={{ base: "none", lg: "block" }}>Data Visualization</Box>
      </Flex>
      <Flex
        bgColor={tab === "table" && "#021c1c"}
        onClick={() => setTab("table")}
        py={4}
        px={[2, 0]}
        pl={[0, 8]}
        pr={[0, 5]}
        w={"100%"}
        borderRightRadius={[0, 50]}
        justifyContent={["center", "flex-start"]}
        alignItems={"center"}
        gap={4}
        cursor={"pointer"}
        className='nav-btn'
      >
        <Box zIndex={10}>
          <SlList />
        </Box>
        <Box zIndex={10} display={{ base: "none", lg: "block" }}>Data Table</Box>
      </Flex>
      <Flex
        bgColor={tab === "bonus" && "#021c1c"}
        onClick={() => setTab("bonus")}
        py={4}
        px={[2, 0]}
        pl={[0, 8]}
        pr={[0, 5]}
        w={"100%"}
        borderRightRadius={[0, 50]}
        justifyContent={["center", "flex-start"]}
        alignItems={"center"}
        gap={4}
        cursor={"pointer"}
        className='nav-btn'
      >
        <Box zIndex={10}>
          <SlList />
        </Box>
        <Box zIndex={10} display={{ base: "none", lg: "block" }}>Bonus</Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
