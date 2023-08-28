import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";


const IVCardPage = ({ variant, desc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSrc, setImageSrc] = React.useState(""); // State to hold image source

  const openModal = (src) => {
    setImageSrc(src);
    onOpen();
  };

  const getImageSrc = (variant) => {
    return `iv_${variant}_text.png`; // Adjust the image file naming pattern
  };

 

  return (
    <>
      <Card
        maxW="full"
        h="full"
        borderRadius={0}
        border="2px solid black"
        boxShadow="8px -8px 0px #0f0f0f"
        cursor="pointer"
        onClick={() => openModal(getImageSrc(variant))}
        _hover={{
          transform: "scale(1.05)", // Increase scale on hover
          boxShadow: "4px -4px 1px #0f1f0f", // Adjust box shadow on hover
          transition: "transform 0.3s, box-shadow 0.3s", // Add smooth transition
        }}
      >
        <CardHeader
          p={1}
          fontSize={15}
          color={"#000000"}
          fontFamily="'Press Start 2P', cursive"
          ml={2}
        >
          <Text>{`${variant}`}</Text>
        </CardHeader>
        <Divider />
        <CardBody p={2} textAlign={"center"} mt={2}>
          <Image src={getImageSrc(variant)} w={{ base: "auto", md: "100%" }} />
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${variant}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image margin={0} src={imageSrc} alt={`Variant ${variant}`} />
            <Text fontSize="24" lineHeight="tall" fontFamily="body">
              {desc}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">More</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IVCardPage;
