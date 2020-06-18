
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseForm } from 'src/app/core/generics/base.form';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseForm implements OnInit {
// form: FormGroup;
usuario: Usuario[];

public formErrors = {
  nome: '',
  password: ''
}

public validationMessages = {
    nome: {
      required: 'Nome é obrigatório.',
    },
    password: {
      required: 'O perfil é obrigatório.',
    }
}

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private service: UsuarioService
) {
  super();
}

buildForm() {
  this.form = this.formBuilder.group({
    nome: ['', Validators.required],
    password: ['', Validators.required],
  });
  this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  this.onValueChanged(); //
}

ngOnInit() {
  this.buildForm();
  this.getUsuario();
}


  


getUsuario(){
  this.service.getAll().subscribe((usuario: Usuario[]) => {
    this.usuario = usuario;
    console.log(this.usuario)
    //this.dtTrigger.next();
  });
}
// getObra(): void {
//   this.id = +this.route.snapshot.paramMap.get('id');
//   if(this.id){
//     this.service.getOne(this.id)
//       .subscribe(obra => {
//         this.form.patchValue(obra);
//         this.obra = obra;
//       });
//   }
// }

  submit() {
    console.log(this.form.value);
    this.router.navigate(['/admin']);
    //       // err => console.log(err)
  //   this.obra  = {} as Obra;
  //   this.obra.status = 'REVISÃO';
  //   Object.assign(this.obra, this.form.value);
  //   if(!this.form.valid){
  //     return ;
  //   }
  //   if(this.id){
  //     this.service.update(this.id, this.obra).subscribe(
  //       data => this.router.navigate(['/dashboard/obras', data.id]),
  //       // err => console.log(err)
  //     )
  //   }else{
  //     this.service.save(this.obra).subscribe(
  //       data => this.router.navigate(['/dashboard/obras', data.id]),
  //       // err => console.log(err)
  //     )
  //   }
  }
}
