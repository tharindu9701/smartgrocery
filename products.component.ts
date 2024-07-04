import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public rowIndex!: number;
  showAddProduct!: boolean;
  product!: Product;
  isLoading : boolean = false;
  showEditProduct !: boolean;

  constructor(private productService :ProductService ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public products:Product[] = [];

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts(){
    this.showAddProduct=true;
  }

 hideAddProducts(){
    this.showAddProduct=false;
  }
 
 
  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    }); 

  }
  refresh() {
    this.getProducts();
  }
  
}
