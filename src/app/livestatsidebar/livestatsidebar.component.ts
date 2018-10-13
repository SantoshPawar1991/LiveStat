import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livestatsidebar',
  templateUrl: './livestatsidebar.component.html',
  styleUrls: ['./livestatsidebar.component.css']
})
export class LivestatsidebarComponent implements OnInit {

    show = true;
      

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.show = !this.show;

  }

}
