import { Button, Input, Text, Box, Center, Flex } from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
      bg={"blackAlpha.400"}
    >
      <Center>
        <Box
          maxW="fit-content"
          maxH="fit-content"
          borderWidth="1px"
          boxShadow="md"
          bg="white"
        >
          <Center>
            <Text fontSize="6xl">WELCOME</Text>
          </Center>
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Center>
            <Button colorScheme="twitter">Login</Button>
          </Center>
          <Center display={"flex"}>
            <Button colorScheme="facebook">Facebook</Button>
            <Button colorScheme="red">Google</Button>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};

export default LoginForm;
