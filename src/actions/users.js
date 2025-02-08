export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTIONS = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function addUserAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function addUsersQuestions(question) {
  return {
    type: ADD_USER_QUESTIONS,
    authedUser: question.author,
    id: question.id,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
