/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Main
 */

"use strict";
import FileIO from "./FileIO.js";
import TestUser from "./TestUser.js";
import Transaction from "./Transaction.js";

class main {
    constructor() {
        console.log('hello world!!');
        this.reset();
        this.clickHandler();
        this.sideButtons();
    }

    reset() {
        document.getElementById("name").style.visibility = "hidden";
        document.getElementById("pin").style.visibility = "hidden";
        document.getElementById("button").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "hidden";
        document.getElementById("checkingDeposit").style.visibility = "hidden";
        document.getElementById("savingsDeposit").style.visibility = "hidden";
        document.getElementById("depositValue").style.visibility = "hidden";

    }

    clickHandler() {
        document.getElementById("button").addEventListener("click", function () {
            FileIO.pullInfo('/public/data/infoBox.csv', function (finalData) {
                main.boxData = finalData;
                main.enterInfo();
            });
        });
    }

    static enterInfo() {
        let name;
        let pin;
        document.getElementById("infoBox").innerHTML = main.boxData[0][1];
        console.log("memers");
        document.getElementById("name").style.visibility = "visible";
        document.getElementById("pin").style.visibility = "visible";
        document.getElementById("button").addEventListener("click", function () {
            document.getElementById("button").style.visibility = "hidden";
            document.getElementById("button2").style.visibility = "visible";
            pin = document.getElementById("pin").value;
            name = document.getElementById("name").value;
            new TestUser(name, pin, main.showAccountData);
        });
    }

    static showAccountData(correctUser, userName) {
        document.getElementById("button2").addEventListener("click", function () {
            document.getElementById("button2").style.visibility = "hidden";
            document.getElementById("pin").style.visibility = "hidden";
            document.getElementById("infoBox").innerHTML = main.boxData[0][2] + userName + "<br><br>" + "Your checking balance is:" + TestUser.checking + "<br><br>" + "Your savings balance is:" + TestUser.savings;
            document.getElementById("name").style.visibility = "hidden";
        });
    }

    sideButtons() {
        document.getElementById("deposit").addEventListener("click", function () {
            let transaction = new Transaction();
            transaction.deposit(TestUser.checking, TestUser.savings);
        });
        document.getElementById("cancel").addEventListener("click", function () {
            window.alert("Jokes on you comrade! Communism can only pay for so much, what would you rather have? food or a cancel button? DO YOUR PART!");
            ;
        });
        document.getElementById("withdraw").addEventListener("click", function () {
            let transaction = new Transaction();
            transaction.withdraw(TestUser.checking, TestUser.savings);
        });
        document.getElementById("transfer").addEventListener("click", function () {
            let transaction = new Transaction();
            transaction.transfer(TestUser.checking, TestUser.savings);
        });
    }
}


window.onload = function () {
    new main();
};






