import './App.css'
import Composant1 from './components/composant1/Composant1'

function App() {

  return <>
    <p className='red'>coucou</p>
    <Composant1 nom='Khun' nom2='Mike' />
    <hr />
    <Composant1 nom='Alice' nom2='Caroline'/>
  </>  
}

export default App
