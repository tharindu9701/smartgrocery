import { Component,NgModule, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required],
  });
 
  isDataUploading =false;
 
  constructor(private fb: FormBuilder,
    private productService : ProductService
  ) {}
  ngOnInit(): void {}

  get f() {
    return this.productFrom.controls;
  }
  


  onSubmit() {
    const values = this.productFrom.value as unknown as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      debugger;
      this.isDataUploading = false;
      this.productFrom.reset();
    });
  }

}