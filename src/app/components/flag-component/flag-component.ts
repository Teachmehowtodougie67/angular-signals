import { Component, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';
import { EmotionService } from '../../services/emotion-service/emotion-service';

@Component({
  selector: 'app-flag-component',
  imports: [],
  templateUrl: './flag-component.html',
  styleUrl: './flag-component.scss',
})
export class FlagComponent {

  counter = inject(CounterService);

  emotionServ = inject(EmotionService);

  state = signal('ng')

  constructor(){
    effect(()=> {
      this.state.set("I'm " + this.emotionServ.emotion() + " and I'm " + this.counter.counterState())
    })
  }

}
