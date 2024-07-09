import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TralalaComponent } from './tralala/tralala.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TralalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todoApp';
}
