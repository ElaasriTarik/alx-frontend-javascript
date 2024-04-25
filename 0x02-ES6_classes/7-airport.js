export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getter
  get [Symbol.toStringTag]() {
    return (`${this._code}`);
  }
}
