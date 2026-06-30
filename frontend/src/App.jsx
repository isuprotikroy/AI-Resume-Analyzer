import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UploadCard from "./components/UploadCard";
import Results from "./components/Results";

function App() {
  return (
   <>
  <Navbar />
  <Hero />
  <Features />
  <UploadCard />
  <Results />
</>
  )
}

export default App