import "./App.css";
import { FileExplorer } from "./components/FileExplorer";
import explorer from "./data";
function App() {
  return (
    <>
      <FileExplorer explorer={explorer} />
    </>
  );
}

export default App;
