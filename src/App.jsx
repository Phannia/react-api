import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <Navbar 
      title='Rick and Morty App'/>    
    <MiApi />
    </>
  )
}

export default App
