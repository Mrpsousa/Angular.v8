import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { RoupasComponent } from './roupas/roupas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { StartComponent } from './start/start.component';
import {DataTablesModule} from 'angular-datatables';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddprodutoComponent } from './addproduto/addproduto.component';
import { UsuarioService } from '../core/services/usuario.service';
import { ProductService } from '../core/services/product.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EletronicosComponent,
    RoupasComponent,
    SapatosComponent,
    PerfumesComponent,
    StartComponent,
    AdminComponent,
    AddprodutoComponent,
    
    
    ],
    providers: [
      UsuarioService,
      ProductService
    ],
    bootstrap: [HomeComponent]
  
  
})

export class HomeModule {
}
