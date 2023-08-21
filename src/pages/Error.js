import React from "react";
import { Link, useRouteError } from "react-router-dom";
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
import Sidebar from "../components/Sidebar/Sidebar";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Profilebar />
      <main>
        <Box display={{ base: "none", md: "block" }}>
          <Grid templateColumns={"230px auto auto"} gap={5}>
            <GridItem colSpan={1} maxH={"70vh"}>
              <Sidebar />
            </GridItem>
            <GridItem colSpan={2} boxShadow="md" borderRadius="10px">
              {error.internal ? error.data : error.data.message}
            </GridItem>
          </Grid>
        </Box>

        {/* For smaller screens (mobile) */}
        <Box display={{ base: "block", md: "none" }} w={"full"}>
          <Grid templateRows={"1fr auto"} gap={5} w={"full"}>
            <GridItem
              rowSpan={1}
              // bg="#f5f5f5"
              boxShadow="md"
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
                  <Link to={"/blogs"}>
                    <MenuItem>Blogs</MenuItem>
                  </Link>
                  <Link to={"/skills"}>
                    <MenuItem>Skills</MenuItem>
                  </Link>
                  <Link to={"/certificates"}>
                    <MenuItem>Certificates</MenuItem>
                  </Link>
                  <Link to={"/timeline"}>
                    <MenuItem>Timeline</MenuItem>
                  </Link>
                  <Link to={"/contacts"}>
                    <MenuItem>Contacts</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </GridItem>
            <GridItem rowSpan={1} boxShadow="md" borderRadius="10px">
              {error.internal ? error.data : error.data.message}
            </GridItem>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default ErrorPage;
