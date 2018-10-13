import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor(private _getData: GetdataService) { }

  title = "Angular 6 graphs"

  LineChart = [];
  storePageData = [];
  userId = [];

  ngOnInit() {

      this._getData.getData().subscribe(response => {
      this.storePageData = response
      // for (let i = 0; i <= this.storePageData[5]; i++) {
      //   this.userId[i] = this.storePageData[i].id;
      //   console.log(i+1+"-"+this.userId[i]);
      // }
      //console.log(this.storePageData[0].topping);

      let userData = this.storePageData.filter(topping => topping.type != "donut");
      
      // console.log(userData);

      for(let user= 0 ; user < userData.length ; user++){
            if(userData[user].type != "donut" && userData[user].name != "Cake"){
              console.log(userData[user].type + "" + userData[user].name);
            }
      }
      
        

      // let person ={
      //   name: "Santosh",
      //   age: 27
      // }
      
      // let personData = JSON.stringify(person);
      // document.write(personData);    

      
      // console.log(userData);

    })

    // this.LineChart = new Chart('lineChart', {

    //   type: 'bar',
    //   data: {
    //     labels: this.userId,
    //     datasets: [{
    //       label: "Number Of item Sold In A month",
    //       data: this.userId,
    //       fill: false,
    //       lineTension: 0.2,
    //       borderColor: "red",
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     title: {
    //       text: "Line Chart",
    //       display: true
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }

    // })
  }

}
