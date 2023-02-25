import { Button, Flex, list, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
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

  // 編集フォームの表示非表示切り替え関数
  const toggleEditForm = (id: string) => {
    const list = [...listTodo];
    const newListTodos = list.map((todo) =>
      id === todo.id
        ? {
          ...todo,
          isEdit: !todo.isEdit
        }
        : todo
    );
    setListTodo(newListTodos);
  }

  return (
    <Flex justifyContent="center">
      <UnorderedList>
        {listTodo.map((todo) => (
          <>
          {/* 3. todo.isEditがtrueならばtodoの内容ではなく、編集フォームを表示させ、作成したhandleEditで編集機能を持たせればよいと思います！ */}
          {todo.isEdit ? (
            <ListItem key={todo.id} fontSize="20px">
              編集フォームの作成
                <Button onClick={() => toggleEditForm(todo.id)}>戻る</Button>
            </ListItem>
          ) : (
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
              {/* 2．編集ボタンが押されたときにtodo.isEditを切り替えてtrueにする */}
                  <Button m={2} onClick={() => toggleEditForm(todo.id)}>編集</Button>
            </ListItem>
          )}
          </>
        ))}
      </UnorderedList>
    </Flex>
  );
};
