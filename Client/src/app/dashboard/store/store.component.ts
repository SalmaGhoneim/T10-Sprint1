import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  settings = {
    columns: {
      id: {
        title: 'id',
        type: 'string'
      },
      price: {
        title: 'price',
        type: 'string'
      },
      name: {
        title: 'name',
        type: 'string'
      },
      createdAt: {
        title: 'createdAt',
        type: 'string'
      },
      updatedAt: {
        title: 'updatedAt',
        type: 'string'
      },
      sellerName: {
        title: 'sellerName',
        type: 'string'
      },
      stock: {
        title: 'stock',
        type: 'string'
      }
    }
  };


  public products = [ ];
  public product;
  constructor( private _storeservice : StoreService ) {}
  
  ngOnInit()   
{
  this.getProducts()
}
 
getProducts():void{
  this._storeservice.getProducts().subscribe(data => this.products = data);    

}
  //createProduct(event):void{
  //this._storeservice.createProduct(event.newData).subscribe(function(res){
//if(res.err == null){
  //event.confirm.resolve();}
  //else{
    //event.confirm.reject();
  //}
  //this.getProducts();
//}
  //}
  //}   
}
  

