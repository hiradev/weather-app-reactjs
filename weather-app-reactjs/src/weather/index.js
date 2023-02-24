import "./index.css";
import Grid from '@react-css/grid';
import Search from './Search';
import Colombo from './Colombo';
import Forecast from './Forecast';


function App() {
    
  return (
    <div className="App">
      <header className="App-header">
        <Grid >
            <Grid.Item>
                <Colombo />
            </Grid.Item>
            <Grid.Item>
                <Search />
            </Grid.Item>
            <Grid.Item>
              <Forecast />
            </Grid.Item>
        </Grid>
      </header>
    </div>
  );
}

export default App;