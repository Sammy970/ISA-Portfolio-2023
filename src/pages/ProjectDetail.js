import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";
import { Box } from "@chakra-ui/react";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title, techUsed, desc, image, style } = data;

  return (
    <Box maxW={{ base: "full", md: "90%" }} m={"auto"}>
      <ProjectDetailCard
        title={title}
        techUsed={techUsed}
        desc={desc}
        image={image}
        style={style}
      />
    </Box>
  );
};

export default ProjectDetail;

export function loader({ params }) {
  const projectId = params.projectId;

  const ProjectDetailsData = [
    {
      id: "cnc-mechanism",
      title: "CNC MECHANISM BASED PICK AND PLACE ROBOT",
      techUsed: ["Kinematics", "Motors and Motor Drivers", "Microcontrolers", "Arduino", "RPi"],
      desc: `The CNC mechanism-based pick and place robot project is aimed at developing an advanced industrial automation solution that leverages the precision of CNC technology and the versatility of robotic systems. The primary objective is to create a robotic system capable of accurately picking up objects from one location and placing them with precision in another location. This project bridges the gap between computer-controlled movement and robotic manipulation, resulting in a sophisticated system that can streamline manufacturing, assembly, and material handling processes.`,
      image: [],
      style: "columns",
    },
    {
      id: "delta-robot",
      title: "Delta Robot",
      techUsed: [
        "Inverse and forward Kinematics",
        "Motors and Motor Drivers",
        "Microcontrolers",
        "Arduino",
        "RPi",
        "Computer vision",
        "ROS",
      ],
      desc: `The Delta Robot project aims to design, develop, and implement a high-speed pick and place automation system based on the Delta robot architecture. The Delta robot, also known as a parallel robot, is characterized by its unique design featuring multiple arms connected to a common base. This configuration allows for rapid and precise movements, making it ideal for tasks requiring fast and accurate material handling, sorting, and assembly processes.`,
      image: [
        "/project-image-assets/delta-robot/dr1.jpg",
        "/project-image-assets/delta-robot/dr2.jpg",
        "/project-image-assets/delta-robot/dr3.jpg",
      ],
      style: "columns",
    },
    {
      id: "inspection-drone",
      title: "Inspection Drone",
      techUsed: [
        "Drone Motors and circuits",
        "Computer Vision",
        "Vision sensors",
        "ROS",
      ],
      desc: `The Advanced Inspection Drone project aims to design, develop, and deploy a state-of-the-art drone equipped with advanced sensing, imaging, and communication technologies for remote inspection, monitoring, and assessment tasks. This drone is intended to revolutionize various industries by providing a safe, efficient, and accurate means of inspecting infrastructure, facilities, and environments that are otherwise difficult to access.`,
      image: [
        "https://forcetechnology.com/-/media/force-technology-media/images/services/services-ndt/drone-inspection-solutions/ft802-billede-af-drone-crop.jpg?la=en",
        "https://ecko360industrial.com/wp-content/uploads/2019/03/drone-inspection-services-e1629132471557.png",
        "https://www.dronerush.com/wp-content/uploads/2020/05/DJI-Matrice-300-RTK-commercial-drone-inspection-1200x675.jpg",
      ],
      style: "rows",
    },
  ];

  const SelectedProjectDetailData = ProjectDetailsData.find(
    (projData) => projData.id === projectId
  );

  if (!SelectedProjectDetailData) {
    throw json(
      { message: "Could not fetch project details for selected project!" },
      {
        status: 404,
      }
    );
  }

  const { title, techUsed, desc, image, style } = SelectedProjectDetailData;

  return {
    title,
    techUsed,
    desc,
    image,
    style,
  };
}
