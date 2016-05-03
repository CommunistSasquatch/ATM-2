/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 input info
 */

"use strict";

export default class InputInfo {
    constructor() {
        InputInfo.displayFields();
        this.getFields();
    }

    static displayFields () {
          document.getElementById('name').style.visibility = 'visible';
          document.getElementById('pin').style.visibility = 'visible';
      }
    
    getFields (callback) {
        document.getElementById("button").addEventListener("click", function () {
            let name = document.getElementById('name').value;
            let pin = document.getElementById('pin').value;
        });
        callback (name, pin);
    }
}