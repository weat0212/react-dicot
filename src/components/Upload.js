import React from 'react'

const Upload = ({uploadFile, setUploadFile}) => {

  function handleUpload() {
    console.log(uploadFile);
  }

  return (
    <>
    <input type="file" onChange={(e) => setUploadFile(e.target.files[0])}/>
    <button onClick={handleUpload}>檔案上傳</button>
    </>
  )
}

export default Upload