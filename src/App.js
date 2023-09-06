import { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga4";
function App() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: " G-X3EGZDWRZR",
      },
    ]);
    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
    console.log("analysics add")
  }, []);

  // Send pageview with a custom path

  return (
    <div className="App">
      <h1>I AM VASU BHIMANI</h1>
    </div>
  );
}

export default App;
