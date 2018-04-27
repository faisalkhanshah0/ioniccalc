import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calcStatement: any;
  fullStatement: any;
  operatorforfinalresult: any;
  numOne : number;
  numTwo : number;
  numThree: number;
  constructor(public navCtrl: NavController) {
    this.calcStatement = 0;
  }
  operationInput(inputval: number){
    if(this.calcStatement == 0){
      this.calcStatement = (this.calcStatement+inputval).toString();
    }
    else{
      this.calcStatement = this.calcStatement+inputval.toString();
    
    }
//    console.log(inputval);
  }

  operationSqare(){
    this.numOne = parseInt(this.calcStatement);
    this.calcStatement = this.numOne*this.numOne;
  
  }

  operationReal(operator: String){
    this.operatorforfinalresult = operator;
    if(operator == '+'){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+' +';
      this.calcStatement = 0;
    }
    if(operator== '-'){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+ '-';
      this.calcStatement = 0;  

    }
    if(operator=='*'){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+ '*';
      this.calcStatement =0;
    }
    if(operator=='/'){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+'/';
      this.calcStatement =0; 
    }
    if(operator=='log'){
      if(this.calcStatement != 0){
       this.numOne = parseInt(this.calcStatement);
       this.fullStatement = this.calcStatement+'log';
       this.calcStatement = 0;
      }
      else{
       this.numOne = 1;
       this.fullStatement = 'log';
       this.calcStatement = 0;
      }
    }
    if(operator=='sqrt'){
      if(this.calcStatement!=0){
       this.numOne = parseInt(this.calcStatement);
       this.fullStatement = this.calcStatement+'sqrt';
       this.calcStatement = 0;
      }
      else{
        this.numOne = 1;
        this.fullStatement = 'sqrt';
      }
    }
    /*if(operator=='sqrt' && this.calcStatement != 0){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+'sqrt';
      this.calcStatement = 0;
    }
    if(operator == 'sqrt' && this.calcStatement == 0){
      this.numOne = 1;
      this.fullStatement = 'sqrt';
    }
    if(operator == 'sin' && this.calcStatement != 0){
      this.numOne = parseInt(this.calcStatement);
      this.fullStatement = this.calcStatement+'sin';
      this.calcStatement = 0;
    }
    if(operator == 'sin' && this.calcStatement == 0){
      this.numOne = 1;
      this.fullStatement = 'sin';
      this.calcStatement = 0;
    }*/

  }
  
  operationPercnt(percnt: string){
    if(percnt== '%'){
      this.numThree = parseInt(this.calcStatement);
      this.calcStatement = this.numOne*this.numThree/100;
     
    }
  }

  
  
  finalResult(){
    if(this.operatorforfinalresult == '+'){
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne+this.numTwo;
      this.fullStatement = '';
    }
    if(this.operatorforfinalresult == '-'){
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne-this.numTwo;
      this.fullStatement = '';
    }
    if(this.operatorforfinalresult == '*'){
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne*this.numTwo;
      this.fullStatement = '';
    } 
    if(this.operatorforfinalresult == '/'){
     this.numTwo = parseInt(this.calcStatement);
     this.calcStatement= this.numOne/this.numTwo;
     this.fullStatement = '';
    }
    if(this.operatorforfinalresult == 'log'){console.log(this.operatorforfinalresult);
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne*Math.log10(this.numTwo);
      this.fullStatement = '';
    }
    if(this.operatorforfinalresult == 'sqrt'){console.log(this.operatorforfinalresult);
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne*Math.sqrt(this.numTwo);
      this.fullStatement ='';
    }
    if(this.operatorforfinalresult == 'sin'){
      this.numTwo = parseInt(this.calcStatement);
      this.calcStatement = this.numOne*Math.sin(this.numTwo);
      this.fullStatement = '';
    }

  }
  reset(){
    this.calcStatement = 0;
    this.fullStatement = '';
    this.numOne = 0;
    this.numTwo = 0;
  }
  zoo(){
alert('hi');
  }
}