/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 TestUser
 */


"use strict";
import FileIO from "./FileIO.js";
export default class TestUser {
    constructor(name,pin,callback) {
        TestUser.userName = name;
        TestUser.userPin = pin;
        new FileIO.pullInfo("./data/users.csv", TestUser.testData);
        callback(TestUser.correctUser, TestUser.userName);
    }

    static testData(finalData){
        const LENGTH = finalData.length;
        for (let i = 0; i < LENGTH; i++){
            if (TestUser.userName == finalData [i][0] && TestUser.userPin == finalData[i][1]){
                TestUser.checking = finalData[i][2];
                TestUser.savings  = finalData[i][3];
                TestUser.correctUser = true;

            }
        }
    }

}