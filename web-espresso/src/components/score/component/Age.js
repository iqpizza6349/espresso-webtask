
const Age = ({setAge}) => {

    const handleChange = (e) => {
        setAge(e.target.value);
    }

    return (
        <div style={{position: 'absolute'} && {marginLeft: 0}}>
            <img src={`${process.env.PUBLIC_URL}/images/text/age.png`} alt='나이'/>
            <input type='text' placeholder='insert your age' style={{marginLeft: 190}} onChange={handleChange}/>
        </div>
    )
};

export default Age;
