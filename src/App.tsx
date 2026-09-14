// import styles from './App.module.css'
import Composant1 from './components/composant1/Composant1'
import Composant2 from './components/composant2/Composant2'
import Composant3 from './components/composant3/Composant3'
import Exo1 from './components/exo1/Exo1'
import Exo2 from './components/exo2/Exo2'
import Exo4 from './components/exo4/exo4'


function App() {

  return <>
    <Composant1 nom='Khun' nom2='Mike' />
    <hr />
    <Composant1 nom='Alice' nom2='Caroline'/>
    <hr />
    <Exo1 />
    <hr />
    <Composant2 />
    <hr />
    <Exo2 />
    <hr />
    <Composant3 />
    <hr />
    <Exo4 />
  </>  
}

export default App
