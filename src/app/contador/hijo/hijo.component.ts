import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MulAction, DivAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador!: number;
  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  ngOnInit(): void {}

  multiplicar() {
    this.store.dispatch(new MulAction(this.contador));
  }

  dividir() {
    this.store.dispatch(new DivAction(this.contador));
  }

  contadorNieto($event: number) {
    this.contador = $event;
  }
}
