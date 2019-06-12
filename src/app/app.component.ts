import { Component } from '@angular/core';
import { Script } from 'vm';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';
List=[{ItemName:'',ItemPriority:''}]

empty=true
TodoList: string=""
priority: string=""



addList(){
 this.List.push({ItemName:this.TodoList,ItemPriority:this.priority})
if (this.List.length>0){
  this.empty=false
}

 this.TodoList=""
 this.priority=""
}


remove(chores){
 let index = this.List.indexOf(chores)
 this.List.splice(index,1)
}
editChore(chores,TodoList,priority){
  let index= this.List.indexOf(chores)
  let PopUpItemName = prompt("Edit task",chores.ItemName)
  let PopUpItemPriority = prompt("Edit Priority",chores.ItemPriority)
  this.List[index].ItemName=PopUpItemName
  this.List[index].ItemPriority=PopUpItemPriority

}

  
  



}
