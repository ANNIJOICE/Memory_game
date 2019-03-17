import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mygame';
  index=[];
  newarray=[];
  variable1=['',''];variable2;
  count=0;i=0;j=0;
  copyvalue;
  data={
    0:'A',
    1:'B',
    2:'B',
    3:'A',4:'N',5:'I',6:'N',7:'I'
  }

  clicked(value){
    
    this.index[this.j]=value;
    this.newarray[value]=this.data[Object.keys(this.data)[value]]
    this.variable1[this.i]=this.newarray[value];
    this.i++;this.count++;this.j++;
    if(this.count===2){
      this.check(this.index[0],this.index[1]);
    }
  }
  
  check(value1,value2){
     if(this.variable1[0]===this.variable1[1]){
        this.i=0;this.count=0;this.j=0;
        this.variable1.slice(2);
      }
     else{
        this.i=0;this.count=0;this.j=0;
        setTimeout(() => {
         this.newarray[value1]=[''];
         this.newarray[value2]=[''];
      }, 1000);
         this.variable1.slice(2);
      }
   }
  
}

