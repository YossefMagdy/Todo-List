import { Title } from '@angular/platform-browser';
import { TasksService } from './../tasks.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  
  constructor(private _TasksService:TasksService,private _router:Router,private _title:Title){
    this._title.setTitle("Add Task")
  }
  SaveTask(title:any,description:any){
    this._TasksService.savetask(title.value,description.value)
    this._router.navigate(['home'])
  }
}
