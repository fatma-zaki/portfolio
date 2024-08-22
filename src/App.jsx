import Header from "./component/1-header/Header"
import Hero from "./component/2-hero/Hero"
import Main from "./component/3-main/Main"
import Contact from "./component/4-contact/Contact"
import { Footer } from "./component/5-footer/Footer"

function App() {
  

  return (
    <div className="container">
      <Header />
      <div className="divider"/>
      <Hero />
      <div className="divider"/>
      <Main />
      <div className="divider"/>
      <Contact />
      <div className="divider"/>
      <Footer />
    </div>
  )
}

export default App
