import './App.css';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState({});
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRows = (event) => {
    setRows(event.target.value);
  };

  const handleCols = (event) => {
    setCols(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const declaration = document.styleSheets[1].cssRules[2].style;
    const setProp1 = declaration.setProperty('grid-row', `span ${rows}`);
    const setProp2 = declaration.setProperty('grid-column', `span ${cols}`);
  };

  return (
    <>
      {!isSubmitted && <div className="App">
        <h1>Image Viewer 3x3 Span</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFile} required />
          <label htmlFor="rows">Rows</label>
          <select id="rows" onChange={handleRows} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="columns">Columns</label>
          <select id="columns" onChange={handleCols} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
      </div>}
      {isSubmitted && <div className='image-grid'>
        <div className='image1'>
          <img src={URL.createObjectURL(file)} />
        </div>
      </div>}
    </>
  );
}

export default App;
