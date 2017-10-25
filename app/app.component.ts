import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let eachKeg of kegs">
      {{eachKeg.brand}}
      {{eachKeg.price}}
      {{eachKeg.flavor}}
    </li>
  </ul>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("GT’s Enlightened Organic Raw Kombucha",5,"Original"),
    new Keg("Lion Heart Kombucha",8,"Ginger Fixx"),
    new Keg("Kevita Master Brew Kombucha",3,"Blueberry and Mint")
  ]
}

export class Keg {
  constructor(
    public brand: string,
    public price: number,
    public flavor: string
  ) {}
}
