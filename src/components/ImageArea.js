import React, {useEffect, useState} from 'react'

function ImageArea({uploadFile}) {

    const [fileContent, setFileContent] = useState(null);

    useEffect(() => {
        if(uploadFile) {
            setFileContent(URL.createObjectURL(uploadFile));
        }
    }, [uploadFile]);

    return (
        <img src={fileContent} alt='圖檔'></img>
    )
}

export default ImageArea