import './App.css';
import { useState } from "react";
import Upload from './components/Upload';
import PatientInfo from './components/PatientInfo';
import Label from './components/Label';
import ImageArea from './components/ImageArea';
import Canvas from './components/Canvas';

function App() {

  const [uploadFile, setUploadFile] = useState(null);

  return (
    <div className="App">
      <>
        <Upload setUploadFile={setUploadFile} uploadFile={uploadFile}/>
        <PatientInfo uploadFile={uploadFile}/>
        <ImageArea uploadFile={uploadFile}/>
        <Canvas/>
        <Label/>
      </>
    </div>
  );
}

export default App;
