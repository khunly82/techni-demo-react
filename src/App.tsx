// import styles from './App.module.css'
import Composant1 from './components/composant1/Composant1'
import Composant2 from './components/composant2/Composant2'
import Exo1 from './components/exo1/Exo1'


function App() {

  return <>
    <Composant1 nom='Khun' nom2='Mike' />
    <hr />
    <Composant1 nom='Alice' nom2='Caroline'/>
    <hr />
    <Exo1 />
    <hr />
    <Composant2 />
  </>  
}

export default App
