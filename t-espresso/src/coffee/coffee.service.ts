import { Injectable } from '@nestjs/common';
import { FlavorDto } from './coffee.dto';
import { getCSV, getRecommandCoffee, getRecommandGenre } from 'src/recommand/recommand.file';

@Injectable()
export class CoffeeService {

    getRecommands(flavor: FlavorDto): string[] {
        let csvData = getCSV();
        let genre = getRecommandGenre(10, this.getBestFlavor(flavor), csvData);
        return getRecommandCoffee(genre, csvData);
    }

    private getBestFlavor(flavor: FlavorDto): string {
        if (flavor.sugar === flavor.acidity && flavor.acidity === flavor.bitter) {
            return this.getDefaultFlavor(flavor.age);
        }

        if (flavor.sugar > flavor.acidity && flavor.sugar > flavor.bitter) {
            return "SWEET";
        }
        else if (flavor.acidity > flavor.sugar && flavor.acidity > flavor.bitter) {
            return "SOUR";
        }
        else {
            return "BITTER";
        }
    }

    private getDefaultFlavor(age: number): string {
        if (age >= 60) {
            return "BITTER";
        }
        else if (age >= 50) {
            return "SWEET";
        }
        else if (age >= 40) {
            return "SOUR";
        }
        else if (age >= 30) {
            return "BITTER";
        }
        else if (age >= 20) {
            return "BITTER";
        }
        else if (age >= 10) {
            return "SWEET";
        }
        throw Error("Illegal Argument Exception Occurred!");
    }
}
