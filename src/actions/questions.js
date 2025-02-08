import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addUsersQuestions, addUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTION = "VOTE_QUESTION";

function voteQuestion({ authedUser, qid, answer }) {
  return {
    type: VOTE_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleVoteQuestion(answerInfo) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer(answerInfo)
      .then(() => {
        dispatch(voteQuestion(answerInfo));
        dispatch(addUserAnswer(answerInfo));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => console.log("Error when voting:", e));
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUsersQuestions(question));
        dispatch(hideLoading());
      })
      .catch((e) => console.log("Error when adding new question:", e));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
