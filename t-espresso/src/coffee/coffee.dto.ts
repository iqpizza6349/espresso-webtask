import { Transform } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';
import { toNumber } from 'src/common/helper/cast.helper';

export class FlavorDto {
    
    @IsInt()
    @Min(0)
    @Max(5)
    @Transform(({ value }) => toNumber(value, { default: 1, min: 1, max: 5 }))
    public sugar: number;

    @IsInt()
    @Min(0)
    @Max(5)
    @Transform(({ value }) => toNumber(value, { default: 1, min: 1, max: 5 }))
    public acidity: number;

    @IsInt()
    @Min(0)
    @Max(5)
    @Transform(({ value }) => toNumber(value, { default: 1, min: 1, max: 5 }))
    public bitter: number;
}
