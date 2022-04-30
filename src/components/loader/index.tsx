import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loader(){
    return (
        <Skeleton count={4} height={40} width={300}/>
    )
}