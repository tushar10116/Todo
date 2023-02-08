import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/Todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  todos:TodoModel[]=[{'todoHeader':'Wake up','todoDescription':'Wake up early.set alarm to wake up','todoStartDate':new Date('08-02-2023'),'todoEndDate':new Date('08-02-2023'),'todoStatus':'pending'}]
  constructor() { }

  ngOnInit(): void {

  }

}
