// Import necessary components from Chakra UI
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  Textarea,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Card,
  Image,
  CardBody,
  CardFooter,
  CardHeader,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import TopBanner from "../components/TopBanner";
import { WarningIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function PatientSurvey() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [hasFever, setHasFever] = useState(false);
  const [hasCough, setHasCough] = useState(false);
  const [hasFAST, setHasFAST] = useState(false);
  const [hasVomited, setHasVomited] = useState(false);
  const [hasSwelling, setHasSwelling] = useState(false);
  const [hasDischarge, setHasDischarge] = useState(false);
  const [hasBowelMovement, setHasBowelMovement] = useState(false);
  const [hasBlood, setHasBlood] = useState(false);
  const [tookPills, setTookPills] = useState(false);
  const [painLevel, setPainLevel] = useState("1");
  const [comments, setComments] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, age, condition, hasFever, hasCough, painLevel });

    toast({
      title: "Daily Form submitted",
      description: "Your responses have been recorded.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <TopBanner />
      <HStack justifyContent={"space-between"}>
        <Container maxW="8xl">
          <Box p={10}>
            <Heading mb={4}> FHIRecovery Questionnaire </Heading>
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                {/* Existing form fields... */}
                <FormControl id="hasFAST">
                  <FormLabel>Do you have any of the following symptoms - sudden confusion, trouble speaking, lack of coordination on one side of the body, sudden loss of balance, dizziness, sudden severe headache with unknown cause? If you do, please call 999 immediately.</FormLabel>
                  <RadioGroup onChange={setHasFAST} value={hasFAST}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="hasVomited">
                  <FormLabel>Have you vomited in the past 24 hours?</FormLabel>
                  <RadioGroup onChange={setHasVomited} value={hasVomited}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                
                <FormControl id="hasSwelling">
                  <FormLabel>Do you have increased pain or swelling in the stomach?</FormLabel>
                  <RadioGroup onChange={setHasSwelling} value={hasSwelling}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="hasFever">
                  <FormLabel>Do you have a fever?</FormLabel>
                  <RadioGroup onChange={setHasFever} value={hasFever}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="hasDischarge">
                  <FormLabel>Do you have any form of discharge from the wound?</FormLabel>
                  <RadioGroup onChange={setHasDischarge} value={hasDischarge}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="hasBowelMovement">
                  <FormLabel>Have you had a bowel movement in the last 48 hours?</FormLabel>
                  <RadioGroup onChange={setHasBowelMovement} value={hasBowelMovement}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="hasBlood">
                  <FormLabel>Do you have any blood in your excrement?</FormLabel>
                  <RadioGroup onChange={setHasBlood} value={hasBlood}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="tookPills">
                  <FormLabel>Have you taken your Warfarin medication today sometime between 9 and 11 am?</FormLabel>
                  <RadioGroup onChange={setTookPills} value={tookPills}>
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No, I took the medication 2-4 hours too early.</Radio>
                      <Radio value="no">No, I took the medication 2-4 hours too late.</Radio>
                      <Radio value="no">No, I took the medication more than 4 hours too early or more than 4 hours too late.</Radio>
                      <Radio value="no">No, I didn't take the medication today.</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl id="painLevel">
                  <FormLabel>
                    On a scale of 1 to 5, how would you rate your pain level?
                  </FormLabel>
                  <RadioGroup value={painLevel} onChange={setPainLevel}>
                    <Stack direction="row">
                      <Radio value="1">1 (no pain)</Radio>
                      <Radio value="2">2</Radio>
                      <Radio value="3">3</Radio>
                      <Radio value="4">4</Radio>
                      <Radio value="5">5 (very painful)</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <FormControl id="comments">
                  <FormLabel>Any other issues you are experiencing?</FormLabel>
                  <Textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Write your comments here"
                    width="50%"
                  />
                </FormControl>
                <Button colorScheme="blue" type="submit" marginRight="auto">
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </Container>
        <Container p={4} maxW="lg" mr={8}>
          <Card>
            <CardBody>
              <Image
                src="https://www.nationalhealthexecutive.com/sites/nhe/files/styles/banner/public/2022-06/iStock-1362936837.jpg?itok=z4MpEQbo"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  <HStack>
                    {" "}
                    <Avatar icon={<WarningIcon />} bg="blue.500" size="sm" />
                    <Text>In need of immediate care?</Text>
                  </HStack>
                </Heading>
                <Text>
                  In the event of an emergency, don't hesitate to reach out to
                  us. Chat with our dedicated professionals or call our
                  emergency hotline for immediate assistance. Your well-being is
                  paramount to us.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  <HStack>
                    <ChatIcon />
                    <Text>Chat now</Text>
                  </HStack>
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  <HStack>
                    <PhoneIcon />
                    <Text>Call</Text>
                  </HStack>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Container>
      </HStack>
    </>
  );
}

export default PatientSurvey;
