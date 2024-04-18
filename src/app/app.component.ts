import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgCircleProgressModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'optimax';
}
