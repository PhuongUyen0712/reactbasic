import TodoList from "./components/TodoList"
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'

function App() {
  return (
    <>
      <h3>Danh sách việc cần làm</h3>
      <Textfield name="add-todo" placeholder="Nhập việc cần làm"></Textfield>
      {/* <TodoList /> */}
    </>


  );

}

export default App;
