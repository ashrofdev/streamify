import React, { useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import KeyMetrics from "./Pages/KeyMetrics";
import Charts from "./Pages/Charts";
import StreamTable from "./Pages/StreamTable";
import Bonus from "./Pages/Bonus";

const Dashboard = () => {
  const [tab, setTab] = useState("metrics");
  return (
    <Flex color={"white"} bgColor={"#121212"} flexDir={["column", "row"]}>
      <Box maxW={["100vw", "60px", "60px", "250px"]}>
        <Text
          display={["none", "block"]}
          fontSize={{ sm: 0, lg: 30 }}
          textAlign={"center"}
          pt={5}
          color={"#063838"}
        >
          Streamify
        </Text>
        <Sidebar tab={tab} setTab={setTab} />
      </Box>
      <Box flex='1'>
        <Container maxW='container.lg' mt={[0, 10]} p={[0, 0]}>
          {tab === "metrics" ? (
            <KeyMetrics />
          ) : tab === "charts" ? (
            <Charts />
          ) : tab === "table" ? (
            <StreamTable />
          ) : (
            <Bonus />
          )}
        </Container>
      </Box>
    </Flex>
  );
};

export default Dashboard;
