import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
//title="Mi App con react." https://upload.wikimedia.org/wikipedia/commons/3/34/ZOO_Ko%C5%A1ice_Logo.png
//https://upload.wikimedia.org/wikipedia/en/0/02/PicsArt_company_logo.png
function BrandHeader({ children }){
  return (
    <header>
      
      <img class="logo"src="https://d34ip4tojxno3w.cloudfront.net/app/uploads/sites/10/2018/04/ahtarizoo-600x424.png"/>
      <NavBar></NavBar>
      
    </header>
  );
}

export default BrandHeader;
