import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx"
import "./App.css";
import Interests from "./components/Interests.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <Info />
          <About />
          <Interests/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
