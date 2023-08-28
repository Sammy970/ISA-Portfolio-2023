import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AboutPageCard from "../components/AboutPageCard/AboutPageCard";

// const colorPalette = [
//   "#DDEFE0",
//   "#F4ECDD",
//   "#EFDADA",
//   "#DEE0EF",
//   // Add more colors if needed
// ];

// const EducationData = [
//   {
//     id: "edu1",
//     year: "2021 - 2024",
//     branchName: "BTech in Instrumentation and Control Engineering",
//     collegeName: "Vishwakarma Institute of Technology, Pune",
//     image:
//       "https://www.collegebatch.com/static/clg-gallery/vishwakarma-institute-of-technology-pune-224988.jpg",
//   },
//   {
//     id: "edu2",
//     year: "2018 - 2021",
//     branchName: "Diploma in Instrumentation Engineering",
//     collegeName: "Vidyaprasarak Mandal Polytechnic College, Thane",
//     image:
//       "https://content3.jdmagicbox.com/comp/thane/42/022p8400842/catalogue/vidya-prasarak-mandals-polytechnic-thane-west-thane-engineering-institutes-njvsjog41i.jpg",
//   },
//   {
//     id: "edu3",
//     year: "2018",
//     branchName: "SSC - 10th Standard",
//     collegeName: "ST. John the Baptist High School and Junior College, Thane",
//     image:
//       "https://lh3.googleusercontent.com/p/AF1QipOVRAOapr7RIPgupAfnxqfThzZReYKf--IXezSk=s1360-w1360-h1020",
//   },
// ];

// const ExperienceData = [
//   {
//     id: "exp1",
//     year: "Aug 2023 - Present",
//     post: "Head of Web Developement",
//     where: "International Society of Automation (ISA)",
//     image:
//       "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1436854777/xc3cjzrnfciekp6ewd31.png",
//   },
// ];

// const AboutMeData =
//   "Hello! I'm Samyak Jain, currently pursuing a B.Tech in Instrumentation and Control Engineering at VIT Pune. My skillset includes JavaScript, React.js, React Native, Node.js, and MongoDB, and I have a strong passion for web development and open-source contributions. As the Web Development Head of ISA VIT Pune, I'm dedicated to enhancing my skills, completing projects, and staying updated with industry trends.";

const About = () => {
  return (
    <>
      <VStack borderRadius="13px" w={"full"} color="#0f0f0f" mb={30}>
        <Text
          ml={3}
          mb={{ base: 5, sm: 5 }}
          w={"full"}
          textAlign={"left"}
          fontSize="25px"
          fontFamily="'Work Sans', sans-serif"
          fontWeight={700}
        >
          About ISA
        </Text>
        <Grid
          w={"full"}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          justifyContent="center"
          gap={{ base: 12, md: 10 }}
          position="relative"
        >
          <GridItem
            boxShadow={"lg"}
            position={{ base: "absolute", md: "absolute" }}
            top={0}
            right={{ base: "37%", sm: "45%", md: "50%", lg: "50%" }}
            left={{ base: "auto", md: "10%", lg: "20%" }}
          >
            <AboutPageCard
              variant={"one"}
              text={"Mission"}
              imgSrc={"/AboutPage-Assets/mission_one_text.png"}
            />
          </GridItem>
          <GridItem
            boxShadow={"lg"}
            position={{ base: "absolute", md: "absolute" }}
            top={{ base: 130, sm: 150, md: 120, lg: 140 }}
            left={{ base: "37%", sm: "48%", md: "45%", lg: "47%" }}
            right={{ base: "", md: "15%", lg: "23%" }}
          >
            <AboutPageCard
              variant={"two"}
              imgSrc={"/AboutPage-Assets/mission_two_text.png"}
            />
          </GridItem>
        </Grid>

        <Grid w={"full"} position={"relative"} mb={100}>
          <GridItem
            boxShadow={"lg"}
            position={{ base: "absolute", md: "absolute" }}
            mb={400}
            top={{ base: 270, sm: 310, md: 300, lg: 180, xl: 230 }}
            left={{ base: "20%", sm: "30%", md: "30%", lg: "15%" }}
            right={{ base: "20%", sm: "30%", md: "30%", lg: "60%" }}
          >
            <AboutPageCard
              variant={"one"}
              text={"Vision"}
              imgSrc={"/AboutPage-Assets/vision_text.png"}
            />
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default About;
