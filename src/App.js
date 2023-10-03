import { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga4";
import OneSignal from 'react-onesignal';
function App() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: " G-X3EGZDWRZR",
      },
    ]);
    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
    console.log("analysics add");
    OneSignal.init({ appId: '5ebbed67-be95-4630-b63e-7ec37f467d39' }).then(() => {
      OneSignal.Slidedown.promptPush();
      // do other stuff
    })
  }, []);

  // Send pageview with a custom path

  return (
    <div className="App">
      <h1>I AM VASU BHIMANI</h1>
    </div>
  );
}

export default App;
