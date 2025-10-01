import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
// import States from "./components/States/States";
import MainContainer from "./components/MainContainer/MainContainer";
import { Suspense } from "react";

const loadOrder = () => fetch("/orders.json").then((res) => res.json());
function App() {
  const orderPromise = loadOrder();
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Heading>Kitchen Room</Heading>
      </header>
      <section>
        <Suspense fallback="loading...🔁">
          <MainContainer orderPromise={orderPromise}></MainContainer>
        </Suspense>
      </section>
    </>
  );
}

export default App;
