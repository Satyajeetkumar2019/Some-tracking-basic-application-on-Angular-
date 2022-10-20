import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.sass']
})
export class TrackbyComponent  {
public product=[
  {id :1,Name :'samsung tv',price :4500, photo :'assets/rose.jpg'},
  {id :2,Name :'Lee copper ',price:3499,photo:'assets/rose.jpg'},
];
public AddProduct(){
  this.product=[
    {id :1,Name :'samsung tv',price :4500, photo :'assets/rose.jpg'},
  {id :2,Name :'Lee copper ',price:3499,photo:'assets/rose.jpg'}
  {id :3,Name :'nike copper',price :8000, photo :'assets/rose.jpg'},
  ];


}
public TrackByid(index , product){
  return product.id;

}//end trackby id function 


}