const Planet = (props) => {

    
    return ( 
        <div>
            {props.planet.isGasPlanet && <h4>{props.planet.name}</h4>}
        </div>
     );
}
 
export default Planet;