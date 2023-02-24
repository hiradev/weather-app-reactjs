import "./index.css";
import { InfoCard} from "./Components/InfoCard";
import { WeatherProvider } from "./Context";

function App() {
  return (
    <WeatherProvider>
      <div className="wrapper">
        <div className="container">
          <h1>Forecast</h1>
          <InfoCard />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;