import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";

const initialState = {
  authedUser: null,
  users: {
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "../../images/leaf.jpg",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
  questions: {
    "6ni6ok3ym7mf1p33lnez": {
      id: "6ni6ok3ym7mf1p33lnez",
      author: "johndoe",
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: "become a superhero",
      },
      optionTwo: {
        votes: ["johndoe", "sarahedo"],
        text: "become a supervillian",
      },
    },
  },
};

export const store = createStore(reducer, initialState, middleware);
