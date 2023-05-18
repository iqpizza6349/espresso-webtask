import { useState } from 'react';
import Score from './component/Score';
import Age from './component/Age';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const ScoreComponent = () => {
    const [age, setAge] = useState(-1);
    const [sugar, setSugar] = useState(0);
    const [acidity, setAcidity] = useState(0);
    const [bitter, setBitter] = useState(0);

    return (
        <>
            <Age setAge={setAge}/>
            <Score text={"sugar"} top={30} imgMargin={100} setScore={setSugar}/>
            <Score text={"acidity"} top={70} imgMargin={100} setScore={setAcidity}/>
            <Score text={"bitter"} top={70} imgMargin={120} setScore={setBitter}/>
            <div>
                <button className='no_outline_btn'>
                    <img src={process.env.PUBLIC_URL + `/images/submit_button.png`} alt='추천 버튼'/>
                </button>
            </div>
        </>
    );
};

export default ScoreComponent;
