import React from 'react'
import { Link } from 'react-router-dom'

const StarShipPage = (props) => {
    const ship = props.getShip(props.match.params.id)

    return (
        <>
        {ship ? 
            <div>
                <h3>{ ship.name }</h3>
                <h5>Model: {ship.model}</h5>
                <Link to='/'>Home</Link>
            </div>
            :
            <div>Loading</div>

        }
        </>
    )
}

export default StarShipPage