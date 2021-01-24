import { Typography } from "@material-ui/core";
import React from "react";
import MultstepForm from "./MultistepForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" align="center" className="gtext">
          MULTISTEP FORM
        </Typography>
      </header>

      <div className="multistepform">
        <MultstepForm />
      </div>
    </div>
  );
}

export default App;
