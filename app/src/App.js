import "./App.css";
import Footer from "./components/Footer";
import GuessedPlayers from "./components/GuessedPlayers";
// import components
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App" class="bg-slate-500 flex flex-col h-screen">
            <Navbar />
            <SearchBar />
            <GuessedPlayers />
            <Footer />
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
