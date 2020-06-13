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
                {'id':'1', 'nome':'ELETRONICO'},
                {'id':'2', 'nome':'PERFUME'},
                {'id':'3', 'nome':'SAPATO'},
                {'id':'', 'nome':'ROUPA'},
              ];

public formErrors = {
  nome:'',
  descricao:'',
  categoria:'',
  valor:''
}

public validationMessages = {
    nome: {
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

ngOnInit() {
  this.buildForm();
}

buildForm() {
  this.form = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    categoria: ['', Validators.required],
    valor: ['', Validators.required]
  });
  this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  this.onValueChanged(); //
}



submit() {
  var formData: any = new FormData();
  formData.append("nome", this.form.get('nome').value)
  formData.append("descricao", this.form.get('descricao').value)
  formData.append("categoria", this.form.get('categoria').value)
  formData.append("valor", this.form.get('valor').value)

  this.service.save(formData).subscribe(
    data => this.router.navigate(['/admin']),
    // err => console.log(err)
  )
}

}
