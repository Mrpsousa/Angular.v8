import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eletronicos',
  templateUrl: './eletronicos.component.html',
  styleUrls: ['./eletronicos.component.css']
})
export class EletronicosComponent implements OnInit {

  count = [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"}, 
];

  constructor() { }

  ngOnInit() {
  }

}
