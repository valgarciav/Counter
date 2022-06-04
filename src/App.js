// useState is a nmaed import, so we can import it like this.
/* import React from 'react'
import { useState } from 'react' */
import React, { useState } from "react";

//Remember, you can interpolate JavaScript into JSX using {}.If you wanted to interpolate the counter into an h1 tag, it might look something like this:
function App() {
  let [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}
export default App;
