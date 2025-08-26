import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ReactiveFormsModule, NgbModalModule],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  @ViewChild('addProductModal') addProductModal!: TemplateRef<any>;

  products: Product[] = [];
  form!: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private modal: NgbModal
  ) {
   
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  openAddProductModal() {
    this.form.reset({ name: '', price: null, stock: 0 });
    this.modal.open(this.addProductModal, { centered: true, size: 'md' });
  }

  submit(modalRef: any) {
    if (this.form.invalid) return;
    const newProduct: Product = { id: 0, ...(this.form.value as any) };
    this.productService.addProduct(newProduct).subscribe(() => {
      modalRef.close();
      this.loadProducts();
    });
  }
}
