import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styles:[`
    .price-color {
      color: #326d43;
    }
    .navbar-buttons {
      margin-top: 30px;
    }
    li p {
      font-size: 17px;
    }
    .jumbotron, .newKeg{
      background-color: #bfb6ac;
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
    new Keg("Kevita Master Brew Kombucha",3,"Blueberry and Mint","Fizzy, gingery, and caffeinated, Kevita is a great kombucha to wake you up or get you going. The carbonation and stevia sweetness of this drink make it taste like a combination of ginger beer, ginger ale, and iced sweet tea. It’s definitely heavy on the flavor and light on the fermentation, making it a good choice for those who aren’t too into kombucha yet."),
    new Keg("Humm", 4, "Mango Sage", "This drink is super refreshing and sweet, with a mildly spicy lemon aftertaste. It’s like the flavors of a hot cup of lemon ginger tea with the bubbly lightness of spring. The slight carbonation is a nice touch, and this is sweet enough for all the kombucha lightweights. Hardcore ‘buch drinkers might not find this drink to be a serious enough probiotic kicker, but for those looking for an entry level kombucha or a post-dinner sweet tooth quencher, it’s perfect. Sidenote: Humm’s Chai Spice flavor is absolutely unbelievable. 10/10 must try."),
    new Keg("Brew Dr. Kombucha", 5, "Spiced Apple", "Made using top-shelf tea from Townshend’s Tea Company, Brew Dr.’s kombuchas are definitely for people who enjoy artisanal tea drinks. The kombucha flavor itself is pretty mild, making these drinks feel like a hybrid of a very fancy iced tea and a pretty weak kombucha. With the exception of a few highly eccentric, mildly perfume-y flavors, this brand is sweet-but-not-too-sweet, refreshing, and accessible to entry-level kombucha drinkers. This was actually the brand that got me into kombucha (I had tried a few gnarlier ones and couldn’t get on board), and the spiced apple flavor is a can’t-miss for all first time drinkers."),
    new Keg("Reed's Kombucha", 3, "Goji Ginger", "Points for creativity, Reed's, as one of the first commercially available coffee kombuchas. Sure, that may sound gag-inducing to some, but it's actually like a slightly fizzy, slightly tangy version of cold brew—yum. You could drink it as an iced coffee alternative on mornings you need an extra kick. Goji-Ginger was decent, but unmemorable, with testers preferring the more potent ginger punch of Health-Ade and GT's ginger flavors. Sugar content for these is a bit high for kombucha, which makes us sad."),
    new Keg("Beyond Brewing Company", 4, "Wild Love", "Beyond Brewing Company's kombuchas and kombucha beers are available on draught in the NYC area. Because it's a smaller brewery, no official sugar info is available, but we're still fans, given the company's efforts to use local and organic ingredients. Moroccan Mint is simply a kombucha made with a mint tea base, which one tester found to be 'very light and nicely minty without the sour edge that some of the other kombuchas have.' Wild Love, on the other hand, is a 7.5% ABV Belgian farmhouse ale that's been brewed along with kombucha, resulting in pure awesomeness. As one tester put it: 'Amazing, delicious! Will you marry me?'"),
    new Keg("Bucha", 3, "Blood Orange", "We give Bucha points because it's organic and contains probiotics. But it had the highest sugar content out all the kombuchas we tested, so while it's a good alternative for soda drinkers, it's likely too sweet for veteran booch lovers who are used to a more tart and tangy flavor. One tester thought it had 'a very noticeable tea flavor', while another described it as 'overly sweet.'")
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
