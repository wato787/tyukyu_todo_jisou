import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../../recoil/Atom';

export const ListTodos = () => {
    const listTodo= useRecoilValue(todoListState);

console.log(listTodo)
  return (
<Flex>
    <ul>
        <li></li>
    </ul>
</Flex>
  )
}
