import './App.css';
import MainAppBar from './components/layout/MainAppBar';
import ScrollView from './components/layout/ScrollView';

import { Container} from '@material-ui/core'
state = {
  metrics = {
    'capacity': 5,
    'customerCount': 2
  }
}
function App() {
  return (
    <div className="App">
      <Container>
        <MainAppBar />
        <Box>
          <ScrollView metrics={this.state.metrics}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
