import { Suspense } from "react";
import Graces from './Graces'

export default function GracesPage(){
    return(
        <>
            <Suspense fallback={<span>Facendomi dare due consigli da Michelangelo...</span>}>
                <Graces />
            </Suspense>
        </>
    )
}