import { ClienteService } from './../../../../core/services/cliente.service';
import { Cliente } from './../../../../core/models/cliente.model';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', {static: true}) table;
  clientes: Cliente[];

  constructor(private service: ClienteService) { }

  ngOnInit() {
    //this.getClientes();
    this.getDataFromSource();
  }

  /*getClientes(){
    this.service.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }*/

  getDataFromSource() {
    this.service.getClientes().subscribe((clientes: Cliente[]) => {
      this.tableData = clientes;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Nome', data: 'nome'},
          {title: 'CPF', data: 'cpf'},
          {title: 'RG', data: 'rg'},
          {title: 'Descrição', data: 'descricao'},
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}
