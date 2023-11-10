import {
  Button,
  Input,
  CardBody,
  Stack,
  Center,
  Flex,
  Card,
  FormControl,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

// Input chỉ string
// Email (Local-part@Domain): valid = _ or . or - nhưng không ở đầu hoặc cuối, Local-part: 4-64 ký tự, đứng trước @, valid từ a-z,A-Z,chữ số 0-9 nhưng không được ở đầu
// Password 1 ký tự in hoa, > 12 ký tự, 1 ký tự đặc biệt, 1 ký tự số

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validateSchema: Yup.object({
      email: Yup.string("Invalid email!")
        .matches(
          "A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@ (?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        )
        .required("Please fill in this field!"),

      password: Yup.string("Invalid email!")
        .matches("^(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^wds:])([^s]){8,16}$")
        .required("Please fill in this field!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
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
                    defaultValue={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p color="red">{formik.errors.email}</p>
                  )}
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
                    defaultValue={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <p color="red">{formik.errors.password}</p>
                  )}
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
              <Center display="flex" justifyContent="space-between">
                <Button colorScheme="facebook" size="lg" mt={4} w="200px">
                  Facebook
                </Button>
                <Button colorScheme="red" size="lg" mt={4} w="200px">
                  Google
                </Button>
              </Center>
            </form>
          </CardBody>
        </Card>
      </Center>
    </Flex>
  );
};

export default LoginForm;
