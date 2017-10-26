import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'menu',
  template: `
  <h2>Menu</h2>
  <ol class="row equal">
    <li *ngFor="let eachKeg of childKegList" class="well col-sm-6">
      <h3>{{eachKeg.brand}} </h3>
      <button type="button" class="btn" (click)="editButtonHasBeenClicked(eachKeg)" id="editKeg">Edit</button>
      <p>{{eachKeg.flavor}} <span class="price-color">$ {{eachKeg.price}}</span></p>
      <p>Pints left: {{eachKeg.pints}}</p>
      <button type="button" class="btn" (click)="pourPint(eachKeg)" id="pourPint">Pour Pint</button>
      <p>{{eachKeg.description}}</p>
    </li>
  </ol>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
  `]
})

export class MenuComponent {
  @Input() childKegList: Keg;
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kombuchaToEdit: Keg) {
    this.clickSender.emit(kombuchaToEdit);
  }

  pourPint(clickedKeg) {
    clickedKeg.pints -= 1;
  }
}
