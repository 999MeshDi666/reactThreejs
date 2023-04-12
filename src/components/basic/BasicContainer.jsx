import BasicBox from "./BasicBox";

const BasicContainer = ()=>{
    return(
        <>
            <BasicBox position = {[0,0,0]} color="pink" texture="textures/terrain-roughness.jpg" />
            <BasicBox position = {[2,0,0]} color="purple" texture="textures/terrain-normal.jpg"/>
        </>
    )
}
export default BasicContainer;