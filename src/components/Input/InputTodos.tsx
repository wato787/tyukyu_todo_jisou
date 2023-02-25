import React, { FC } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { todoListState, todoTextState } from "../../recoil/Atom";
import { UUID } from "uuidjs";
import { todoli } from "../../types/todoli";

export const InputTodos: FC = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextState);
  const [listTodo, setListTodo] = useRecoilState<todoli[]>(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const onClickAdd = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (todoText === "") return;
    const todo = {
      id: UUID.generate(),
      text: todoText,
      status: "未着手",
    };
    const newListTodos = [...listTodo, todo];
    setListTodo(newListTodos);
    setTodoText("");
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Input
        placeholder="Todoを追加"
        size="md"
        pl={4}
        m={16}
        variant="outline"
        w={400}
        value={todoText}
        onChange={handleChange}
      />

      <Button colorScheme="teal" size="md" onClick={onClickAdd}>
        追加
      </Button>
    </Flex>
  );
};
