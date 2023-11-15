import "./App.css";
import Footer from "./components/Footer";
import GuessedPlayers from "./components/GuessedPlayers";
// import components
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <Navbar class="bg-red-600 w-full" />
            <SearchBar class="bg-green-600" />
            <GuessedPlayers class="bg-blue-600" />
            <Footer class="bg-yellow-500" />
            {/* example react code }
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            { */}
        </div>
    );
}

export default App;
