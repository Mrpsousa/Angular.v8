import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/core/generics/base.form';
import { Product } from 'src/app/core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})

export class AddprodutoComponent extends BaseForm implements OnInit{
// form: FormGroup;

produto: Product;

//id:number;

categoriaType=[
                {'id':'1', 'nome':'ELETRÔNICO'},
                {'id':'2', 'nome':'PERFUME'},
                {'id':'3', 'nome':'SAPATO'},
                {'id':'', 'nome':'ROUPA'},
              ];

public formErrors = {
  nome_produto:'',
  descricao:'',
  categoria:'',
  valor:''
}

public validationMessages = {
    nome_produto: {
      required: 'campo obrigatório.',
    },
    descricao: {
      required: 'campo obrigatório.',
    },
    categoria: {
      required: 'campo obrigatório.',
    },
    valor: {
      required: 'campo obrigatório.'}

}

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private service: ProductService,
) {
  super();
}


buildForm() {
  this.form = this.formBuilder.group({
    nome_produto: ['', Validators.required],
    descricao: ['', Validators.required],
    categoria: ['', Validators.required],
    valor: ['', Validators.required]
  });
  this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); //
}

ngOnInit() {
  this.buildForm();
}

submit() {
  console.log( this.form.value)
  //Object.assign(this.produto, this.form.value);
    this.service.saveProduct(this.produto).subscribe(
      data => this.router.navigate(['/admin']),
      // err => console.log(err)
    )
}

}
