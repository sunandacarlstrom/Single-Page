import Logotype from "../../assets/images/pokemon-logo.jpg"; 

const Navbar = () => {
    return(
        <nav>
            <div>
                <ul>
                    <li className="logo">
                        <img className="pokemon-logo" src={Logotype} alt="logotype" />
                    </li>
                    <li className="btn-menu">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="btn-menu">
                        <a href="#">News</a>
                    </li>
                    <li className="btn-menu">
                        <a href="#">Products</a>
                    </li>
                    <li className="btn-menu">
                        <a href="#">About</a>
                    </li>
                    <li className="btn-menu">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
    </nav>
    )
}

export default Navbar; 