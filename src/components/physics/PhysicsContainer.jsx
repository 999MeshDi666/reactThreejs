
import { Physics } from "@react-three/cannon";
import PhysicsBox from "./PhysicsBox";
import PhysicsPlane from "./PhysicsPlane";
const PhysicsContainer = () =>{
    return(
        <Physics>
            <PhysicsBox/>
            <PhysicsBox position = {[0,8,0]}/>
            <PhysicsPlane/>
        </Physics>
    )
}
export default PhysicsContainer;