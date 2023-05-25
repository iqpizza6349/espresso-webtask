import { MemorizedRank } from "./RankComponent";
import CrownComponent from "./CrownComponent";

const RecommandComponent = () => {
    const coffeePos = [260, 820, 1395];
    const crownPos = [320, 885, 1460];
    const location = window.location;

    const getRecommands = () => {
        const params = new URLSearchParams(location.search);
        const key = params.get("key");
        return JSON.parse(window.sessionStorage.getItem(key)).coffee;
    }
    
    return (
        <>
            {getRecommands().map((v, i) => {
                return (
                    <div>
                        <CrownComponent key={i+3} rank={i} left={crownPos[i]}/>
                        <MemorizedRank key={i+13} name={v} left={coffeePos[i]}/>
                    </div>
                );
            })}
        </>
    );
}

export default RecommandComponent;
