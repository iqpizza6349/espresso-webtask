
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export class Coffee {
    constructor(name, img, describe) {
        this.name = name;
        this.img = process.env.PUBLIC_URL + img;
        this.describe = describe;
    }

    get name() {
        return this.name;
    }

    get img() {
        return this.img;
    }

    get describe() {
        return this.describe;
    }
}



