import { Component, OnInit } from '@angular/core';

export interface ITile{
  cols:number;
  rows:number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Products List";
  products=[
    {id:1,type:'car',desc:'Bombamawindi1 sahibine qismet'},
    {id:2,type:'car',desc:'Bombamawindi2 sahibine qismet'},
    {id:3,type:'car',desc:'Bombamawindi3 sahibine qismet'},
    {id:4,type:'car',desc:'Bombamawindi5 sahibine qismet'},
    {id:5,type:'car',desc:'Bombamawindi6 sahibine qismet'},
    {id:5,type:'car',desc:'Bombamawindi7 sahibine qismet'},
    {id:5,type:'car',desc:'Bombamawindi8 sahibine qismet'},
    {id:5,type:'car',desc:'Bombamawindi9 sahibine qismet'},
    {id:5,type:'car',desc:'Bombamawindi10 sahibine qismet'}

  ];

  tiles:ITile[]=[
    {cols:3,rows:4}
  ];

  ngOnInit() {

    console.log(this.products.length + 'das')
    
  }
  
}
