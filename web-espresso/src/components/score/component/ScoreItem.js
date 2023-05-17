const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const ScoreItem = [
    {
        name: 'sugar',
        img: process.env.PUBLIC_URL + `/images/text/sugar.png`,
        item_img: {
            on: process.env.PUBLIC_URL + `images/sugar_on.png`,
            off: process.env.PUBLIC_URL + `images/sugar_off.png`
        }
    },
    {
        name: 'acidity',
        img: process.env.PUBLIC_URL + `/images/text/acidity.png`,
        item_img: {
            on: process.env.PUBLIC_URL + `images/lemon_on.png`,
            off: process.env.PUBLIC_URL + `images/lemon_off.png`
        }
    },
    {
        name: 'bitter',
        img: process.env.PUBLIC_URL + `/images/text/bitter.png`,
        item_img: {
            on: process.env.PUBLIC_URL + `images/kale_on.png`,
            off: process.env.PUBLIC_URL + `images/kale_off.png`
        }
    }
];
