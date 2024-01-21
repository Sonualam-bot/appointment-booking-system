import "./App.css";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center pt-[20px] ">
        <Homepage />
      </div>
    </>
  );
}

export default App;
