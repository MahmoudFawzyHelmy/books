import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBooke = (title) => {
    console.log("the title you create: ", title);
  };
  return (
    <div>
      <BookCreate onCreate={createBooke} />
    </div>
  );
}

export default App;
