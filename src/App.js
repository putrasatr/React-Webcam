import './App.css';
import React from 'react'
import Webcam from 'react-webcam'

function App() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <div className="App">
      {
        imgSrc ? <img src={imgSrc} alt=""></img> : <Webcam audio={false}
        ref={webcamRef}
        screenshotQuality={0.5}
        screenshotFormat="image/jpeg"
        className=" min-h-screen min-w-full"
        allowFullScreen
        />
      }

      <buttton onClick={capture}>Ambil</buttton>
    </div>
  );
}

export default App;
