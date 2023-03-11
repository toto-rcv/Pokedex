import React from "react";

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>

            <img src={imgUrl} alt="pokeapi-logo" className="navbar-img" />
            <div>
                ❤️
            </div>
        </nav>

    )
}

export default Navbar