import { Component } from '@angular/core';
import { CurrenttaskcontainerComponent } from './currenttaskcontainer/currenttaskcontainer.component';
import { FormsModule } from '@angular/forms';
import { timestamp } from 'rxjs';
import { Thistask } from './taskcontainer.model';

@Component({
  selector: 'app-taskcontainer',
  standalone: true,
  imports: [CurrenttaskcontainerComponent, FormsModule],
  templateUrl: './taskcontainer.component.html',
  styleUrl: './taskcontainer.component.css'
})

export class TaskcontainerComponent {

  Taskvar="";

  onsubmit(){
    const timestamp = Date.now().toString();
    this.DummyTask.push({ id: timestamp, Inhalt: this.Taskvar });
  }

  private DummyTask = [{id:"1",Inhalt:"Beispieltask 1"},{id:"2",Inhalt:"Beispieltask 2"},{id:"3",Inhalt:"Beispieltask 3"}];

  get getUserTasks(){
    return this.DummyTask;
  };

}

