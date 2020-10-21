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
addDocument = (ERP, title, UploadedBy, FileID) => {    
    var ActualDate = this.concatenatedDate();
    db.collection("files").doc("F"+ActualDate).set({
        ERP: ERP,
        Title: title,
        Date: this.concatenatedDate(),
        UploadedBy: UploadedBy,
        FileID: FileID,
    }).then(() => {
        console.log("File Uploaded Successfully!")
    }).catch(() => {
        console.log("error")
        return ("error")
    })
}
}
export default new Add(); 