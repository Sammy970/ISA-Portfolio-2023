import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard";

const isaEduFoundation = [
  {
    id: "s1",
    imageSrc:
      "https://media.licdn.com/dms/image/D4E03AQFOb1BrVVDq8w/profile-displayphoto-shrink_400_400/0/1689469095936?e=1698883200&v=beta&t=FJPorarX7ix65YshNibUkmCbblH_vsLM0OnjugPUshs",
    name: "Swapnil Mane",
    amount: "$3000",
  },
  {
    id: "s2",
    imageSrc:
      "https://media.licdn.com/dms/image/D4D03AQF8XkaafjcT9w/profile-displayphoto-shrink_400_400/0/1678534834778?e=1698883200&v=beta&t=yMbVb9rU7tlPdsmFFX_K358OESSXVPyQOGPjxm-sM8A",
    name: "Shalaka Deo",
    amount: "$3000",
  },
  {
    id: "s3",
    imageSrc:
      "https://media.licdn.com/dms/image/D4D35AQEHSyT0Sjl1CQ/profile-framedphoto-shrink_400_400/0/1659792949257?e=1693843200&v=beta&t=CTyQORIe2GmFbgMyQPVWYvNf3M8f5f2Z_jlJRmRn_fY",
    name: "Soham Bhure",
    amount: "$3000",
  },
  {
    id: "s4",
    imageSrc:
      "https://media.licdn.com/dms/image/C4E03AQF8DnslnwNt5w/profile-displayphoto-shrink_400_400/0/1634962078284?e=1698883200&v=beta&t=T8NB7lk4o4bf9JWR2wU5AKDQrFySQkvAMzIOsssm_PM",
    name: "Rohit Gavali",
    amount: "$3000",
  },
  {
    id: "s5",
    imageSrc:
      "https://media.licdn.com/dms/image/D5603AQFmxsmkxLChEQ/profile-displayphoto-shrink_400_400/0/1685637433230?e=1698883200&v=beta&t=QP2Od6SGmd735V3_c6v_9BoJTLUN3L4SS0AAVqhpLNw",
    name: "Parth Hasabnis",
    amount: "$3000",
  },
  {
    id: "s6",
    imageSrc:
      "https://media.licdn.com/dms/image/D4E03AQG520cmupOM7A/profile-displayphoto-shrink_400_400/0/1675135327154?e=1698883200&v=beta&t=T8f4e2NicCdAFqBgmCIfVndMpomljjc74enBqHpXvQQ",
    name: "Yutika Chougule",
    amount: "$3000",
  },
  {
    id: "s7",
    imageSrc:
      "https://media.licdn.com/dms/image/C5603AQH1ryEDkp7AjQ/profile-displayphoto-shrink_400_400/0/1614672997730?e=1698883200&v=beta&t=bPf1wA9z9PkrcNpi1kmHDMgOV6hnWjikZzUl4-zqKwA",
    name: "Anway Shirgaonkar",
    amount: "$3000",
  },
  {
    id: "s8",
    imageSrc:
      "https://media.licdn.com/dms/image/C4D03AQHdV_O9AnPO8w/profile-displayphoto-shrink_400_400/0/1668010416113?e=1698883200&v=beta&t=T_iG55h11co4YSXcTz0WVTQJDTnoDsN1P2W7I4QQAoc",
    name: "Aniruddha Atre",
    amount: "$3000",
  },
];

const isaWasteWater = [
  {
    id: "isaWW1",
    imageSrc:
      "https://media.licdn.com/dms/image/C4D03AQHdV_O9AnPO8w/profile-displayphoto-shrink_400_400/0/1668010416113?e=1698883200&v=beta&t=T_iG55h11co4YSXcTz0WVTQJDTnoDsN1P2W7I4QQAoc",
    name: "Aniruddha Atre",
    amount: "$1000",
  },
];

const isaPowerDiv = [
  {
    id: "isaPD1",
    imageSrc:
      "https://media.licdn.com/dms/image/C4E03AQF8DnslnwNt5w/profile-displayphoto-shrink_400_400/0/1634962078284?e=1698883200&v=beta&t=T8NB7lk4o4bf9JWR2wU5AKDQrFySQkvAMzIOsssm_PM",
    name: "Rohit Gavali",
    amount: "$4000",
  },
];

const isaAnalysisDiv = [
  {
    id: "isaAD1",
    imageSrc:
      "https://media.licdn.com/dms/image/C5603AQH1ryEDkp7AjQ/profile-displayphoto-shrink_400_400/0/1614672997730?e=1698883200&v=beta&t=bPf1wA9z9PkrcNpi1kmHDMgOV6hnWjikZzUl4-zqKwA",
    name: "Anway Shirgaonkar",
    amount: "$1500",
  },
  {
    id: "isaAD2",
    imageSrc:
      "https://media.licdn.com/dms/image/C4D03AQGSlZasd1BAWA/profile-displayphoto-shrink_400_400/0/1626616185023?e=1698883200&v=beta&t=5dw6qXZVzN-4UHY_El4hF9tH3mjUaYBhhU-K_yAF8NM",
    name: "Shivangi Deo",
    amount: "$1000",
  },
];

const Scholarships = () => {
  return (
    <Accordion mb={10} defaultIndex={[0]} allowMultiple>
      <AccordionItem border={"2px solid black"} p={3}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              fontFamily={"'Press Start 2P',cursive "}
              fontSize={{ base: 12, md: 20 }}
              textAlign="left"
              mb={2}
            >
              ISA Educational Foundation - 2022
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} maxW={{ base: "90%", md: "full" }} m={"auto"}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            gap={10}
          >
            {isaEduFoundation.map((isaEduData) => (
              <GridItem key={isaEduData.id}>
                <ScholarshipCard
                  imageSrc={isaEduData.imageSrc}
                  name={isaEduData.name}
                  amount={isaEduData.amount}
                />
              </GridItem>
            ))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem border={"2px solid black"} p={3}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              fontFamily={"'Press Start 2P',cursive "}
              fontSize={{ base: 12, md: 20 }}
              textAlign="left"
              mb={2}
            >
              ISA Water and Wastewater - 2022
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={{ base: "1fr ", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            gap={10}
          >
            {isaWasteWater.map((isaWWData) => (
              <GridItem key={isaWWData.id}>
                <ScholarshipCard
                  imageSrc={isaWWData.imageSrc}
                  name={isaWWData.name}
                  amount={isaWWData.amount}
                />
              </GridItem>
            ))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem border={"2px solid black"} p={3}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              fontFamily={"'Press Start 2P',cursive "}
              fontSize={{ base: 12, md: 20 }}
              textAlign="left"
              mb={2}
            >
              ISA's Power Industry Divison - 2022
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={{ base: "1fr ", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            gap={10}
          >
            {isaPowerDiv.map((isaPDData) => (
              <GridItem key={isaPDData.id}>
                <ScholarshipCard
                  imageSrc={isaPDData.imageSrc}
                  name={isaPDData.name}
                  amount={isaPDData.amount}
                />
              </GridItem>
            ))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem border={"2px solid black"} p={3}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              fontFamily={"'Press Start 2P',cursive "}
              fontSize={{ base: 12, md: 20 }}
              textAlign="left"
              mb={2}
            >
              ISA Analysis Division - 2022
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={{ base: "1fr ", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            gap={10}
          >
            {isaAnalysisDiv.map((isaADData) => (
              <GridItem key={isaADData.id}>
                <ScholarshipCard
                  imageSrc={isaADData.imageSrc}
                  name={isaADData.name}
                  amount={isaADData.amount}
                />
              </GridItem>
            ))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Scholarships;
