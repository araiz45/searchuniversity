import { Form } from "./component/Form";
import Navbar from "./component/Navbar";
import { Page } from "./component/Page";
import NoteState from "./context/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Form />
        <Page />
      </NoteState>
    </>
  );
}

export default App;
