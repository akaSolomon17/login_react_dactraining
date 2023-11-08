import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
}

export default App;
