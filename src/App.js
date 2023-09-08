import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board'
import { getBoardsByUser } from './data/mockData';

function App() {
  const current_user_id = 1;
  const current_board = getBoardsByUser(current_user_id)[0]
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Board board={current_board} />
      </div>
    </DndProvider>
  );
}

export default App;
