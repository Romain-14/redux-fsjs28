import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const { info : { isLogged, alias }} = useSelector((state) => state.user);

    
    return (
        <header>
            <nav>
                <NavLink to={"/"}>home</NavLink>
                <NavLink to={"/shop"}>shop</NavLink>
                {isLogged ? (
                    <>
                        <NavLink to={"/dashboard"}>dashboard</NavLink>
                        <NavLink to={"/signout"}>signout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={"/signin"}>signin</NavLink>
                    </>
                )}
            </nav>

            {isLogged && <p>Vous n'avez rien dans votre panier {alias} 😭</p>}
        </header>
    );
}

export default Header;
