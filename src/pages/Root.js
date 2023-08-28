import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profilebar from "../components/Profilebar/Profilebar";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Sidebar from "../components/Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Profilebar />
      <main>
        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <Grid templateColumns={"230px auto auto"} gap={5}>
            <GridItem colSpan={1} maxH={"70vh"}>
              <Sidebar />
            </GridItem>
            <GridItem colSpan={2} borderRadius="10px">
              <Outlet />
            </GridItem>
          </Grid>
        </Box>

        {/* For smaller screens (mobile) */}
        <Box display={{ base: "block", md: "block", lg: "none" }} w={"full"}>
          <Grid templateRows={"1fr auto"} gap={5} w={"full"}>
            <GridItem
              rowSpan={1}
              // bg="#f5f5f5"
              // boxShadow="md"
              h="auto"
              w={"full"}
              borderRadius="10px"
            >
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Menu
                </MenuButton>
                <MenuList
                  color={"#1f1f1f"}
                  fontFamily={"google-sans-medium"}
                  fontSize={16}
                >
                  <Link to={"/"}>
                    <MenuItem>About</MenuItem>
                  </Link>
                  <Link to={"/projects"}>
                    <MenuItem>Projects</MenuItem>
                  </Link>
                  <Link to={"/iv"}>
                    <MenuItem>Industrial Visits</MenuItem>
                  </Link>
                  <Link to={"/team"}>
                    <MenuItem>Team</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </GridItem>
            <GridItem rowSpan={1} borderRadius="10px">
              <Outlet />
            </GridItem>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default RootLayout;
