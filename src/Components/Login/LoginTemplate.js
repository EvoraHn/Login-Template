import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";
import "./loginBlack.css";
function LoginTemplate({ title }){
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        usernameError : "",
        passwordError: ""
      });
    
      const _self = this;
      const myOnChange = function(e){
        const { name, value } = e.currentTarget;
        //validaciones
        let error = null;
        if (name ==="password"){
          error = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null :"Contraseña Inválida";
        }
        //
        setFormData({ ...formData, [name]: value , [name + "Error"]: error});
      }
  return (
      //<img src="https://miro.medium.com/max/382/1*2us2ZKD01bpesGFHGU4caQ.gif"  alt="Animación " />
    
                    //<img src="https://images.vexels.com/media/users/3/220526/isolated/preview/a29d1cf22ba023bc146ee7395fc7767c-animal-mam-iacute-fero-mono-by-vexels.png"  alt="Animación " />
                    <div>
                    <link rel="stylesheet" href="./loginBlack.css">
                    </link>
                    <script src="./LoginBlack" ></script>
                    <div class="container">
                            <div class="img">
                                <img src="https://images.vexels.com/media/users/3/220526/isolated/preview/a29d1cf22ba023bc146ee7395fc7767c-animal-mam-iacute-fero-mono-by-vexels.png"  alt="Animación " />
                            </div>
                        <div class="login-container">
                            <form class=" justify-center justify-items-center justify-self-center">
                                
                            <div class="flex -space-x-1 overflow-hidden">
                                <img class="avatar" src="https://images.emojiterra.com/google/android-10/512px/1f331.png" alt="avatar"/>
                            </div>
                            
                            <div class="roundedLogin">
                            <h2>Bienvenido</h2>
                                <br></br>
                                
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    
                                    <div>
                                        
                                        <FormField
                                            type="text"
                                            id="username"
                                            fname="username"
                                            onChange={myOnChange}
                                            value={formData.username}
                                            error={formData.usernameError}
                                            placeholder="Nombre de usuario"
                                            class="input"
                                        ></FormField>
                                    </div>
                                </div>
                                <div class="input-div two">
                                    <div class="i">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div>
                                        <FormField
                                            type="password"
                                            id="password"
                                            fname="password"
                                            onChange={myOnChange}
                                            value={formData.password}
                                            error={formData.passwordError}
                                            placeholder="Contraseña"
                                            class="input"
                                        ></FormField>
                                    </div>
                                </div>
                                <div>
                                <FormAction
                                    
                                    caption="Enviar"
                                    onClick={
                                    (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const { username, password } = formData;
                                        //alert(`Usuario:${username} Psswd:${password}`);
                                       if(username === "admin" && password === "password" )
                                            {
                                                alert("Acceso permitido");
                                                //window.open("../index.html");
                                                
                                            }
                                            else
                                            {
                                                alert("¡Acceso denegado! intenta de nuevo     [Prueba admin | password]");
                                    }
                                    }}
                                ></FormAction>
            
                                </div>
                                </div>
                            
                            </form>
            
                        </div>
                    </div>
                    
                </div>






  );
}
export default LoginTemplate;