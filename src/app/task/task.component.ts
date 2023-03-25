import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
taskid:any;
task:any;
constructor(private Route:ActivatedRoute ,private _TasksService:TasksService,private _router:Router,private _title:Title){
  console.log(this.taskid=this.Route.snapshot)
  this.taskid=this.Route.snapshot.paramMap.get("id");
  this.task=this._TasksService.tasks[this.taskid];
  this._title.setTitle("Task Information")
}
updateTask(){
  this._TasksService.updateTask(this.taskid,this.task);
  this._router.navigate(['/home'])
}
deleteTask(){
  this._TasksService.deleteTask(this.taskid)
  this._router.navigate(['/home'])
}
}
 