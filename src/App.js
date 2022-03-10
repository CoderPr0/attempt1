import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import Features from './components/Features.js'
import Extension from './components/Extension.js'
import Questions from './components/Questions.js'
import Subscribe from './components/Subscribe.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Extension />
        <Questions />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;