import Timer from "../app-timer/app-timer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row align-items-center">
          <h4 className="header">Happy New Year 2023</h4>
          <div className="col-4 col_app">
            <Timer deadline="December, 31, 2022" />
          </div>
        </div>
        <div className="row align-items-center">
          <h4 className="header">Happy New Year 2024</h4>
          <div className="col-4 col_app">
            <Timer deadline="December, 31, 2023" />
          </div>
        </div>
        <div className="row align-items-center ">
          <h4 className="header">Happy New Year 2025</h4>
          <div className="col-4 col_app">
            <Timer deadline="December, 31, 2024" />
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
