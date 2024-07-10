import { Component } from '@angular/core';
import { TaskcontainerComponent } from './taskcontainer/taskcontainer.component';

@Component({
  selector: 'app-todocontainer',
  standalone: true,
  imports: [TaskcontainerComponent],
  templateUrl: './todocontainer.component.html',
  styleUrl: './todocontainer.component.css'
})

export class TodocontainerComponent {

}
