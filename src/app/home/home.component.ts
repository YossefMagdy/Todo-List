import { Task } from './../interface/task';
import { Component } from '@angular/core';
import {TasksService} from '../tasks.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Mytask!:Task[]
  
  constructor(private _TasksService:TasksService , private _title:Title){
    this.Mytask=_TasksService.tasks
    this._title.setTitle("Today Task")
  }
  DeleteTask(i:number){
    this._TasksService.deleteTask(i)
  }
} 
