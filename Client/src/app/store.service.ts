import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { product } from './product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StoreService {

  private getProductsUrl = 'http://localhost:3000/api/product/getProducts'; 
  private getProductByIdUrl = 'http://localhost:3000/api/product/getProduct/:productId'; 
  private getProductBelowPriceUrl = 'http://localhost:3000/api/product/getProductsBelowPrice/:price';
  private createProductUrl = 'http://localhost:3000/api/product/createProduct';
  private updateProductUrl = 'http://localhost:3000/api/product/updateProduct/:productId';
  private deleteProductUrl = 'http://localhost:3000/api/product/deleteProduct/:productId';
  


  constructor(private http : HttpClient) { }
//errorHandler(error : HttpErrorResponse){
  //  return Observable.throw(error.message || "server Failed");
  //}

getProducts() : Observable<any>{
 return this.http.get<any>(this.getProductsUrl);

    }

//getProductById() : Observable<any>{
   // return this.http.get<product>(this.getProductByIdUrl);
    //}

//getProductBelowPrice() : Observable<any>{
  //return this.http.get<product[]>(this.getProductBelowPriceUrl);
    //}

//createProduct(prod:product):Observable<any>{
//alert(prod.name)
//name = String(prod.name)
//
 //return this.http.post(this.createProductUrl,name);
//}
//}

}
