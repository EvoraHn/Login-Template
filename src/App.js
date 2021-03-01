import logo from './logo.svg';
import './App.css';
import BrandHeader from './Components/BrandHeader/BrandHeader';
import Cards from './Components/Cards/Cards';
import CardHolder from './Components/Cards/CardHolder';
import Login from './Components/Login/Login';
import Image from './Components/Images/Image';
import Container from './Components/Login/container';
// <img src="https://cdn.pensador.com/img/imagens/pe/ns/pensador_domingo_a_tarde_c.jpg" alt="PlaceHolder Img long1" />

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
     
      <Container>
        
      </Container>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
      
    </section>
  );
}

/*<Image></Image>

<Image></Image>
      <Login></Login>




*/








export default App;
