import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styles: [
    ]
})
export class HijoComponent implements OnInit {
    contador!: number;
    constructor(private store: Store<AppState>) {
        this.store.select('contador').subscribe(contador=> this.contador = contador);
    }

    ngOnInit(): void {
    }

    multiplicar() {
        this.contador *= 2;
    }

    dividir() {
        this.contador /= 2;
    }

    contadorNieto($event: number){
        this.contador = $event;
    }

}
