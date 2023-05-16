import { Controller, Get, Query } from '@nestjs/common';
import { FlavorDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly menuService: CoffeeService) {}

    @Get('/recommand')
    recommandCoffee(@Query() flavor: FlavorDto): string[] {
        return Object.assign({
            coffee: this.menuService.getRecommands(flavor)
        });
    }
}
