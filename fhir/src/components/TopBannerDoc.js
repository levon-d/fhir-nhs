import React from "react";
import {
  Avatar,
  Flex,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { WarningIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";

const TopBannerDoc = () => {
  return (
    <Flex
      bg="blue.500" // Background color, you can adjust this
      color="white" // Text color, you can adjust this
      alignItems="center"
      height="60px" // Adjust the height as needed
      px={4}
    >
      <Box>
        <Image
          src="/nhs.svg"
          alt="Company Logo"
          boxSize="40px"
          marginRight="auto"
        />{" "}
        {/* Replace '/your-logo.png' with the path to your logo */}
      </Box>
      <Menu p={4}>
        <MenuButton marginLeft="auto">
          <Avatar
            name="Levon Davtyan"
            size="sm"
            colorScheme="pink"
            getInitials={() => {
              return "LD";
            }}
          />
        </MenuButton>
        <MenuList bg="gray.400">
          <MenuItem bg="gray.400"> View Profile </MenuItem>
          <MenuItem bg="gray.400"> Home </MenuItem>
          <MenuItem bg="gray.400"> View Appointments </MenuItem>
          <MenuItem bg="gray.400"> View Surgeries </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TopBannerDoc;