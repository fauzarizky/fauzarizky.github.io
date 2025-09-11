/* eslint-disable react/prop-types */
import { Box, Flex, Stack, HStack, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useColorMode } from "./ui/color-mode";
import { useState } from "react";

const Links = ["home", "about", "projects"];

const NavLink = (props) => {
  const { children, colorMode } = props;
  return (
    <Box
      as="a"
      px={2}
      py={2}
      w={"100%"}
      display={"block"}
      _hover={{
        textDecoration: "none",
        bg: colorMode === "light" ? "#573B78" : "gray.700",
      }}
      href={`#${children}`}
      data-test={`nav-link-${children.toLowerCase()}`}>
      {children}
    </Box>
  );
};

export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Box data-test="navbar" overflowX={"hidden"}>
      <Box bg={colorMode === "light" ? "#272343" : "gray.900"} px={4} w={"100%"} style={{ fontFamily: "Roboto Mono, monoscope" }}>
        <Flex alignItems={"center"} justifyContent={"space-between"} h={"10vh"}>
          <IconButton data-test="menu-toggle" size={"md"} aria-label={"Open Menu"} display={{ md: "none" }} onClick={toggleOpen} bgColor={"transparent"}>
            {isOpen ? <CloseIcon onClick={toggleOpen} color={"#FFFFFF"} /> : <HamburgerIcon onClick={toggleOpen} color={"#FFFFFF"} />}
          </IconButton>
          <a href="/" data-test="logo">
            <Text fontSize={"30px"} fontWeight={"bold"} style={{ cursor: "pointer" }} color={"#ffd803"}>
              rzky()
            </Text>
          </a>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <Text key={link} color={"#ffd803"} data-test={`nav-link-text-${link.toLowerCase()}`}>
                  <NavLink colorMode={colorMode}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>
                </Text>
              ))}
              <IconButton size={"md"} aria-label={"Toggle Dark Mode"} onClick={toggleColorMode} display={{ sm: "none", md: "flex" }} ml={"10px"} bgColor={"transparent"} data-test="toggle-dark-mode">
                {colorMode === "dark" ? <IoIosSunny color={"#FFFFFF"} /> : <IoIosMoon />}
              </IconButton>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} data-test="mobile-menu">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Text key={link.toLowerCase()} color={"#ffd803"} data-test={`mobile-nav-link-text-${link.toLowerCase()}`}>
                  <NavLink colorMode={colorMode}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>
                </Text>
              ))}
              <IconButton size={"md"} aria-label={"Toggle Dark Mode"} onClick={toggleColorMode} bgColor={"#573B78"} borderRadius={"none"} data-test="mobile-toggle-dark-mode">
                {colorMode === "dark" ? <IoIosSunny color={"#FFFFFF"} /> : <IoIosMoon />}
              </IconButton>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>{children}</Box>
    </Box>
  );
}
