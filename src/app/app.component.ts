import { Component } from '@angular/core';
import { Script } from 'vm';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';
List=["---Default---"]

TodoList: string=""

addList(){
 this.List.push(this.TodoList)
 this.TodoList=""
}

remove(chores){
 let index = this.List.indexOf(chores)
 this.List.splice(index,1)
}
editChore(chores){
  let index= this.List.indexOf(chores)
  this.List[index] = prompt("Please edit task",chores)
}


}
