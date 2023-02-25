import { Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/Atom";
import { todoli } from "../../types/todoli";

export const ListTodos = () => {
  const [listTodo, setListTodo] = useRecoilState<todoli[]>(todoListState);

  // ステータス変更
  const onClickStatusChange = (id: string) => {
    const list = [...listTodo];
    const newListTodos = list.map((todo) =>
      id === todo.id
        ? {
            ...todo,
            status: todo.status === "未着手" ? "着手" : "未着手",
          }
        : todo
    );
    setListTodo(newListTodos);
  };

  // 削除
  const onClickDelete = (id: string) => {
    const list = [...listTodo];
    const newListTodos = list.filter((todo) => {
      return todo.id !== id;
    });
    setListTodo(newListTodos);
  };
  // 完了
  const onClickComplete = (id: string) => {
    const list = [...listTodo];
    const newListTodos = list.filter((todo) => {
      return todo.id !== id;
    });
    setListTodo(newListTodos);
  };

  // 編集
  const handleEdit = (id: string, value: string) => {
    const newTodos = listTodo.map((todo) => {
      if (todo.id === id) {
        todo.text = value;
      }
      return todo;
    });
    // todos ステートを更新
    setListTodo(newTodos);
  };

  return (
    <Flex justifyContent="center">
      <UnorderedList>
        {listTodo.map((todo) => (
          <ListItem key={todo.id} fontSize="20px">
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleEdit(todo.id, e.target.value)}
            />

            <Button
              onClick={() => onClickStatusChange(todo.id)}
              colorScheme="cyan"
              m={2}
            >
              {todo.status}
            </Button>
            <Button m={2} onClick={() => onClickDelete(todo.id)} isDisabled={todo.status === "着手"}>
              削除
            </Button>
            <Button m={2} onClick={() => onClickComplete(todo.id)} isDisabled={todo.status === "未着手"}>
              完了
            </Button>
            <Button m={2}>編集</Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};
