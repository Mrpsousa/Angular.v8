import { HttpClient } from '@angular/common/http';
import { ClienteService } from './../core/services/cliente.service';
import { ClientesComponent } from './dash-board/components/clientes/clientes.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashBoardComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,

  ],
  providers: [],
})
export class PagesModule {
}
