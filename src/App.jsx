import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Section from './components/section/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
