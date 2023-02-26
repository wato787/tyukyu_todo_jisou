import { atom } from "recoil";
import { todoli } from "../types/todoli";


export const todoTextState = atom<string>({
  key: "todoTextState",
  default: "",
});

// export const editTextState = atom<string>({
//   key: "editTextState",
//   default: "",
// });

export const todoListState = atom<todoli[]>({
  key: "todoListState",
  default: [],
});
