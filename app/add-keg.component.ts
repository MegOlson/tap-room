import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'add-keg',
  template: `
    <h2>New Keg</h2>
    <form class="form-group">
      <label for="newBrand">Brand:</label>
      <input type="text" #newBrand name="newBrand" class="form-control">

      <label for="newFlavor">Flavor:</label>
      <input type="text" #newFlavor name="newFlavor" class="form-control">

      <label for="newPrice">Price:</label>
      <input type="text" #newPrice name="newPrice" class="form-control">

      <label for="newDescription">Description:</label>
      <textarea type="text" #newDescription name="newDescription" class="form-control" rows="7" cols="53"></textarea>

      <button type="button" class="btn" (click)="addKeg(newBrand.value, newFlavor.value, newPrice.value, newDescription.value); newBrand.value=''; newFlavor.value=''; newPrice.value=''; newDescription.value='';" id="addKeg">Add</button>
    </form>
  `
})

export class AddKegComponent {

  @Output() clickSender = new EventEmitter();

  addKeg(brand: string, price: number, flavor: string, description: string) {
    let newKeg: Keg = new Keg(brand, price, flavor, description);
    this.clickSender.emit(newKeg);
  }
}
