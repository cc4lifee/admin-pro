import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public titulo: string = '';

  public tituloSub$: Subscription;

  constructor(private router: Router) {
    this.tituloSub$ = this.getDataRuta()
      .subscribe(({ titulo }) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`
      });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getDataRuta() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
    )

  }

}
