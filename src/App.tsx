import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { InputTodos } from "./components/Input/InputTodos";
import { ListTodos } from "./components/list/ListTodos";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <InputTodos />
        <ListTodos />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
