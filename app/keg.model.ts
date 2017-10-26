export class Keg {
  constructor(
    public brand: string,
    public price: number,
    public flavor: string,
    public description: string,
    public pints: number = 11
  ) {}
}
