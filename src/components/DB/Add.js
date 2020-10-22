import React from 'react';
import db from '../../firestore';

class Add extends React.Component {
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
addDocument = (ERP, title, UploadedBy, FileID, filename) => {    
    var ActualDate = this.concatenatedDate();
    db.collection("files").doc("F"+ActualDate).set({
        ERP: ERP,
        Title: title,
        Date: this.concatenatedDate(),
        UploadedBy: UploadedBy,
        FileID: FileID,
        FileName: filename,
    }).then(() => {
        console.log("File Uploaded Successfully!")
    }).catch(() => {
        console.log("error")
        return ("error")
    })
}
addIssue = (ERP, title, description, FileID, issueName) => {    
    var ActualDate = this.concatenatedDate();
    db.collection("issues").doc("I"+ActualDate).set({
        ERP: ERP,
        Title: title,
        Date: this.concatenatedDate(),
        Description: description,
        FileID: FileID,
        FileName: issueName,
    }).then(() => {
        console.log("File Uploaded Successfully!")
    }).catch(() => {
        console.log("error")
        return ("error")
    })
}
addQA = (ERP, question,questionedBy, hasAnswer, answer, answeredBy) => {    
    var ActualDate = this.concatenatedDate();
    db.collection("questions").doc("Q"+ActualDate).set({
        ERP: ERP,
        Question: question,
        HasAnswer: hasAnswer,
        Answer: answer,
        QuestionedBy: questionedBy,
        Date: this.concatenatedDate(),
        answeredBy:answeredBy,
    }).then(() => {
        console.log("File Uploaded Successfully!")
    }).catch(() => {
        console.log("error")
        return ("error")
    })
}
}
export default new Add(); 