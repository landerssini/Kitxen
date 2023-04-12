import { GoBack } from './Components/GoBack'
import { Navbar } from './Components/Navbar'
import { Router } from './Router/Router'

function App() {
console.log(import.meta.env.VITE_REACT_APP_MY_API_KEY);
  return (
    <>
      <Navbar />
      <GoBack />
      <Router />
    </>
  )
}

export default App
