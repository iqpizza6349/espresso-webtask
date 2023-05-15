import { Injectable } from '@nestjs/common';
import { FlavorDto } from './coffee.dto';

@Injectable()
export class CoffeeService {

    getRecommands(flavor: FlavorDto): string {
        return 'espresso';
    }
}
