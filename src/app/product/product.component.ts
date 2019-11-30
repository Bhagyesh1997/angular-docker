import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = []
  constructor(private service: ProdService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(response =>{
      if(response['status'] === 'success')
      {
        this.products = response['data'] as any[]
      }
      else
      {
        console.log('error', response['error'])
      }
    })
  }

}
