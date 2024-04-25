export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw new Error('Building class is abstract and cannot be instantiated directly!');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
