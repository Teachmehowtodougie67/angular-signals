import { computed, Injectable, signal, WritableSignal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CounterService {


  interval?:number;

  ///count = 0;

  //count = signal(0);
  count: WritableSignal<number> = signal(0);


  doubleCount = computed(() => this.count() * 2);

  start(){
    this.interval = setInterval(() => {
      this.increment()
    }, 1000);
  }

  stop(){
    clearInterval(this.interval);
  }

  increment(){
    this.count.update((oldValue) => oldValue + 1)
    console.log(this.count());
  }

  decrement(){
    this.count.update((old) => old - 1);
    console.log(this.count())
  }

  reset(){
    this.count.set(0)
    console.log(this.count())
  }


  
}
