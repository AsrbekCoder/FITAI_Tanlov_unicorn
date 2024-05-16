import { useState, useEffect } from "react";
// import Loader Component
import Loader from "./components/Loader/Loader";
import { Routing } from "./libs/Routing";
import { Footer, Header, HeaderMains } from "./components";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useLocation } from "react-router";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    alanBtn({
      key: "5d50aa925acda396709f30b58259df242e956eca572e1d8b807a3e2338fdd0dc/prod",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="nk-app-root bg-darker is-dark has-mask ">
        {pathname !== "/try-demo" &&
          pathname !== "/login" &&
          pathname !== "/register" && (
            <Header>{pathname === "/" && <HeaderMains />}</Header>
          )}
        <Routing />
        {pathname !== "/try-demo" &&
          pathname !== "/login" &&
          pathname !== "/register" && <Footer />}
      </div>
    </>
  );
}

export default App;
