import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodocontainerComponent } from './todocontainer/todocontainer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodocontainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todoApp';
}

//in Zeile 8 in das Array einfügen und in Zeile 3 Import NameComponent