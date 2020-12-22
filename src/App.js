import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
