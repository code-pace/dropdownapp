import './App.css';
import React, {useState} from "react";
import data from "./components/dataContent.js";
import ReadText from "./components/ReadText";
import ImageSlider from './components/ImageSlider';
import SliderContent from "./components/SliderContent";
import ColorGenerator from './components/ColorGenerator';
function App() {
  const [datas, setDatas] = useState(data);
  const [slide, setSlide] = useState(SliderContent);
  return (
    <div className="App">
      <ReadText datas={datas}/>
      <ImageSlider slide={slide} />
      <ColorGenerator />
    </div>
  );
}

export default App;
