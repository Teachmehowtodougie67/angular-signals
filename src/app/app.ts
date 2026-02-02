import { Component, inject } from '@angular/core';
import { CounterService } from './services/counter-service/counter-service';
import { ControlsComponent } from "./components/controls-component/controls-component";
import { DisplayComponent } from "./components/display-component/display-component";
import { FlagComponent } from "./components/flag-component/flag-component";


@Component({
  selector: 'app-root',
  imports: [ControlsComponent, DisplayComponent, FlagComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  

}
