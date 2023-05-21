
const RecommandComponent = () => {
    const location = window.location;

    const getRecommands = () => {
        const params = new URLSearchParams(location.search);

        const key = params.get("key");
        return window.sessionStorage.getItem(key);
    }

    // TODO: 가져온 데이터를 순서대로 출력하고
    //       설명을 출력한다.
    // TODO: 꾸준한 데이터를 쌓기 위해서 3개 중 하나를 클릭하면
    //       CSV 파일에 기록하도록 한다.
    return (
        <>
            {console.log(getRecommands())}
        </>
    );
}

export default RecommandComponent;
