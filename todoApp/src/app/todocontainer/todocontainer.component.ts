import { Component } from '@angular/core';
import { HeadercontainerComponent } from './headercontainer/headercontainer.component';
import { BodycontainerComponent } from './bodycontainer/bodycontainer.component';

@Component({
  selector: 'app-todocontainer',
  standalone: true,
  imports: [HeadercontainerComponent,BodycontainerComponent],
  templateUrl: './todocontainer.component.html',
  styleUrl: './todocontainer.component.css'
})

export class TodocontainerComponent {

}
