import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";
import "./container.css";
function Container({ title }){
    //<img src="https://cdn.pensador.com/img/imagens/pe/ns/pensador_domingo_a_tarde_c.jpg"  alt="PlaceHolder Img long1" />
/*  return (
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
          <div>
              <img src="https://cdn.pensador.com/img/imagens/pe/ns/pensador_domingo_a_tarde_c.jpg"  alt="PlaceHolder Img long1" />
          </div>
          
          <div class="row-start-1 col-start-2 col-span-2 items-center text-center justify-items-center  ">
          <Form >
            <FormField
           
              type="text"
              id="username"
              fname="username"
              onChange={myOnChange}
              caption="Correo Electrónico : "
              value={formData.username}
              error={formData.usernameError}
              placeholder="   Tu correo"
            ></FormField>
            
            
          </Form>
          <Form>
            <FormField
             
                type="password"
                id="password"
                fname="password"
                onChange={myOnChange}
                caption="Contraseña : "
                value={formData.password}
                error={formData.passwordError}
                placeholder="    Contraseña"
              ></FormField>

          </Form>
          <Form>
          <FormAction
            
              caption="Enviar"
              onClick={
                (e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  const { username, password } = formData;
                  alert(`Usuario:${username} Psswd:${password}`);
                }
              }
            >
            </FormAction>
          </Form>
          
          </div>
          

      </div>
    );
  }
  export default Container;*/ 

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
    //<div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-4">


    //https://img2.freepng.es/20180322/wxq/kisspng-the-evil-monkey-emoji-three-wise-monkeys-clip-art-evil-monkey-cliparts-5ab353b18057b9.5520305015217018095257.jpg
    return (
      <div class="grid gap-0.001 grid-cols-1 md:grid-cols-2 p-2">
      
          <div class="imagen">
              <img src="https://miro.medium.com/max/382/1*2us2ZKD01bpesGFHGU4caQ.gif"  alt="PlaceHolder Img long1" />
          </div>
          
          <div class="row-start-1 col-start-2 col-span-2 items-center text-center justify-items-center  ">
            <div class="formulario">
                <FormField
                  type="text"
                  id="username"
                  fname="username"
                  onChange={myOnChange}
                  caption="Correo : "
                  value={formData.username}
                  error={formData.usernameError}
                  placeholder="   Escribe tu correo"
                ></FormField>
                
                
              
                <FormField
                  
                    type="password"
                    id="password"
                    fname="password"
                    onChange={myOnChange}
                    caption="Contraseña : "
                    value={formData.password}
                    error={formData.passwordError}
                    placeholder="    Contraseña"
                  ></FormField>

              
              <FormAction
                
                  caption="Enviar"
                  onClick={
                    (e)=>{
                      e.preventDefault();
                      e.stopPropagation();
                      const { username, password } = formData;
                      alert(`Usuario:${username} Psswd:${password}`);
                    }
                  }
                >
                </FormAction>
            </div>
          </div>
      </div>
    );
  }
  export default Container;
  