import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board'
import { getBoardsByUser } from './data/mockData';

function App() {
  const current_user_id = 1;
  const current_board = getBoardsByUser(current_user_id)[0]
  return (
    <div className="App">
      <Board board={current_board} />
    </div>
  );
}

export default App;
