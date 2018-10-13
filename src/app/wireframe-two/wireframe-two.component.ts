import { Component, OnInit } from '@angular/core';
import{GetdataService} from '../getdata.service';
import {Chart} from  'chart.js' ;

@Component({
  selector: 'app-wireframe-two',
  templateUrl: './wireframe-two.component.html',
  styleUrls: ['./wireframe-two.component.css']
})
export class WireframeTwoComponent implements OnInit {

  storeUserData = [];
  chart:any;
  lati: any;
  longi: any;

  constructor(private _getdata : GetdataService) { }

  ngOnInit() {
    this._getdata.getData().subscribe(response => {
      this.storeUserData = response ;
      console.log(this.storeUserData);


      // let lati = response['users'].subscribe(response => response.geo.lat);
      // let longi = response['users'].subscribe(response => response.geo.lng);
      // let name = response['users'].subscribe(response => response.company.name);
    })

  //     this.chart = new Chart('canvas' ,{
  //       type: 'line',
  //       data: {
  //         labels: name ,
  //         datasets: [
  //           {
  //               data: this.lati,
  //               borderColor: '#3cba9f',
  //               fill: false

  //           },
  //           {
  //             data: this.longi,
  //             borderColor: '#ffcc00',
  //             fill: false

  //         },
  //         ]
  //       },
  //       options: {
  //         legends: false,
  //       },
  //       scales: {
  //         xAxes: [{
  //           display: true
  //         }],
  //         yAxes: [{
  //           display: true
  //         }]
  //       }

  //     })

   }

}
