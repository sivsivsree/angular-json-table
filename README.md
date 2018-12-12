# Angular JSON table module

Angular JSON Table is an Angular 4+ module to populate tables from the JSON data provided

[![npm version](https://badge.fury.io/js/angular-json-table.svg)](https://badge.fury.io/js/angular-json-table)

# Features!
  - Pagination
  - Select and Delete rows
  - Edit Rows
  - Table header customizations
  - Display only needed data than the whole JSON




### Installation

Requires requires *Angular2+*.

Install the module using npm.

```sh
$ cd my-angular2-project # Go to the project you are working on.
# Install the module using the following.
$ npm i angular-json-table --save
```

In the *app.module.ts*
Add ```JSONTableModule``` to the ```imports```.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { JSONTableModule } from 'angular-json-table';  // import the Module.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JSONTableModule // Add the JSONTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Usage


In your ```custom.component.html``` add ```data-table``` to render the table from the JSON

```html
<json-table 
      [dataSource]="dataFromServer"
      [headers]="customHeaders"
      [update]="true/false"
      [delete]="true/false"
      (selectRow)="selectedRow($event)"
      (deleteRow)="deleteByIdS($event)"
      (updateRow)="updateChanges($event)"></json-table>
```

ie, in your ```custom.component.ts```  should be like:

```ts
// [headers] are used to define the table head and show what are the feilds required.
customHeaders: any = {
    thead: ['CUSTOM NAME 1', 'SOME COOL NAME', 'ANOTHER NAME'], // the Column Name in table head.
    displayed: ['someFeild1', 'someFeild2', 'someFeild3'] // the data it should populate in table.
  };

// JSON data can be from any source just need an `id` in order to update and delete. 
dataFromServer: any =
    [{
      'id': 20,
      'someFeild1': 'asdfasdf',
      'someFeild2': 'asdf',
      'someFeild3': 'asdfasdfasfasdfa',
      },
      ....
     {
      'id': 81,
      'someFeild1': 'aasdfsdf',
      'someFeild2': 'asasdfdf',
      'someFeild3': 'dfasfasdfa',
      }, 
    ];
    
    deleteByIdS(row){
        console.log(row); // Returns the row which is selected by clicking.
     }
     
    deleteByIdS(ids){
        console.log(id); // this function gives the ID of deleted rows.. as an array
    }
    
    updateChanges(row){
        console.log(row); // This return the row which is updated with the id.
    }
```

Consider if you are having a json as the following:<br>
**Note:** its Importent to have an unique feild named  ```id``` in the json data to use the *Delete* and *Update* features.

```js
    [{
      'id': 20,
      'someFeild1': 'asdfasdf',
      'someFeild2': 'asdf',
      'someFeild3': 'asdfasdfasfasdfa',
      },
      ....
     {
      'id': 81,
      'someFeild1': 'aasdfsdf',
      'someFeild2': 'asasdfdf',
      'someFeild3': 'dfasfasdfa',
      }, 
    ]
```

### Properties
##### Inputs
```[dataSource] ``` : The JSON data input <br>
```[headers]``` : The Headers need to render the Table <br>
```[update]```: Booelan ```true``` to Enable data modification / ```false``` to disable.<br>
```[update]```: Booelan ```true``` to Enable row deletion / ```false``` to disable.<br>

##### Output

```(selectRow)``` : Callback when a row is selected , returns the row object with ```id```<br>
```(deleteRow)``` : Callback to delete the Row, with the array of `[ids]`<br>
```(updateRow)``` : Callback to get the Updated, with the row object with ```id```<br>


#### Run
Run the angular to test out the table implementation:
```sh
$ ng serve
```



License
----

MIT

[![N|lrucache-nodejs](https://img.shields.io/badge/with%20🖤-%20Siv%20S-red.svg?longCache=true&style=popout-square)](https://sivsivsree.github.io)
