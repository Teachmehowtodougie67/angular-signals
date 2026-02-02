import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmotionService {
  
  emotion = signal('happy');

  setSad(){
    this.emotion.set('sad');
  }

  setHappy(){
    this.emotion.set('happy');
  }

}
