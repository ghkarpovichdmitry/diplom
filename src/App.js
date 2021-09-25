import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/PageHeader/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/PageFooter/Footer";
import "./styles/App.scss";

function App() {
    return (
        <div id="app" className="App">
            <Router>
                <Header/>
                <AppRouter/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
