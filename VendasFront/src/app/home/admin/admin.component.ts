import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: ProductService) { }

 produto: Product[];

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};


  ngOnInit() {
    this.getProdutos();
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.produto;
  }


  getProdutos(){
    this.service.getAll().subscribe(data => {
      this.produto = data;
      //this.dtTrigger.next();
    });
  }
}
