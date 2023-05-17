import Score from './component/Score';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const ScoreComponent = () => {
    return (
        <>
            <div style={{position: 'absolute'} && {marginLeft: 0}}>
                <img src={`${process.env.PUBLIC_URL}/images/text/age.png`} alt='나이'/>
                <input type='text' placeholder='insert your age' style={{marginLeft: 190}}/>
                {/* <img src={`${process.env.PUBLIC_URL}/images/text/input.png`} style={{marginLeft: 190}} alt='label'/> */}
            </div>
            <Score text={"sugar"} top={30} imgMargin={100}/>
            <Score text={"acidity"} top={70} imgMargin={100}/>
            <Score text={"bitter"} top={70} imgMargin={120}/>
            <div>
                <button className='no_outline_btn'>
                    <img src={process.env.PUBLIC_URL + `/images/submit_button.png`} alt='추천 버튼'/>
                </button>
            </div>
        </>
    );
};

export default ScoreComponent;
