import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
//title="Mi App con react."
function BrandHeader({ children }){
  return (
    <header>
      
      <img class="logo"src="https://upload.wikimedia.org/wikipedia/en/0/02/PicsArt_company_logo.png"/>
      <NavBar></NavBar>
      
    </header>
  );
}

export default BrandHeader;
