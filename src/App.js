import logo from './logo.svg';
import './App.css';
import BrandHeader from './Components/BrandHeader/BrandHeader';
import Cards from './Components/Cards/Cards';
import CardHolder from './Components/Cards/CardHolder';
/*

<CardHolder>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
</CardHolder>
*/

function App() {
  return (
    <section>
      <h1>Hola Mundo !!!</h1>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
      
    </section>
  );
}

export default App;
