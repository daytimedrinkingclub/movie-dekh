import Navbar from "./components/Nav";
import SubmitForm from "./components/SubmitForm";
import RandomPopcornBackground from "./components/RandomPopcorn";
import Trending from "./components/Trending";
import MovieCard from "./components/MovieCard";

function App() {

  return (
    <>
      <Navbar />
      <div className="absolute z-[-1]">
        <RandomPopcornBackground />
      </div>
      <SubmitForm />
      <div className="overflow-hidden border border-white">
        <Trending />
      </div>
      <MovieCard />
    </>
  )
}

export default App
