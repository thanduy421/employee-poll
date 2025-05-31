let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "../../images/lion.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    isActive: false,
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "../../images/monkey.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    isActive: false,
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "../../images/boar.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    isActive: true,
  },
  thoDeThuong: {
    id: "thoDeThuong",
    name: "Thỏ Dễ Thương",
    avatarURL: "../../images/rabbit.png",
    answers: {
    },
    questions: [],
    isActive: true,
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
      "id": "8xf0y6ziyjabvozdd253nd",
      "author": "sarahedo",
      "timestamp": 1467166872634,
      "optionOne": {
          "votes": [
              "sarahedo"
          ],
          "text": "have horrible short term memory"
      },
      "optionTwo": {
          "votes": [],
          "text": "have horrible long term memory"
      },
      "isActive": false
  },
  "6ni6ok3ym7mf1p33lnez": {
      "id": "6ni6ok3ym7mf1p33lnez",
      "author": "johndoe",
      "timestamp": 1468479767190,
      "optionOne": {
          "votes": [],
          "text": "become a superhero"
      },
      "optionTwo": {
          "votes": [
              "johndoe",
              "sarahedo"
          ],
          "text": "become a supervillian"
      },
      "isActive": false
  },
  "am8ehyc8byjqgar0jgpub9": {
      "id": "am8ehyc8byjqgar0jgpub9",
      "author": "sarahedo",
      "timestamp": 1488579767190,
      "optionOne": {
          "votes": [],
          "text": "be telekinetic"
      },
      "optionTwo": {
          "votes": [
              "sarahedo"
          ],
          "text": "be telepathic"
      },
      "isActive": false
  },
  "loxhs1bqm25b708cmbf3g": {
      "id": "loxhs1bqm25b708cmbf3g",
      "author": "tylermcginnis",
      "timestamp": 1482579767190,
      "optionOne": {
          "votes": [],
          "text": "be a front-end developer"
      },
      "optionTwo": {
          "votes": [
              "sarahedo"
          ],
          "text": "be a back-end developer"
      },
      "isActive": false
  },
  "vthrdm985a262al8qx3do": {
      "id": "vthrdm985a262al8qx3do",
      "author": "tylermcginnis",
      "timestamp": 1489579767190,
      "optionOne": {
          "votes": [
              "tylermcginnis"
          ],
          "text": "find $50 yourself"
      },
      "optionTwo": {
          "votes": [
              "johndoe"
          ],
          "text": "have your best friend find $500"
      },
      "isActive": false
  },
  "xj352vofupe1dqz9emx13r": {
      "id": "xj352vofupe1dqz9emx13r",
      "author": "johndoe",
      "timestamp": 1493579767190,
      "optionOne": {
          "votes": [
              "johndoe"
          ],
          "text": "write JavaScript"
      },
      "optionTwo": {
          "votes": [
              "tylermcginnis"
          ],
          "text": "write Swift"
      },
      "isActive": false
  },
  "rj2k3q1ki6pcorcjuaffn7": {
      "id": "rj2k3q1ki6pcorcjuaffn7",
      "timestamp": 1748698554963,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "du lịch Đà Lạt"
      },
      "optionTwo": {
          "votes": [
              "thoDeThuong",
              "johndoe"
          ],
          "text": "du lịch Nha Trang"
      },
      "isActive": true
  },
  "ti4x0hj0plgv52wtz26xoc": {
      "id": "ti4x0hj0plgv52wtz26xoc",
      "timestamp": 1748699351243,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "màu đỏ"
      },
      "optionTwo": {
          "votes": [],
          "text": "màu xanh da trời"
      },
      "isActive": true
  },
  "33852sezvvzn1fd96w5z9q": {
      "id": "33852sezvvzn1fd96w5z9q",
      "timestamp": 1748699418466,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "cuối tuần ở nhà thư giãn"
      },
      "optionTwo": {
          "votes": [],
          "text": "cuối tuần đi chơi xả hơi"
      },
      "isActive": true
  },
  "1bkmnq2g8ljrdqahgsqe3n": {
      "id": "1bkmnq2g8ljrdqahgsqe3n",
      "timestamp": 1748699528795,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "thích thức khuya"
      },
      "optionTwo": {
          "votes": [],
          "text": "thích dậy sớm"
      },
      "isActive": true
  },
  "hpvqr8o68diakqrcyuxifs": {
      "id": "hpvqr8o68diakqrcyuxifs",
      "timestamp": 1748699550136,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "thích nuôi chó"
      },
      "optionTwo": {
          "votes": [],
          "text": "thích nuôi mèo"
      },
      "isActive": true
  },
  "l0afslu84qdirahr2y4n": {
      "id": "l0afslu84qdirahr2y4n",
      "timestamp": 1748699579462,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "chơi thể thao"
      },
      "optionTwo": {
          "votes": [],
          "text": "đọc sách, nghe nhạc"
      },
      "isActive": true
  },
  "f7rp40h3q8rnr48astapf": {
      "id": "f7rp40h3q8rnr48astapf",
      "timestamp": 1748699620144,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "Sống và làm việc ở nước ngoài"
      },
      "optionTwo": {
          "votes": [],
          "text": "Sống và làm việc ở Việt Nam"
      },
      "isActive": true
  },
  "e99frub7i1oznkk19drxv": {
      "id": "e99frub7i1oznkk19drxv",
      "timestamp": 1748699679954,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "thích chồng giữ tiền"
      },
      "optionTwo": {
          "votes": [],
          "text": "thích vợ giữ tiền"
      },
      "isActive": true
  },
  "5bfcvlpt1y6fuj6o2vkv56": {
      "id": "5bfcvlpt1y6fuj6o2vkv56",
      "timestamp": 1748700225873,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "thích được tặng quà"
      },
      "optionTwo": {
          "votes": [],
          "text": "thích được dẫn đi chơi"
      },
      "isActive": true
  },
  "m7g5jgwm8nelpz6qwz5p": {
      "id": "m7g5jgwm8nelpz6qwz5p",
      "timestamp": 1748700305254,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "quay lại quá khứ"
      },
      "optionTwo": {
          "votes": [],
          "text": "nhìn trước tương lai"
      },
      "isActive": true
  },
  "3haags6x03o5u35nwzffyg": {
      "id": "3haags6x03o5u35nwzffyg",
      "timestamp": 1748700985336,
      "author": "johndoe",
      "optionOne": {
          "votes": [],
          "text": "ở cùng cha mẹ"
      },
      "optionTwo": {
          "votes": [],
          "text": "ở riêng"
      },
      "isActive": true
  }
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
    isActive: true,
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);
    if (!question.optionOneText || !question.optionTwoText || !authedUser) {
      rej("Properties of the provided question object were not enough.");
    }

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    if (!authedUser || !qid || !answer) {
      rej("Properties of the provided answer object were not enough.");
    }

    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res(true);
    }, 500);
  });
}
