import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import TeamDetailCard from "../components/TeamDetailCards/TeamDetailCard";
import CoreDetailCard from "../components/TeamDetailCards/CoreDetailCard";

const TeamDetail = () => {
  const data = useLoaderData().members;
  // Accessing members
  // data.members[0].name / photo / id
  // console.log(data);
  const { id, team, members } = data;
  console.log(id);
  return (
    <>
      <Text
        fontFamily={"'Work Sans', sans serif"}
        fontWeight={700}
        fontSize={40}
        mb={10}
        ml={{ md: 10 }}
      >
        {team}
      </Text>
      {id !== "core" && (
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "35% 35%",
          }}
          m={"auto"}
          justifyContent={"center"}
          gap={10}
        >
          {members.map((data) => (
            <GridItem key={data.id}>
              <TeamDetailCard name={data.name} photo={data.photo} />
            </GridItem>
          ))}
        </Grid>
      )}
      {id === "core" && (
        <VStack w={"full"} mb={10} gap={{ base: 14, md: 24 }}>
          <CoreDetailCard
            position={"left"}
            name={"Krushna More"}
            isaPosition={"President"}
            imgSrc={"/TeamData/Core/krushna.png"}
            size={"50%"}
            topBase={-8}
            topMd={-24}
          />
          <CoreDetailCard
            position={"right"}
            name={"Sanskruti Shimple"}
            isaPosition={"Vice President"}
            imgSrc={"/TeamData/Core/sanskruti.png"}
            size={"35.3%"}
            topBase={-2}
            topMd={-14}
          />
          <CoreDetailCard
            position={"left"}
            name={"Vedhas Talnikar"}
            isaPosition={"Secretary"}
            imgSrc={"/TeamData/Core/vedhas.png"}
            size={{ base: "53%", md: "46%" }}
            topBase={-8}
            topMd={-16}
          />
          <CoreDetailCard
            position={"right"}
            name={"Nimisha Chitriv"}
            isaPosition={"Joint Secretary"}
            imgSrc={"/TeamData/Core/nimisha.png"}
            size={"46%"}
            topBase={-8}
            topMd={-24}
          />
          <CoreDetailCard
            position={"left"}
            name={"Jash Rupani"}
            isaPosition={"Club Head"}
            imgSrc={"/TeamData/Core/jash.png"}
            size={"44%"}
            topBase={-8}
            topMd={-24}
          />
          <CoreDetailCard
            position={"right"}
            name={"Jay Mehta"}
            isaPosition={"Treasurer"}
            imgSrc={"/TeamData/Core/jay.png"}
            size={{ base: "51%", md: "50.5%" }}
            topBase={-6}
            topMd={-20}
          />
        </VStack>
      )}
    </>
  );
};

export default TeamDetail;

export function loader({ params }) {
  const teamId = params.teamId;

  const teamData = [
    {
      id: "core",
      team: "Core Team",
      members: [
        {
          id: "coreM1",
          name: "Krushna More",
          position: "President",
          photo: "/TeamData/Core/krushna.png",
        },
        {
          id: "coreM2",
          name: "Sanskruti Shimple",
          position: "Vice President",
          photo: "/TeamData/Core/sanskruti.png",
        },
        {
          id: "coreM3",
          name: "Vedhas Talnikar",
          position: "Secretary",
          photo: "/TeamData/Core/vedhas.png",
        },
        {
          id: "coreM4",
          name: "Nimisha Chitriv",
          position: "Joint Secretary",
          photo: "/TeamData/Core/nimisha.png",
        },
        {
          id: "coreM5",
          name: "Jash Rupani",
          position: "Club Head",
          photo: "/TeamData/Core/jash.png",
        },
        {
          id: "coreM6",
          name: "Jay Mehta",
          position: "Treasurer",
          photo: "/TeamData/Core/jay.png",
        },
      ],
    },
    {
      id: "webdev",
      team: "Web Development Team",
      members: [
        {
          id: "webM1",
          name: "Samyak Jain",
          position: "Head",
          photo: "/TeamData/WebDev/samyak.png",
        },
        {
          id: "webM2",
          name: "Parag Purandare",
          position: "Head",
          photo: "/TeamData/WebDev/parag.png",
        },
        {
          id: "webM3",
          name: "Abaan Tamboli",
          position: "Head",
          photo: "/TeamData/WebDev/abaan.png",
        },
      ],
    },
    {
      id: "mechanical",
      team: "Mechanical Team",
      members: [
        {
          id: "mechM1",
          name: "Vivekanand Rathod",
          position: "Head",
          photo: "/TeamData/Mechanical/vivekanand.png",
        },
        {
          id: "mechM2",
          name: "Yash Dhandhukia",
          position: "Head",
          photo: "/TeamData/Mechanical/yash.png",
        },
        {
          id: "mechM3",
          name: "Sarthak baviskar",
          position: "Head",
          photo: "/TeamData/Mechanical/sarthak.png",
        },
      ],
    },
    {
      id: "electronics",
      team: "Electronics Team",
      members: [
        {
          id: "elecM1",
          name: "Anurag Chatterjee",
          position: "Head",
          photo: "/TeamData/Electronics/anurag.png",
        },
        {
          id: "elecM2",
          name: "Mrunmai Girame",
          position: "Head",
          photo: "/TeamData/Electronics/mrunmai.png",
        },
      ],
    },
    {
      id: "rnd",
      team: "Research and Development Team",
      members: [
        {
          id: "rndM1",
          name: "Kartik Khomane",
          position: "Head",
          photo: "/TeamData/rnd/kartik.png",
        },
        {
          id: "rndM2",
          name: "Gurudutta Deore",
          position: "Head",
          photo: "/TeamData/rnd/gurudutta.png",
        },
      ],
    },
    {
      id: "aiml",
      team: "Artificial Intelligence / Machine Learning Team",
      members: [
        {
          id: "aimlM1",
          name: "Prashant Kale",
          position: "Head",
          photo: "/TeamData/aiml/prashant.png",
        },
        {
          id: "aimlM2",
          name: "Apoorv Karmalkar",
          position: "Head",
          photo: "/TeamData/aiml/apoorv.png",
        },
        {
          id: "aimlM3",
          name: "Ritiksha Pardhi",
          position: "Head",
          photo: "/TeamData/aiml/ritiksha.png",
        },
      ],
    },
    {
      id: "iot",
      team: "Internet of Things Team",
      members: [
        {
          id: "iotM1",
          name: "Sumedh Patti",
          position: "Head",
          photo: "/TeamData/iot/sumedh.png",
        },
        {
          id: "iotM2",
          name: "Dinesh Patil",
          position: "Head",
          photo: "/TeamData/iot/dinesh.png",
        },
        {
          id: "iotM3",
          name: "Bhupendrasing Rajput",
          position: "Head",
          photo: "/TeamData/iot/bhupendrasing.png",
        },
      ],
    },
    {
      id: "robotics",
      team: "Robotics Team",
      members: [
        {
          id: "roboticsM1",
          name: "Prashant Kale",
          position: "Head",
          photo: "/TeamData/aiml/prashant.png",
        },
        {
          id: "roboticsM2",
          name: "Apoorv Karmalkar",
          position: "Head",
          photo: "/TeamData/aiml/apoorv.png",
        },
        {
          id: "roboticsM3",
          name: "Ritiksha Pardhi",
          position: "Head",
          photo: "/TeamData/aiml/ritiksha.png",
        },
      ],
    },
    {
      id: "cybersecurity",
      team: "Cybersecurity Team",
      members: [
        {
          id: "cyberM1",
          name: "Sumedh Patti",
          position: "Head",
          photo: "/TeamData/iot/sumedh.png",
        },
        {
          id: "cyberM2",
          name: "Dinesh Patil",
          position: "Head",
          photo: "/TeamData/iot/dinesh.png",
        },
        {
          id: "cyberM3",
          name: "Bhupendrasing Rajput",
          position: "Head",
          photo: "/TeamData/iot/bhupendrasing.png",
        },
      ],
    },
    {
      id: "webhandling",
      team: "Website Handling Team",
      members: [
        {
          id: "webHandlingM1",
          name: "Rutuj Saraf",
          position: "Head",
          photo: "/TeamData/webhandling/rutuj.png",
        },
        {
          id: "webHandlingM2",
          name: "Sumaiyya Nadaf",
          position: "Head",
          photo: "/TeamData/webhandling/sumaiyya.png",
        },
        {
          id: "webHandlingM3",
          name: "Pratiksha bable",
          position: "Head",
          photo: "/TeamData/webhandling/pratiksha.png",
        },
      ],
    },
    {
      id: "sponsorship",
      team: "Sponsorship & Industry Relations Team",
      members: [
        {
          id: "sponsorM1",
          name: "Samarth Bhalake",
          position: "Head",
          photo: "/TeamData/sponsorship/samarth.png",
        },
        {
          id: "sponsorM2",
          name: "Tejas Rajguru",
          position: "Head",
          photo: "/TeamData/sponsorship/tejas.png",
        },
        {
          id: "sponsorM3",
          name: "Prathamesh Bansode",
          position: "Head",
          photo: "/TeamData/sponsorship/prathamesh.png",
        },
      ],
    },
    {
      id: "publicity",
      team: "Publicity Team",
      members: [
        {
          id: "publicityM1",
          name: "Yash Bhalerao",
          position: "Head",
          photo: "/TeamData/publicity/yash.png",
        },
        {
          id: "publicityM2",
          name: "Shruti Andraskar",
          position: "Head",
          photo: "/TeamData/publicity/shruti.png",
        },
        {
          id: "publicityM3",
          name: "Saurav Gujar",
          position: "Head",
          photo: "/TeamData/publicity/saurav.png",
        },
      ],
    },
    {
      id: "branding",
      team: "Branding Team",
      members: [
        {
          id: "brandingM1",
          name: "Sarthak Biyani",
          position: "Head",
          photo: "/TeamData/branding/sarthak.png",
        },
        {
          id: "brandingM2",
          name: "Yash sonone",
          position: "Head",
          photo: "/TeamData/branding/yash.png",
        },
      ],
    },
    {
      id: "content",
      team: "Content Team",
      members: [
        {
          id: "contentM1",
          name: "Kimaya Kerkar",
          position: "Head",
          photo: "/TeamData/content/kimaya.png",
        },
        {
          id: "contentM2",
          name: "Bhairavi Pustode",
          position: "Head",
          photo: "/TeamData/content/bhairavi.png",
        },
        {
          id: "contentM3",
          name: "Shravani Tambe",
          position: "Head",
          photo: "/TeamData/content/shravani.png",
        },
      ],
    },
    {
      id: "database",
      team: "Database Team",
      members: [
        {
          id: "dbM1",
          name: "Aditya bhingarkar",
          position: "Head",
          photo: "/TeamData/database/aditya.png",
        },
        {
          id: "dbM2",
          name: "Srushti Bhuyar",
          position: "Head",
          photo: "/TeamData/database/srushti.png",
        },
      ],
    },
    {
      id: "finance",
      team: "Finance Team",
      members: [
        {
          id: "financeM1",
          name: "Ayush Biyani",
          position: "Head",
          photo: "/TeamData/finance/ayush.png",
        },
        {
          id: "financeM2",
          name: "Piyush Bhutada",
          position: "Head",
          photo: "/TeamData/finance/piyush.png",
        },
        {
          id: "financeM3",
          name: "Madhur Bhutada",
          position: "Head",
          photo: "/TeamData/finance/madhur.png",
        },
      ],
    },
  ];

  const SelectedTeamDetailData = teamData.find((tData) => tData.id === teamId);

  return {
    members: SelectedTeamDetailData,
  };
}
