import Currency from './3-currency';

export default class Pricing extends Currency {
	constructor(amount, currency) {
		super(currency.code, currency.name);
		this._amount = amount;
		this._currency = currency;
	}

	// getters and setters
	get amount() {
		return this._amount;
	}

	set amount(amount) {
		this._amount = amount;
	}

	get currency() {
		return this._currency;
	}

	set currency(currency) {
		this._currency = currency;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
