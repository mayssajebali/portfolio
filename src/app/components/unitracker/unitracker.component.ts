import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-unitracker',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './unitracker.component.html',
  styleUrl: './unitracker.component.css'
})
export class UnitrackerComponent {

}
