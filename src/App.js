import Card from "./components/card";
import Head from "./components/head";

function App() {
  return (
    <div className="App max-w-[700px] m-auto ">
      <img
        className="absolute top-0 left-0 w-full h-[400px]"
        src="./images/bg-pattern.svg"
        alt="bg-pattern"
      />
      <Head />
      <Card />
    </div>
  );
}

export default App;
