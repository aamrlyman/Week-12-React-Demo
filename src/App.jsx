import React from 'react'
import ImagePresenter from './components/ImagePresenter';
import gifBoomstick from "./assets/giphy(2).gif"
import reactLogo from "./assets/giphy(1).gif"


function App() {
  return (
    <div className="App">
      Hello World!
      <ImagePresenter image = {gifBoomstick} altText = "Gif of my boomstick"/>
      <ImagePresenter image = {reactLogo} altText = "Binary Code Running"/>
      {/* ImagePresenter */}
    </div>
  );
}

export default App;

// both function calls
// useState() how components render and behave, holding ideas across renders
// useEffect() always happens after new render or state change 
//(if the state some something changes, do this) 
//Component life cycle methods (1)mounting (2)error Handling  (3)unmounting 
// React does all three of these things for us, we use to specify each of those 
// class componenets -- before hooks (Pre-2019) hooks are way more concise 