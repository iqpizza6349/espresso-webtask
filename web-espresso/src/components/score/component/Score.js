import { useState } from 'react';

import { ScoreItem } from './ScoreItem';

const Score = ({text, top, imgMargin, setScore}) => {
    const item = ScoreItem.find(it => it.name === text);

    const [imageSrc, setImageSrc] = useState(Array(5).fill(item.item_img.off));

    const handleClick = (index) => {
        for (let i = 0; i < index + 1; i++) {
            imageSrc[i] = item.item_img.on;
        }
        for (let i = 4; i > index; i--) {
            imageSrc[i] = item.item_img.off;
        }
        
        setScore(index + 1);
        setImageSrc([...imageSrc]);
    }

    return (
        <div style={{position: 'absolute'} && {marginTop: top}}>
            <img src={item.img} style={{marginLeft: 0}} alt={`${text}`}/>
            {imageSrc.map(function (value, index) {
                return (
                    <img src={value} style={{marginLeft: imgMargin}} alt='이미지' key={`${index + text}`} 
                            onClick={() => handleClick(index)}/>
                )
            })}
        </div>
    )
};


export default Score;