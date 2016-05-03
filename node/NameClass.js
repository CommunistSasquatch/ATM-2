/**
 * Created by Howard on 4/8/2016.
 */

"use strict";

const DATA_HANDLER = require('./DataHandler');

class NameClass {
     constructor(data) {
          this.data = data;
          /*console.log('\n\n' + this.data['firstName'] + ' ' + this.data['lastName'] + '\n\n');
          console.log(JSON.stringify(this.data) + '\n\n');*/
     }

     getLastName() {
          return this.data['lastName'];
     }

     getFirstName() {
          return this.data['firstName'];
     }

     writeData() {
          const COLUMNS = 2;
          let dataArray = [];
          dataArray[0] = this.data['lastName'];
          dataArray[1] = this.data['firstName'];
          let dataWriter = new DATA_HANDLER(COLUMNS);
          dataWriter.writeDataFile_SD(__dirname + '/../data/' + 'people.csv', dataArray, 3);
     }
}

module.exports = NameClass;