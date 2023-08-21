import React from "react";
import SkillCard from "../components/SkillCard/SkillCard";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";

const colorPalette = [
  "green",
  "yellow",
  "pink",
  "blue",
  // Add more colors if needed
];

const SkillsData = [
  {
    id: "sd1",
    dataFor: "Front End Tools -",
    data: [
      {
        id: "fe1",
        image: "/skill-image-assets/React.png",
        title: "React.js",
        value: "70",
      },
      {
        id: "fe2",
        image: "/skill-image-assets/Nextjs.png",
        title: "Next.js",
        value: "10",
      },
      {
        id: "fe3",
        image: "/skill-image-assets/HTML5.png",
        title: "HTML 5",
        value: "70",
      },
      {
        id: "fe4",
        image: "/skill-image-assets/CSS3.png",
        title: "CSS 3",
        value: "60",
      },
      {
        id: "fe5",
        image: "/skill-image-assets/ChakraUI.png",
        title: "Chakra UI",
        value: "50",
      },
      {
        id: "fe6",
        image: "/skill-image-assets/Bootstrap.png",
        title: "Bootstrap",
        value: "50",
      },
      {
        id: "fe7",
        image: "/skill-image-assets/Tailwind.png",
        title: "Tailwind",
        value: "50",
      },
    ],
  },
  {
    id: "sd2",
    dataFor: "Design Tools -",
    data: [
      {
        id: "dt1",
        image: "/skill-image-assets/Figma.png",
        title: "Figma",
        value: "40",
      },
    ],
  },
  {
    id: "sd3",
    dataFor: "Back End Tools -",
    data: [
      {
        id: "be1",
        image: "/skill-image-assets/Nodejs.png",
        title: "Node JS",
        value: "40",
      },
      {
        id: "be2",
        image: "/skill-image-assets/Javascript.png",
        title: "Express JS",
        value: "60",
      },
      {
        id: "be3",
        image: "/skill-image-assets/Fetch.png",
        title: "Fetch",
        value: "60",
      },
      {
        id: "be4",
        image: "/skill-image-assets/Axios.png",
        title: "Axios",
        value: "40",
      },
      {
        id: "be5",
        image: "/skill-image-assets/Insomnia.png",
        title: "Insomnia",
        value: "30",
      },
    ],
  },
  {
    id: "sd4",
    dataFor: "Database Tools -",
    data: [
      {
        id: "db1",
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
        title: "MongoDB",
        value: "60",
      },
    ],
  },
  {
    id: "sd5",
    dataFor: "Hosting / Deployment Tools -",
    data: [
      {
        id: "h1",
        image: "/skill-image-assets/Vercel.png",
        title: "Vercel",
        value: "80",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      {SkillsData.map((skData) => {
        return (
          <React.Fragment key={skData.id}>
            <VStack w={"full"} mb={12}>
              <Text
                textAlign={"left"}
                w={"full"}
                fontFamily={"google-sans-black"}
                color={"#FFFFFF"}
                fontSize={25}
                mb={4}
              >
                {skData.dataFor}
              </Text>
              <Grid
                w={"full"}
                templateColumns={{
                  base: "1fr 1fr",
                  md: "1fr 1fr 1fr",
                  lg: "1fr 1fr 1fr 1fr",
                }}
                gap={8}
              >
                {skData.data.map((sk, index) => (
                  <GridItem key={sk.id}>
                    <SkillCard
                      image={sk.image}
                      title={sk.title}
                      value={sk.value}
                      color={colorPalette[index % colorPalette.length]}
                    />
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Skills;
