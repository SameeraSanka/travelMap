
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [color, setColor] = useState('black'); // Initial color is black

  // useEffect is like saying, "Hey React, do something after the component has been shown on the screen."
  useEffect(() => {
    // Let's change the color of the paragraph to the color state value.
    document.getElementById('myParagraph').style.color = color;
  }, [color]); // The [color] here means, "Hey React, only do this when the color changes."

  // When the button is clicked, change the color state to red.
  const handleClick = () => {
    setColor('red');
  };

  return (
    <div>
      <p id="myParagraph">I can change color!</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default MyComponent;
