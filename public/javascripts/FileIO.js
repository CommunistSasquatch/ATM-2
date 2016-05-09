/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 File I/O
 */

"use strict";


export default class FileIO {

    constructor() {

    }

    static pullInfo (filePath, callback){
        let request = new XMLHttpRequest();
        request.open("GET", filePath, true);
        request.send();
        request.onload = function() {
            const COLUMNS = 10;
            let data, middleData, finalData = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/,/);
                    finalData[i] = []; //makes it an MD array
                    for (let j = 0; j < middleData.length; j++) {
                        finalData[i][j] = middleData[j];
                    }
                }
                console.log(finalData[0][1]);
                callback(finalData);
            }
        };
    }
}