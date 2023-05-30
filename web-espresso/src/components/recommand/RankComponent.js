import React from 'react';

import { CoffeeItem } from "./component/CoffeeItem";

export function RankComponent({ name, left }) {
    return (
        <>
            {CoffeeItem.filter((v) => v.name === name)
                        .map((coffee) => {
                            return (
                                <>
                                    <img src={coffee.img} alt="?" className='coffee' style={{left}}/>
                                    <p className='coffee-name' style={{left: left - 10}}>{coffee.simple_name}</p>
                                    <p className='coffee-description' style={{left}}>{coffee.describe}</p>
                                </>
                            )
                        })}
        </>
    );
}

export const MemorizedRank = React.memo(RankComponent);
