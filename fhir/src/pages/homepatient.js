import {
  Avatar,
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tag,
} from "@chakra-ui/react";
import TopBanner from "../components/TopBanner";
import {
  WarningIcon,
  ChatIcon,
  PhoneIcon,
  CalendarIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { LuPill } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import "react-chat-widget-react-18/lib/styles.css";
import dynamic from "next/dynamic";

const Widget = dynamic(
  () => import("react-chat-widget-react-18").then((mod) => mod.Widget),
  { ssr: false }
);

function HomePage() {
  // Dummy data for demonstration purposes
  const surveys = ["Survey 1", "Survey 2", "Survey 3"];
  const medicalRecords = ["Record 1", "Record 2", "Record 3"];
  const gp = "Dr. John Smith";
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

    // Now send the message throught the backend API
  };

  return (
    <>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        subtitle="Please feel free to ask any questions"
      />
      <TopBanner />
      <Box p={5}>
        <Heading mb={4}>Hello Matthew</Heading>

        <Box mb={4}>
          <HStack spacing={8}>
            <Card sx={{ borderRadius: "20" }} height="180px">
              <CardHeader>
                <Avatar
                  icon={<CheckIcon />}
                  bg="blue.500"
                  size="sm"
                  mb={4}
                  marginLeft="auto"
                />
                <Heading size="sm">Checkups complete </Heading>
              </CardHeader>

              <CardBody mt={-6}>
                <StatGroup>
                  <Stat>
                    <StatNumber>19</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />2 more than this time last
                      month
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </CardBody>
            </Card>
            <Card sx={{ borderRadius: "20" }} height="180px">
              <CardHeader>
                <Avatar
                  icon={<LuPill />}
                  bg="blue.500"
                  size="sm"
                  mb={4}
                  marginLeft="auto"
                />
                <Heading size="sm">Medication taken </Heading>
              </CardHeader>

              <CardBody mt={-6}>
                <StatGroup>
                  <Stat>
                    <StatNumber>24 tablets</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />3 less than this time last
                      month
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </CardBody>
            </Card>
            <Card sx={{ borderRadius: "20" }} height="180px">
              <CardHeader>
                <Avatar
                  icon={<CalendarIcon />}
                  bg="blue.500"
                  size="sm"
                  mb={4}
                  marginLeft="auto"
                />
                <Heading size="sm">Days since surgery </Heading>
              </CardHeader>

              <CardBody mt={-6}>
                <StatGroup>
                  <Stat>
                    <StatNumber>42</StatNumber>
                  </Stat>
                </StatGroup>
              </CardBody>
            </Card>
            <Card sx={{ borderRadius: "20" }} height="180px">
              <CardHeader>
                <Avatar
                  icon={<MdOutlineHealthAndSafety />}
                  bg="blue.500"
                  size="sm"
                  mb={4}
                  marginLeft="auto"
                />
                <Heading size="sm">Symptoms recorded </Heading>
              </CardHeader>

              <CardBody mt={-6}>
                <StatGroup>
                  <Stat>
                    <StatNumber>4</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />2 less than this time last
                      month
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </CardBody>
            </Card>
            <Card sx={{ borderRadius: "20" }} height="180px">
              <CardHeader>
                <Avatar
                  icon={<FaRegHospital />}
                  bg="blue.500"
                  size="sm"
                  mb={4}
                  marginLeft="auto"
                />
                <Heading size="sm">Days till next appointment </Heading>
              </CardHeader>

              <CardBody mt={-6}>
                <StatGroup>
                  <Stat>
                    <StatNumber>8</StatNumber>
                  </Stat>
                </StatGroup>
              </CardBody>
            </Card>
          </HStack>
        </Box>

        <Box mb={4}>
          <Heading size="md" mb={2}>
            Medical Records
          </Heading>
          <VStack spacing={4}>
            {medicalRecords.map((record, index) => (
              <Card key={index} width="100%" p={4} sx={{ borderRadius: "20" }}>
                <HStack>
                  <Tag>{record} </Tag>
                  <Menu p={4}>
                    <MenuButton marginLeft="auto">...</MenuButton>
                    <MenuList>
                      <MenuItem> View Profile </MenuItem>
                      <MenuItem> Home </MenuItem>
                      <MenuItem> View GP </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </Card>
            ))}
          </VStack>
        </Box>

        <Box mb={4}>
          <Heading size="md" mb={2}>
            General Practitioner
          </Heading>
          <HStack>
            <Avatar
              name="John Smtith"
              size="sm"
              colorScheme="green"
              getInitials={() => {
                return "JS";
              }}
            />
            <Tag>{gp}</Tag>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
