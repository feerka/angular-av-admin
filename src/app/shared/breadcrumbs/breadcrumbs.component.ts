import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: String;
  public tituloSubs$: Subscription;
  
  constructor(private router:Router, private route: ActivatedRoute){

    console.log(route.snapshot.children[0].data);
       this.tituloSubs$ = this.getDataRuta().subscribe(({titulo}) => {
        this.titulo = titulo;
        document.title = `AdminPro-${titulo}`;
      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRuta(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter( (event) => event.snapshot.firstChild === null ),
      map((event: ActivationEnd) => event.snapshot.data),
    );
   
  }
}
