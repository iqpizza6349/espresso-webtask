
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const CrownComponent = ({ rank, left }) => {
    const crowns = [
        "first_",
        "second_",
        "third_"
    ];

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/images/crown/${crowns[rank]}crown.png`} 
                alt="crown"
                className="crown"
                style={{left}}
            />
        </>
    );
}

export default CrownComponent;
