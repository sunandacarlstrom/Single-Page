import "./assets/styles/App.css";
import "./assets/styles/Colors.css";

import Navbar from "./components/shared/Navbar";

const App = () => {
    return (
        <>
        <Navbar />
            <section className="container">
                <h1>Välkommen till Pokémon Webshop</h1>
            </section>

            <footer className="footer">
                <p>&copy; 2023 Pokémon Webshop</p>
            </footer>
        </>
    );
}

export default App;
