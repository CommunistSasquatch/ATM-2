/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Main
 */


"use strict";
import FileIO from "./FileIO.js";
export default class Transaction {
    constructor(){

    }
    static deposit (checking,savings) {
        Transaction.checking = checking;
        Transaction.savings = savings;
        new FileIO.pullInfo("./data/infoBox.csv", Transaction.setDepositInfo);
    }
    static setDepositInfo(finalData){
        Transaction.boxData = finalData;
        document.getElementById("infoBox").innerHTML = finalData[1][0];
        document.getElementById("checkingDeposit").style.visibility = "visible";
        document.getElementById("savingsDeposit").style.visibility = "visible";
        document.getElementById("depositValue").style.visibility = "visible";
        document.getElementById("deposit").addEventListener("click", function () {
            if (document.getElementById("savingsDeposit").checked) {
                Transaction.depositSavings = document.getElementById("depositValue").value;
                Transaction.savings = parseInt(Transaction.savings) + parseInt(Transaction.depositSavings);
                window.alert("Comrade! Remember this number, it is your new savings balance!    "+Transaction.savings);
            } else if (document.getElementById("checkingDeposit").checked) {
                Transaction.depositChecking = document.getElementById("depositValue").value;
                Transaction.checking = parseInt(Transaction.checking) + parseInt(Transaction.depositChecking);
                window.alert("Comrade! Remember this number, it is your new checking balance!    "+Transaction.checking);
            }
        });
    }
    static withdraw(checking,savings){
        Transaction.checking = checking;
        Transaction.savings = savings;
        new FileIO.pullInfo("./data/infoBox.csv", Transaction.setWithdrawInfo);
    }
    static setWithdrawInfo(finalData){
        Transaction.boxData = finalData;
        document.getElementById("infoBox").innerHTML = finalData[1][1];
        document.getElementById("checkingDeposit").style.visibility = "visible";
        document.getElementById("savingsDeposit").style.visibility = "visible";
        document.getElementById("depositValue").style.visibility = "visible";
        document.getElementById("withdraw").addEventListener("click", function () {
            if (document.getElementById("savingsDeposit").checked) {
                Transaction.depositSavings = document.getElementById("depositValue").value;
                Transaction.savings = parseInt(Transaction.savings) - parseInt(Transaction.depositSavings);
                window.alert("Comrade! Remember this number, it is your new savings balance!    "+Transaction.savings);
            } else if (document.getElementById("checkingDeposit").checked) {
                Transaction.depositChecking = document.getElementById("depositValue").value;
                Transaction.checking = parseInt(Transaction.checking) - parseInt(Transaction.depositChecking);
                window.alert("Comrade! Remember this number, it is your new checking balance!    "+Transaction.checking);
            }
        });
    }
}