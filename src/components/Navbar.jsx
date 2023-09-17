import { Box, Flex, useDisclosure, useColorModeValue, Stack, useColorMode, HStack, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Links = ["home", "about", "projects"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={`#${children}`}>
      {children}
    </Box>
  );
};

export default function Navbar(props) {
  const { children } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w={"100%"} style={{ fontFamily: "Roboto Mono, monoscope" }}>
        <Flex alignItems={"center"} justifyContent={"space-between"} h={"10vh"}>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
          <a href="/">
            <Text fontSize={"30px"} fontWeight={"bold"} style={{ cursor: "pointer" }}>
              rzky()
            </Text>
          </a>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>
              ))}
              <IconButton size={"md"} icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} aria-label={"Toggle Dark Mode"} onClick={toggleColorMode} display={{ sm: "none", md: "flex" }} ml={"10px"} />
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.toLowerCase()}>{link}</NavLink>
              ))}
              <IconButton size={"md"} icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} aria-label={"Toggle Dark Mode"} onClick={toggleColorMode} />
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>{children}</Box>
    </>
  );
}
