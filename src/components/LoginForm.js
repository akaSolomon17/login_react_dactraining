import {
  Button,
  Input,
  CardBody,
  Stack,
  FormLabel,
  Center,
  Flex,
  Card,
  FormControl,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignContent="center"
      justifyContent="center"
      bg="#dbdbdb"
    >
      <Center>
        <Card
          direction="column"
          maxH="fit-content"
          h="480px"
          w="460px"
          borderWidth="1px"
          boxShadow="lg"
          bg="#f2f2f2"
          borderRadius="lg"
          borderColor="none"
        >
          <CardBody>
            <form>
              <Stack spacing="4">
                <FormControl>
                  <VStack as="header" spacing="6" mt="8">
                    <Heading
                      as="h1"
                      fontWeight="700"
                      fontSize="4xl"
                      letterSpacing="-0.5px"
                      mb="8"
                    >
                      WELCOME
                    </Heading>
                  </VStack>
                  <Input
                    type="text"
                    bg="white"
                    borderColor="#d8dee4"
                    size="lg"
                    borderRadius="6px"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl>
                  <HStack justify="space-between">
                    <Button
                      as="a"
                      href="#"
                      variant="link"
                      size="xs"
                      color="#0969da"
                      fontWeight="500"
                      mb={1}
                    >
                      Forgot password?
                    </Button>
                  </HStack>
                  <Input
                    type="password"
                    bg="white"
                    borderColor="#d8dee4"
                    size="lg"
                    borderRadius="6px"
                    placeholder="Password"
                  />
                </FormControl>

                <Button
                  bg="#468FAF"
                  color="white"
                  size="lg"
                  _hover={{ bg: "#568FAF" }}
                  _active={{ bg: "#468FAF" }}
                >
                  Login
                </Button>
              </Stack>
            </form>
            <Center display="flex" justifyContent="space-between">
              <Button colorScheme="facebook" size="lg" mt={4} w="200px">
                Facebook
              </Button>
              <Button colorScheme="red" size="lg" mt={4} w="200px">
                Google
              </Button>
            </Center>
          </CardBody>
        </Card>
      </Center>
    </Flex>
  );
};

export default LoginForm;
