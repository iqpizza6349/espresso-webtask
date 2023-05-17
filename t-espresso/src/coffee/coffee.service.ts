import { Injectable } from '@nestjs/common';
import { FlavorDto } from './coffee.dto';
import { getCSV, getRecommandCoffee, getRecommandGenre } from 'src/recommand/recommand.file';

@Injectable()
export class CoffeeService {

    getRecommands(flavor: FlavorDto): string[] {
        const csvData = getCSV();
        const ageGroup = this.calculateAgeGroup(flavor.age);
        const bestFlavor = this.getBestFlavor(flavor, ageGroup);
        let genre = getRecommandGenre(ageGroup, bestFlavor, csvData);
        return getRecommandCoffee(genre, csvData);
    }

    private calculateAgeGroup(age: number): number {
        if (age > 99) {
            return (age % 10) * 100;
        }
        else {
            return Math.floor(age / 10) * 10;
        }
    }

    private getBestFlavor(flavor: FlavorDto, ageGroup: number): string {
        if (flavor.sugar === flavor.acidity && flavor.acidity === flavor.bitter) {
            return this.getDefaultFlavor(ageGroup);
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
        switch (age) {
            case 10:
            case 50:
                return "SWEET";
            case 30:
            case 40:
                return "SOUR";
            default:
                return "BITTER";
        }
    }
}
