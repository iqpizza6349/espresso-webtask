import * as fs from "fs";
import * as path from "path";
import { toNumber } from "src/common/helper/cast.helper";

const FILE_NAME = "coffee.csv";

class CoffeePreference {
    private _ageGroup: number;
    private _genre: string;
    private _type: string;
    private _score: number;
    private _flavor: string;

    constructor(ageGroup: number, genre: string, type: string, score: number, 
                flavor: string) {
        this._ageGroup = ageGroup;
        this._genre = genre;
        this._type = type;
        this._score = score;
        this._flavor = flavor;
    }

    get ageGroup() {
        return this._ageGroup;
    }

    get genre() {
        return this._genre;
    }
    
    get type() {
        return this._type;
    }

    get score() {
        return this._score;
    }

    get flavor() {
        return this._flavor;
    }
}

// 장르별로 분리
// 나이는 10대로 고정하고선,
// 추천할 유저의 취향(맛)에 맞게 추천
export function getCSV(): CoffeePreference[] {
    const csvPath = path.join(__dirname, '../..', 'coffee-recommands', FILE_NAME);
    const csv = fs.readFileSync(csvPath, "utf-8");
    const rows = csv.split("\r\n");
    if (rows[rows.length - 1] === '') {
        rows.pop();
    }

    let result: CoffeePreference[] = [];
    let columnTitle = [];
    for (const i in rows) {
        const row = rows[i];
        const data = row.split(",");
        if (i === "0") {
            columnTitle = data;
        }
        else {
            let row_data: string[] = [];
            for (const index in columnTitle) {
                row_data[index] = data[index];
            }
            const perference: CoffeePreference = new CoffeePreference(
                toNumber(row_data[0]),
                row_data[1],
                row_data[2],
                toNumber(row_data[3]),
                row_data[4]
            );
            result.push(perference);
        }
    }
    return result;
}

export function getRecommandGenre(ageGroup: number, taste: string, 
                                    data: CoffeePreference[]): string[] {
    // recommands 3-most-popular coffee-genre
    let recommands = data.filter(c => c.ageGroup === ageGroup && c.score >= 5);
    let genre = new Set(recommands.map(c => c.genre));
    let preferences = [];

    for (const g of genre.values()) {
        const filtered = recommands.filter(c => c.genre === g);
        const score = filtered.map(c => c.score)
                                .reduce((prev, current) => {
                                    return prev + current;
                                }, 0);
        let flavor = filtered.map(c => c.flavor)[0];    // only-one
        preferences.push({genre: g, flavor, score});
    }
    preferences.sort(function(a, b) {
        if (a.flavor === taste) {
            return 1;
        }
        const aScore = a.score;
        const bScore = b.score;
        if (aScore < bScore) {
            return 1;
        }
        return (aScore > bScore) ? -1 : 0;
    });
    return preferences.map(p => p.genre).slice(0, 3);
}

export function getRecommandCoffee(genre: string[], data: CoffeePreference[]) {
    let preferences = data.filter(c => genre.includes(c.genre));
    let types = new Set(preferences.map(c => c.type));
    let recommands = [];

    for (let t of types.values()) {
        let score = preferences.filter(c => c.type === t)
                                .map(c => c.score)
                                .reduce((prev, current) => {
                                    return prev + current;
                                }, 0);
        recommands.push({type: t, score: score});
    }
    recommands.sort(function(a, b) {
        const aScore = a.score;
        const bScore = b.score;
        if (aScore < bScore) {
            return 1;
        }
        return (aScore > bScore) ? -1 : 0;
    });
    return recommands.map(r => r.type).slice(0, 3);
}
