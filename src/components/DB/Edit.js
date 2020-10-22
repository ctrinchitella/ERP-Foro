import React from 'react';
import db from '../../firestore';

class Editar extends React.Component {
  //Questions
  editAnswer = (QuestionID, answeredBy, answer) => {
    db.collection("questions").doc(QuestionID).update({
        answeredBy: answeredBy,
        Answer: answer,
        hasAnswer: true,
    }).then(() => {
      console.log("Updated")
    }).catch(() => {
      console.log("error")
    })
  }
}
export default new Editar();