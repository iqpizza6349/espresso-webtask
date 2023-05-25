
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export class Coffee {
    constructor(name, simple_name, img, describe) {
        this.name = name;
        this.simple_name = simple_name;
        this.img = process.env.PUBLIC_URL + img;
        this.describe = describe;
    }
}
