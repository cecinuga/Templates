import BackgroundGradient from "./BackgroundGradient"
import GracesPage from "./Scultura/GracesPage"

export default function SculturaPage(){
    return(
        <>
            <BackgroundGradient bgColor={"#1a1b27"} gradient={false} move={false}/>
            <GracesPage />
        </>
    )
}