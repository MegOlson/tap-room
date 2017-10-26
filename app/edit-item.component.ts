import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-item',
  template: `
    <h3>{{childSelectedKeg.brand}} </h3>
    <p>{{childSelectedKeg.flavor}} $ {{childSelectedKeg.price}}</p>
    <p>{{childSelectedKeg.description}}</p>
    <form class="form-group">
      <label for="editBrand">Brand:</label>
      <input type="text" [(ngModel)]="childSelectedKeg.brand" name="editBrand" class="form-control">

      <label for="editFlavor">Flavor:</label>
      <input type="text" [(ngModel)]="childSelectedKeg.flavor" name="editFlavor" class="form-control">

      <label for="editPrice">Price:</label>
      <input type="text" [(ngModel)]="childSelectedKeg.price" name="editPrice" class="form-control">

      <label for="editDescription">Description:</label>
      <textarea type="text" [(ngModel)]="childSelectedKeg.description" name="editDescription" class="form-control" rows="7" cols="53"></textarea>

    </form>
    <button type="button" class="btn" (click)="doneButtonHasBeenClicked()" id="doneEditing">Done</button>
  `
})

export class EditItemComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonHasBeenClicked() {
    this.doneButtonClickedSender.emit();
  }

}
