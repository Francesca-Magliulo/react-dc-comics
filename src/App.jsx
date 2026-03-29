import Header from "./components/Header"
import comics from "./data/comics";
import Main from "./components/Main"
import BlueBanner from "./components/BlueBanner"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <Header />
      <Main comics={comics} />
      <BlueBanner />
      <Footer />
    </>
  )
}

export default App
