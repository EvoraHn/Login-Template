
import "./loginBlack.css";
function LoginTemplate({ title }){
    
  return (
      //<img src="https://miro.medium.com/max/382/1*2us2ZKD01bpesGFHGU4caQ.gif"  alt="Animación " />
    <div>
        <link rel="stylesheet" href="./loginBlack.css">
        </link>
        <script src="./LoginBlack" ></script>
        <div class="container">
                <div class="img">
                    <img src="https://images.vexels.com/media/users/3/220526/isolated/preview/a29d1cf22ba023bc146ee7395fc7767c-animal-mam-iacute-fero-mono-by-vexels.png"  alt="Animación " />
                </div>
            <div class="login-container">
                <form action="Login.html" method="post" onsubmit="return validacionDeLogin()">
                    <img class="avatar" src="https://images.emojiterra.com/google/android-10/512px/1f331.png" alt="avatar"/>
                    <h2>Bienvenido</h2>
                    <div class="input-div one">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            
                            <input type="text" class="input" name="username" id="username" placeholder="Nombre de usuario" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="input-div two">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            
                            <input type="password" class="input" name="password" id="password" placeholder="Contraseña"autocomplete="off"/>
                        </div>
                    </div>
                    
                    <a href="#"/> 
                    <input type="submit" class="btn" value="Ingresar"/>
                
                </form>
            
            </div>
        </div>
        <script src="../JavaScript/Login.js"></script>
    </div>
  );
}
export default LoginTemplate;