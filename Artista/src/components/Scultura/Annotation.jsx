import { Html } from "@react-three/drei";

export default function Annotation({children, ...props}){
    return (
        <Html {...props} transform occlude="blending" geometry={<roundedPlaneGeometry args={[1.66, 0.47, 0.24]}/>}>
            <div className="annotation">{children}</div>
        </Html>
    )
}