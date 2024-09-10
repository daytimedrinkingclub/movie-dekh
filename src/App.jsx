import Navbar from "./components/Nav";
import SubmitForm from "./components/SubmitForm";
import RandomPopcornBackground from "./components/RandomPopcorn";

function App() {

  return (
    <>
      <Navbar />
      <div className="absolute z-[-1]">
        <RandomPopcornBackground />
      </div>
      <SubmitForm />
    </>
  )
}

export default App
