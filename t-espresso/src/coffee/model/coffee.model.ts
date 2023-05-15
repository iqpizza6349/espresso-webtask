
export class CoffeeModel {
    private _name: string;
    private _sweet: number;
    private _sour: number;
    private _bitter: number;

    constructor(name: string, sweet: number, sour: number, bitter: number) {
        this._name = name;
        this._sweet = sweet;
        this._sour = sour;
        this._bitter = bitter;
    }

    get name() {
        return this._name;
    }

    get sweetLevel() {
        return this._sweet;
    }

    get sourLevel() {
        return this._sour;
    }

    get bitterLevel() {
        return this._bitter;
    }
}


