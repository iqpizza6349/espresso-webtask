import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Score from './component/Score';
import Age from './component/Age';
import { requestGetMethod } from '../../utils/AxiosUtil';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const ScoreComponent = () => {
    const navigate = useNavigate();
    const [age, setAge] = useState(-1);
    const [sugar, setSugar] = useState(0);
    const [acidity, setAcidity] = useState(0);
    const [bitter, setBitter] = useState(0);

    // axios 로 가져온 데이터를 sessionStorage 에 저장
    // 그리고 해당 sessionStorage 키를 param 으로 넘겨줌
    const recommandsCoffee = () => {
        requestGetMethod(`/coffee/recommand?age=${age}&sugar=${sugar}&acidity=${acidity}&bitter=${bitter}`)
            .then(res => {
                const uuid = window.self.crypto.randomUUID();
                window.sessionStorage.setItem(uuid, JSON.stringify(res.data));
                return uuid;
            })
            .then(key => navigate(`/recommands?key=${key}`));
    }

    return (
        <>
            <Age setAge={setAge}/>
            <Score text={"sugar"} top={30} imgMargin={100} setScore={setSugar}/>
            <Score text={"acidity"} top={70} imgMargin={100} setScore={setAcidity}/>
            <Score text={"bitter"} top={70} imgMargin={120} setScore={setBitter}/>
            <div>
                <button className='no_outline_btn' onClick={recommandsCoffee}>
                    <img src={process.env.PUBLIC_URL + `/images/submit_button.png`} alt='추천 버튼'/>
                </button>
            </div>
        </>
    );
};

export default ScoreComponent;
