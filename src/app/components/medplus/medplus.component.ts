import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-medplus',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './medplus.component.html',
  styleUrl: './medplus.component.css'
})
export class MedplusComponent {

}
