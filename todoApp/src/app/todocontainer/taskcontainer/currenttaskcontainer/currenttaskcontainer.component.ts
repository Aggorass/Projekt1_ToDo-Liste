import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Thistask } from '../taskcontainer.model';

@Component({
  selector: 'app-currenttaskcontainer',
  standalone: true,
  imports: [CurrenttaskcontainerComponent],
  templateUrl: './currenttaskcontainer.component.html',
  styleUrl: './currenttaskcontainer.component.css'
})

export class CurrenttaskcontainerComponent {

  @Input({required:true})Currentask!:Thistask;

  @Output()DeleteEvent=new EventEmitter<number>();

  DeleteTask(){
    console.log("2");
    this.DeleteEvent.emit();
  };

}

