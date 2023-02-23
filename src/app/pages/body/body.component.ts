import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  //* Declaración de variables
  cStarter: string = 'STARTER';
  cSuperPremium: string = 'SUPER PREMIUM';
  cUltimatePremium: string = 'ULTIMATE PREMIUM';

  pStarter: number = 10
  pSuperPremium: number = 25
  pUltimatePremium: number = 34

  emailUno: boolean = false
  emailDos: boolean = true
  emailtres: boolean = true

  constructor() {
    console.log(this.pStarter)
    console.log(this.pSuperPremium)
    console.log(this.pUltimatePremium)
  }

  ngOnInit(): void {}
}
