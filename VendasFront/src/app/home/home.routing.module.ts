 import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { RoupasComponent } from './roupas/roupas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddprodutoComponent } from './addproduto/addproduto.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', component: StartComponent},
      {path: 'eletronicos', component: EletronicosComponent},
      {path: 'perfumes', component: PerfumesComponent},
      {path: 'roupas', component: RoupasComponent},
      {path: 'sapatos', component: SapatosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'add', component: AddprodutoComponent},
      
    ]}
];


export const HomeRoutingModule  = RouterModule.forChild(routes);
