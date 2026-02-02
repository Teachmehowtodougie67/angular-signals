import { computed, Injectable, signal, WritableSignal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CounterService {


  interval:number | null = null;

  ///count = 0;

  //count = signal(0);
  count: WritableSignal<number> = signal(0);

  counterState: WritableSignal<string> = signal('not counting');
  
  doubleCount = computed(() => this.count() * 2);

  start(){

    if(this.interval === null){
      this.interval = setInterval(() => {
        this.increment()
      }, 1000);
    }

  }

  stop(){

    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
  }

  increment(){
    this.count.update((oldValue) => oldValue + 1)
  }

  decrement(){
    this.count.update((old) => old - 1);
  }

  reset(){
    this.count.set(0)
  }


  
}
