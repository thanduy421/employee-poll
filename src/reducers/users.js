import {
  RECEIVE_USERS,
  ADD_USER_QUESTIONS,
  ADD_USER_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTIONS: {
      const { id, authedUser } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([id]),
        },
      };
    }
    case ADD_USER_ANSWER: {
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    }
    default:
      return state;
  }
}
