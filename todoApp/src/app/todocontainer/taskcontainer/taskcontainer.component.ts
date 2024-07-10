import { Component } from '@angular/core';
import { CurrenttaskcontainerComponent } from './currenttaskcontainer/currenttaskcontainer.component';

@Component({
  selector: 'app-taskcontainer',
  standalone: true,
  imports: [CurrenttaskcontainerComponent],
  templateUrl: './taskcontainer.component.html',
  styleUrl: './taskcontainer.component.css'
})

export class TaskcontainerComponent {

}
