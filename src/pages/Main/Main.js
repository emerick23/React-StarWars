import React from 'react'
import {Link} from 'react-router-dom'

const Main = (props) => {
    const ships = props.ships.map((ship, idx) => (
        <>
        <Link key={ship.name} to={{pathname: `/starship/${idx}`}}>{ship.name}</Link>
        <br />
      </>
    ))
    return (
        <div>
        {ships}
        </div>
    )
}

export default Main