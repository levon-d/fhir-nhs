// Import necessary components from Chakra UI
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
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
} from "@chakra-ui/react";
import { useState } from "react";
import TopBanner from "../components/TopBanner";

function PatientSurvey() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [hasFever, setHasFever] = useState(false);
  const [hasCough, setHasCough] = useState(false);
  const [painLevel, setPainLevel] = useState("1");
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, age, condition, hasFever, hasCough, painLevel });
  };

  return (
    <>
      <TopBanner />
      <Box p={10}>
        <Heading mb={4}> Appendendectomy Questionnaire </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            {/* Existing form fields... */}
            <FormControl id="hasFever">
              <FormLabel>Do you have a fever?</FormLabel>
              <Checkbox
                isChecked={hasFever}
                onChange={(e) => setHasFever(e.target.checked)}
              >
                Yes
              </Checkbox>
            </FormControl>
            <FormControl id="hasCough">
              <FormLabel>Do you have a cough?</FormLabel>
              <Checkbox
                isChecked={hasCough}
                onChange={(e) => setHasCough(e.target.checked)}
              >
                Yes
              </Checkbox>
              <Checkbox onChange={(e) => setHasCough(e.target.checked)} ml={4}>
                No
              </Checkbox>
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
    </>
  );
}

export default PatientSurvey;
