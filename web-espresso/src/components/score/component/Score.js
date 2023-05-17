// import { useState } from 'react';

import { ScoreItem } from './ScoreItem';

const Score = ({text, top, imgMargin}) => {
    // [score, setScore] = useState();
    
    const score = ScoreItem.find(it => it.name === text);
    const item = Array(5).fill(score.item_img.off);

    return (
        <div style={{position: 'absolute'} && {marginTop: top}}>
            <img src={score.img} style={{marginLeft: 0}} alt={`${text}`}/>
            {item.map(function (image) {
                return (
                    <img src={image} style={{marginLeft: imgMargin}} alt='점수 이미지'/>
                )
            })}
        </div>
    )
};


export default Score;