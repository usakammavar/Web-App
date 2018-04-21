import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent  {
  title = "Members Directory";
  rowData: any[];
  columnDefs: any[];  
  gridOptions:GridOptions;
  

  constructor() { 
    this.gridOptions =<GridOptions>{
      domLayout: 'autoHeight',
      pagination: true,
      paginationPageSize: 15,
      enableSorting:true,
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
   }; 

   this.columnDefs= [
    {headerName:'ID', field:'id', width:100},
    {headerName:'FIRST NAME', field:'firstName',width:150},
    {headerName:'LAST NAME', field:'lastName',width:150},
    {headerName:'HOUSE NAME', field:'houseName',width:120},
    {headerName:'CITY', field:'usCity',width:120},
    {headerName:'STATE', field:'usState',width:80},
    {headerName:'NATIVE', field:'native',width:150},
    {headerName:'PROFESSION', field:'profession',width:200},
  
    ];

    this.rowData = [
      {
        id:1001,
        firstName:'Pothiraj',
        lastName:'Marichamy',
        houseName:'Thamminar',
        usCity:'Jersey City',
        usState: 'NJ',
        native:'Thiruvengadam',
        profession:'Farmer'
      },      
      {
        id:1002,
        firstName:'Srinivasan',
        lastName:'Perumalsamy',
        houseName:'BAAMOORTHI',
        usCity: 'Hillsborough',
        usState: 'NJ',
        native:'Tiruchi',
        profession:'Business'
      } ,
      {
        id:1003,
        firstName:'Venkat',
        lastName:'Seenivasagan',
        houseName:'Pemmasani',
        usCity:'Princeton',
        usState: 'NJ',
        native:'Thiruvengadam',
        profession:'IT Professional'
      },
      {
        id:1004,
        firstName:'Suresh Kumar',
        lastName:'Ramakrishnan',
        houseName:'kanappadi',
        usCity: 'Ashburn',
        usState: 'VA',
        native:'Kovilpatti',
        profession:'Accountant'
      } ,
      {
        id:1005,
        firstName:'Prasad',
        lastName:'Prasad',
        houseName:'Kommini',
        usCity: 'NewYork',
        usState: 'NY',
        native:'Chennai',
        profession:'Doctor'
      } ,
      {
        id:1006,
        firstName:'Eswar',
        lastName:'Ponraj',
        houseName:'BAAMOORTHI',
        usCity: 'SFO',
        usState: 'CA',
        native:'Coimbatore',
        profession:'Construction'
      } ,
      {
        id:1007,
        firstName:'Ashok',
        lastName:'Ashok',
        houseName:'KORISAL',
        usCity: 'Baltimore',
        usState: 'MD',
        native:'Madurai',
        profession:'Politician'
        
      } ,
      {
        id:1008,
        firstName:'Sukumar',
        lastName:'Sukumar',
        houseName:'kanappadi',
        usCity: 'Edison',
        usState: 'NJ',
        native:'Tuticorin',
        profession:'Lawyer'
      } ,
      {
        id:1009,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'KORISAL',
        usCity: 'Boston',
        usState: 'MA',
        native:'Sivakasi',
        profession:'Politician'

      } ,
      {
        id:1010,
        firstName:'Kannan',
        lastName:'Kannan',
        houseName:'KORISAL',
        usCity: 'Kansas city',
        usState: 'MO',
        native:'Ooty',
        profession:'Farmer'
      } ,
      {
        id:1011,
        firstName:'Ramasamy',
        lastName:'Ramasamy Naidu',
        houseName:'SAATHU',
        usCity: 'Atlanta',
        usState: 'GA',
        native:'Salem',
        profession:'Business'
      } ,
      {
        id:1012,
        firstName:'GT Naidu',
        lastName:'GT Naidu',
        houseName:'kanappadi',
        usCity: 'Detroit',
        usState: 'MI',
        native:'Coimbatore',
        profession:'scientist'
      } ,
      {
        id:1013,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'BAAMOORTHI',
        usCity: 'Tampa',
        usState: 'FL',
        native:'Sivakasi',
        profession:'Farmer'
      } ,
      {
        id:1014,
        firstName:'Naidu Kamma',
        lastName:'Test Kamma Naidu',
        houseName:'namburar',
        usCity: 'Charlotte',
        usState: 'NC',
        native:'Kovilpatti',
        profession:'Doctor'
      } ,
      {
        id:1015,
        firstName:'Test Naidu',
        lastName:'Naidu Last',
        houseName:'BAAMOORTHI',
        usCity: 'Edison',
        usState: 'NJ',
        native:'Tirunelveli',
        profession:'IT Professional'
      } ,
      {
        id:1016,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'Pulipatiyar',
        usCity: 'Louisville',
        usState: 'KY',
        native:'Tiruchi',
        profession:'Business'
      } ,
      {
        id:1017,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'Kommini',
        usCity: 'Columbus',
        usState: 'OH',
        native:'Chennai',
        profession:'Accountant'
      } ,
      {
        id:1018,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'namburar',
        usCity: 'Harrisburg',
        usState: 'PA',
        native:'Madurai',
        profession:'Govt Official'
      } ,
      {
        id:1019,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'Pulipatiyar',
        usCity: 'Kansas city',
        usState: 'MO',
        native:'Kovilpatti',
        profession:'Doctor'
      } ,
      {
        id:1020,
        firstName:'Test First',
        lastName:'Test Last',
        houseName:'SAATHU',
        usCity: 'Baltimore',
        usState: 'MD',
        native:'Erode',
        profession:'Lawyer'
      } ,

    ];

  }

  
  onGridReady(params){
    
   }  



}




