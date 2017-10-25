import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styles:[`
    .price-color {
      color: #2a7cc7;
    }
    .navbar-buttons {
      margin-top: 30px;
    }
    `]
})

export class AppComponent {
  selectedKeg = null;
  kegForm: boolean = false;
  lowKegList: boolean = false;
  displayMenu: boolean = false;
  newBrand: string;
  newPrice: number;
  newFlavor: string;
  newDescription: string;

  kegs: Keg[] = [
    new Keg("GT’s Enlightened Organic Raw Kombucha",5,"Original","I’m gonna start off by acknowledging that getting Original was a mistake. My roommate got Lavender, which was apparently more drinkable, but this flavor? Not so much. This basically tasted like a concoction of black tea and vinegar, with some floating chunks of …..? (not even sure what, it’s not on the label) thrown in the mix. For hardcore kombucha fans, though, this is a pretty good choice. Light on sugar and heavy on probiotics, GT’s definitely takes the health aspect of probiotic tea seriously."),
    new Keg("Lion Heart Kombucha",8,"Ginger Fixx","If you’re into ginger, bike on over to the grocery store right now and buy a case of this stuff. Light and zesty, a bottle of Ginger Fixx can wake you up without any caffeine or sugar buzz. Between its low sugar profile and minimal fermentation flavor, this drink is pretty mild. The only dominant flavor here is the ginger, which means you’ll probably either love it or hate it. Lion Heart doesn’t really have a traditional kombucha taste, but it’s definitely worth reaching for on a hot day."),
    new Keg("Kevita Master Brew Kombucha",3,"Blueberry and Mint","Fizzy, gingery, and caffeinated, Kevita is a great kombucha to wake you up or get you going. The carbonation and stevia sweetness of this drink make it taste like a combination of ginger beer, ginger ale, and iced sweet tea. It’s definitely heavy on the flavor and light on the fermentation, making it a good choice for those who aren’t too into kombucha yet.")
  ]

  addKeg() {
    let newKeg: Keg = new Keg(
      this.newBrand,
      this.newPrice,
      this.newFlavor,
      this.newDescription
    );
    this.kegs.push(newKeg);
    this.newBrand = "";
    this.newPrice = null;
    this.newFlavor = "";
    this.newDescription = "";
    this.kegForm = false;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  showAddForm() {
    if(this.kegForm) {
      this.kegForm = false;
    } else {
      this.kegForm = true;
    }
  }

  doneEditing() {
    this.selectedKeg = null;
  }

  pourPint(clickedKeg) {
    clickedKeg.pints -= 1;
  }

  showLowKegs() {
    if(this.lowKegList) {
      this.lowKegList = false;
    } else {
      this.lowKegList = true;
    }
  }

  showMenu() {
    if(this.displayMenu) {
      this.displayMenu = false;
    } else {
      this.displayMenu = true;
    }
  }
}

export class Keg {
  constructor(
    public brand: string,
    public price: number,
    public flavor: string,
    public description: string,
    public pints: number = 11
  ) {}
}
