import { Component, HostListener, OnInit } from '@angular/core';
import { Months } from './model/month.model';

@Component({
  selector: 'app-opn-fin',
  templateUrl: './opn-fin.component.html',
  styleUrls: ['./opn-fin.component.scss']
})
export class OpnFinComponent implements OnInit {

  constructor() {this.monthSelected = 2; }

  ngOnInit() {
    this.monthSelected = 2;

  }

  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }

  public income = 0;
  public expense = 0;
  monthSelected : Number;
   
  public changeIncome(event: any) {
    this.income = parseFloat(event.target.value);
  }

  public changeExpense(event: any) {
    this.expense = parseFloat(event.target.value);
  }

  months: Months[] = [
    {id: 1, name: '3 Months'},
    {id: 2, name: '6 Months'},
    {id: 3, name: '9 Months'},
    {id: 4, name: '12 Months'},
  ]

}
