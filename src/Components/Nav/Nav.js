import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "./logo.png";

function Nav() {
    const [searchInputValue, setSearchInputValue] = useState("");
    const history = useHistory();

    function click() {
        if (Number.parseInt(searchInputValue)) {
            history.push(`/cars/${searchInputValue}`);
        } else if (searchInputValue !== "") {
            history.push(`/cars/color/${searchInputValue}`)
        }
        setSearchInputValue("");
    }

    return (
        <nav className="nav">
            <div className="container">
                <Link to="/"><img className="nav__logo" src={logo} alt="logo"/></Link>
                <div className="nav__search">
                        <label>Search car by id or color: </label>
                        <input onChange={event => {
                            setSearchInputValue(event.target.value);
                        }}
                               value={searchInputValue}
                               type="text"
                               name="search"
                        />
                    <button onClick={click}>Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
