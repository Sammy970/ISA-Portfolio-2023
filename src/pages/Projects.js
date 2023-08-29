import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const ProjectsData = [
  {
    id: "cnc-mechanism",
    no: 1,
    title: "Cnc Mechanism Based Pick and Place Robot",
    imageLoc: "/project-image-assets/project1/project1.png",
  },
  {
    id: "delta-robot",
    no: 2,
    title: "Delta Robot",
    imageLoc: "/project-image-assets/project2/project2.png",
  },
  {
    id: "inspection-drone",
    no: 3,
    title: "Inspection Drone",
    imageLoc: "/project-image-assets/project3/project3.png",
  },
];
const Projects = () => {
  return (
    <>
      <Box maxW={{ base: "full", md: "95%" }} m={"auto"}>
        <Grid
          templateColumns={{
            base: "auto",
            md: "1fr 1fr",
            lg: "40% 40%",
            xl: "1fr 1fr 1fr",
          }}
          m={"auto"}
          justifyContent={"center"}
          gap={14}
          mt={5}
          mb={10}
        >
          {ProjectsData.map((proj) => (
            <GridItem key={proj.id}>
              <ProjectCard
                id={proj.id}
                no={proj.no}
                title={proj.title}
                image={proj.imageLoc}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
