import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-and-res',
  templateUrl: './calc-and-res.component.html',
  styleUrls: ['./calc-and-res.component.scss']
})
export class CalcAndResComponent implements OnInit{
  constructor(){

  }
  arr :number[]= [];
  num:number = 0;
    maketable(amount:string){
     this.num = parseInt(amount);
     for(let i = 0;i<this.num;i++)
      {
        this.arr[i] = 1; 
      }
    }
    ngOnInit(): void {
      
    }
}
