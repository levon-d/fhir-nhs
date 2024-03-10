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
  import TopBannerDoc from "../components/TopBannerDoc";
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
  import { GiMedicines } from "react-icons/gi";
  import { IoNewspaperOutline } from "react-icons/io5";
  import { IoSync } from "react-icons/io5";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import "react-chat-widget-react-18/lib/styles.css";
  import dynamic from "next/dynamic";
  
  const Widget = dynamic(
    () => import("react-chat-widget-react-18").then((mod) => mod.Widget),
    { ssr: false }
  );

  let tickSymbol = String.fromCodePoint(0x2713); 
  let loadSymbol = String.fromCodePoint(0x27F3);



function Doc(){
    
    const appointmentRecords = ["Patient 1", "Patient 2", "Patient 3"];
    const appointmentTimes = ["13:00", "14:00", "18:00"]
    const surgeryRecords = ["Patient 1"]
    const surgeryTimes = ["15:00"]
    const regularPatients = ["Marwan Yassini", "Junwoo Lee", "Parth Gandhi", "Raghav Awasthi", "Varun Srini", "Asmita Anand", "Seongwon Yun"];
    const regularPatientsInitials = ["MY", "JL", "PG", "RA", "VS", "AA", "SY"];

    return(
      <>
        <TopBannerDoc />
        <Box p={5}>
          <Heading mb={4}>Hello Dr. Levon Davtyan</Heading>

          <Box mb={4}>
            <HStack spacing={6}>              
              <Card sx={{ borderRadius: "20" }} height="180px">
                <CardHeader>
                  <Avatar
                    icon={<CalendarIcon />}
                    bg="blue.500"
                    size="sm"
                    mb={4}
                    marginLeft="auto"
                  />
                  <Heading size="sm">Appointments Scheduled Today</Heading>
                </CardHeader>

                <CardBody mt={-6}>
                  <StatGroup>
                    <Stat>
                      <StatNumber>6</StatNumber>
                      <StatHelpText>
                        <span style={{ color: 'green' }}>{tickSymbol}</span> 3 Appointments Finished
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
                  <Heading size="sm">Surgeries Scheduled Today</Heading>
                </CardHeader>

                <CardBody mt={-6}>
                  <StatGroup>
                    <Stat>
                      <StatNumber>2</StatNumber>
                      <StatHelpText>
                        <span style={{ color: 'green' }}>{tickSymbol}</span> 1 Surgery Completed
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
              </Card>
              <Card sx={{ borderRadius: "20" }} height="180px">
                <CardHeader>
                  <Avatar
                    icon={<GiMedicines />}
                    bg="blue.500"
                    size="sm"
                    mb={4}
                    marginLeft="auto"
                  />
                  <Heading size="sm">Inventory </Heading>
                </CardHeader>

                <CardBody mt={-6}>
                  <StatGroup>
                    <Stat>
                      <StatNumber>187/200</StatNumber>
                      <StatHelpText>
                        <StatArrow type="decrease" />3
                        <StatArrow type="increase" />4 
                        <div>
                          <HStack>
                            <Avatar
                              icon={<IoSync color="black" />}
                              bg = "white"
                              size="xsm"
                              mb={4}
                              marginLeft="left"
                            />
                            <Text mb={4}>10</Text>
                          </HStack> 
                        </div>
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
              </Card>
              <Card sx={{ borderRadius: "20" }} height="180px">
                <CardHeader>
                  <Avatar
                    icon={<IoNewspaperOutline/>}
                    bg="blue.500"
                    size="sm"
                    mb={4}
                    marginLeft="auto"
                  />
                  <Heading size="sm">Recent Discoveries </Heading>
                </CardHeader>
                <CardBody mt={-6}>
                  <StatGroup>
                    <Stat>
                      <StatNumber>4</StatNumber>
                      <StatHelpText>
                          <div>2 days ago, Dr. Lenart </div>
                          <div>Dolinor discovered... </div>
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
              </Card>
              <Card sx={{ borderRadius: "20" }} height="180px">
                <CardHeader>
                  <Avatar
                    icon={<IoMdNotificationsOutline />}
                    bg="blue.500"
                    size="sm"
                    mb={4}
                    marginLeft="auto"
                  />
                  <Heading size="sm">Notifications </Heading>
                </CardHeader>

                <CardBody mt={-6}>
                  <StatGroup>
                    <Stat>
                      <StatNumber>5</StatNumber>
                      <StatHelpText>
                          <div>Dr. Kostas Demiris requested to help</div>
                          <div>with Mr. Marwan Yassini's surgery.</div>
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
              </Card>
            </HStack>
          </Box>
          <Box mb={4}>
            <Heading size="md" mb={2}>
              Appointments Left For Today
            </Heading>
            <VStack spacing={4}>
              {appointmentRecords.map((record, index) => (
                <Card key={index} width="100%" p={4} sx={{ borderRadius: "20" }}>
                  <HStack>
                    <Tag>{appointmentTimes[index]}</Tag>
                    <Tag>{record} </Tag>
                    <Menu p={4}>
                      <MenuButton marginLeft="auto">...</MenuButton>
                      <MenuList>
                        <MenuItem> Change Appointment Timing </MenuItem>
                        <MenuItem> View Last Appointment Details </MenuItem>
                        <MenuItem> View Medical History </MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                </Card>
              ))}
            </VStack>
          </Box>
          <Box mb={4}>
            <Heading size="md" mb={2}>
              Surgeries Left For Today
            </Heading>
            <VStack spacing={4}>
              {surgeryRecords.map((record, index) => (
                <Card key={index} width="100%" p={4} sx={{ borderRadius: "20" }}>
                  <HStack>
                    <Tag>{surgeryTimes[index]}</Tag>
                    <Tag>{record} </Tag>
                    <Menu p={4}>
                      <MenuButton marginLeft="auto">...</MenuButton>
                      <MenuList>
                        <MenuItem> Change Surgery Timing </MenuItem>
                        <MenuItem> View Pre-Surgery Details </MenuItem>
                        <MenuItem> View Medical History </MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                </Card>
              ))}
            </VStack>
          </Box>
          <Box mb={4}>
            <Heading size="md" mb={2}>
              Regular Patients
            </Heading>
            <HStack>
            {regularPatients.map((record, index) => (
              <HStack>
                <Avatar
                  name={record}
                  size="sm"
                  getInitials={() => {
                    return regularPatientsInitials[index];
                  }}
                />
                <Tag>{record}</Tag>
              </HStack>
            ))}
            </HStack>
          </Box>
        </Box>  
      </>  
    )
}
export default Doc;