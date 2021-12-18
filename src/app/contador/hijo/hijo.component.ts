import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styles: [
    ]
})
export class HijoComponent implements OnInit {
    @Input() contador: number;
    @Output() contadorOut = new EventEmitter<number>();
    constructor() {
        this.contador = 0;
    }

    ngOnInit(): void {
    }

    multiplicar() {
        this.contador *= 2;
        this.contadorOut.emit(this.contador);
    }

    dividir() {
        this.contador /= 2;
        this.contadorOut.emit(this.contador);
    }

    contadorNieto($event: number){
        this.contador = $event;
        this.contadorOut.emit(this.contador);
    }

}
