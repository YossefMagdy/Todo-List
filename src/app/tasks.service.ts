import { Task } from './interface/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[]=[
    {title:"assignment",Describtion:"lorem  qew123"},
    {title:"gym",Describtion:"lorem  qew123"},
]
  constructor() { 
    if(localStorage.getItem("tasks")!=null){
      this.tasks=JSON.parse(localStorage.getItem("tasks") || '{}')
    }
  }
  deleteTask(i:number){
    this.tasks.splice(i,1)
    this.StoreTask()
  }
  savetask(title:any,description:any){
    this.tasks.push({title:title,Describtion:description})
    this.StoreTask()
  }
  updateTask(id:any,  item:any){
    this.tasks[id]=item
    this.StoreTask()
  }
  StoreTask(){
    localStorage.setItem("tasks",JSON.stringify(this.tasks))
  }
}
