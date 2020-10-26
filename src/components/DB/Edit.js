import React from 'react';
import db from '../../firestore';

class Editar extends React.Component {
    concatenatedDate() {
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        var monthWithOffset = dateNow.getUTCMonth() + 1;
        var day = dateNow.getUTCDate().toString();
        // Setting current Month number from current Date object
        var month = monthWithOffset.toString();
        if (monthWithOffset.toString().length < 2) {
            month = "0" + month
        }
        if (day.length < 2) {
            day = "0" + day
        }
        var hours = dateNow.getHours();
        var minutes = dateNow.getMinutes();
        var seconds = dateNow.getSeconds();
        return year + month + day + hours + minutes + seconds;
    }
  //Questions
  editAnswer = (QuestionID, answeredBy, answer) => {
    db.collection("questions").doc(QuestionID).update({
        answeredBy: answeredBy,
        Answer: answer,
        hasAnswer: true,
        answeredDate: this.concatenatedDate(),
    }).then(() => {
      console.log("Updated")
    }).catch(() => {
      console.log("error")
    })
  }
}
export default new Editar();