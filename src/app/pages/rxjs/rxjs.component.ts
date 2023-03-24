import { Component, OnDestroy } from '@angular/core';
import {  retry, take, map, filter } from 'rxjs/operators';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs!: Subscription;

  constructor(){

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('Obs Terminado')
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
      )
    // this.retornaIntervalo().subscribe(
    //   (valor) => console.log(valor)
    // )
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  // retornaIntervalo(){
  //   const intervalo$ = interval(1000).pipe(
  //     take(4),
  //     map( valor => {
  //       return 'Hola mundo: ' + (valor + 1)
  //     })
  //   )
  //   return intervalo$;
  // }
  retornaIntervalo(): Observable<number>{
    return interval(500).pipe(
      take(10),
      map( valor => {
        return (valor + 1)
      }),
      filter(valor => (valor % 2 === 0) ? true : false)
    )
  }



  retornaObservable(): Observable<number>{
    let i = -1;
    // const obs$ = new Observable <number>(observer => {
    return new Observable <number>(observer => {
      const intervalo = setInterval( () => {
        i++;
        observer.next(i)
        
        if(i === 4){
          clearInterval(intervalo)
          observer.complete();
        }
        
        if(i === 2){
          i = 0;
          console.log('i= 2 errrr');
          observer.error('Ocurrio un erro; esta en 2')
          clearInterval(intervalo)
          observer.complete();
        }
      }, 1000 )
      
    });

    // return obs$;
  }
}
