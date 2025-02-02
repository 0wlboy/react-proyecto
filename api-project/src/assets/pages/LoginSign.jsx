/**
 * funcionalidad 
 *usuario se registra
  se guarda los datos en localstorage
  ya tiene el login activo. El login se puede borrar si es que cierra sesion
  el login tiene su llave unica que es la combinacion del nombre y un id unico
 * 
 */

import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {
  Button,
  H1,
  ColorContainer,
  Input,
  Tagtext,
  Instructions,
} from "../../components/components";
import { getItem, setItem } from "../../utils/localStorage";

const USER_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,30}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;

function LoginSign() {

  
  const [action, setAction] = useState('Iniciar Sesion');

  const [usernameValid, setUsernameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false); 
  const [pwdMatch, setPwdMatch] = useState(false);

  const [login, setLogin] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    pwd: "",
  });
  
  const [usuarios, setUsuarios] = useState([]); // Nuevo estado para almacenar la lista de usuario

  useEffect(() => {
    const item = getItem({ key: "usuarios" });
    if (item) {
      setUsuarios(Array.isArray(item) ? item : [item]); // Asegúrate de tener un array de usuarios
    }
  }, []);

  function guardar (){
    const nuevosUsuarios = [...usuarios, user]
    setUsuarios(nuevosUsuarios);
    setLogin(true); 
    setItem({ key: "usuarios", value: nuevosUsuarios });
    setItem({ key: `login`, value: login });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        !USER_REGEX.test(value) ? setUsernameValid(false) : setUsernameValid(true);
        break;
      case 'email':
        !EMAIL_REGEX.test(value) ? setEmailValid(false) : setEmailValid(true);
        break;
      case 'pwd':
        !PWD_REGEX.test(value)? setPwdValid(false) : setPwdValid(true);
        break;
      default:
        break;
    }}

  const handleValidationLogin = () => {
    const emailIngresado = user.email;
    const pwdIngresada = user.pwd;

    if (!usuarios || usuarios.length === 0) {
      alert("No hay usuarios registrados.");
      return;
    }

    const usuarioEncontrado = usuarios.find(usuario => {
      return usuario.email === emailIngresado && usuario.pwd === pwdIngresada;
    });

    if (usuarioEncontrado) {
      alert(`Bienvenido ${usuarioEncontrado.name}`);
      setLogin(true);
      setItem({ key: `login`, value: login });
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  const handleRepeatPwdChange = (e) => {
     user.pwd === e.target.value ? setPwdMatch(true) : setPwdMatch(false)
     ; // Actualiza la validación de contraseñas
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <H1>{action}</H1>
      <ColorContainer>

        {(action === 'Iniciar Sesion' )&& (
          <form>
          <div className="flex flex-col justify-center items-center space-y-5">

            <div className="flex flex-col gap-1 w-full">
              <Tagtext>Email</Tagtext>
              <Input
                type="text"
                name="email"
                text="Email"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Tagtext>Contraseña</Tagtext>
              <Input
                type="password"
                name="pwd"
                text="Contraseña"
              />
            </div>
            <Link to={`/`}>
              <Button 
                disable={usernameValid && emailValid && pwdValid && pwdMatch?true : false}
                accion={handleValidationLogin}>
                  Registrarse
              </Button>
            </Link>

            <Tagtext>No tienes una cuenta?  
              <a
                onClick={() => setAction('Registrate')}
                className="text-blue-500 hover:text-blue-400 cursor-pointer 
                dark:text-green-500 dark:hover:text-green-400 
                hover:underline"
              >
                 Registrate
              </a>
            </Tagtext>
          </div>
        </form>
        )}

        {(action === 'Registrate' )&& (
          <form>
          <div className="flex flex-col justify-center items-center space-y-5">
            <div
              className={`flex flex-col gap-1 w-full`}
            >
              <Tagtext>Nombre</Tagtext>
              <Input
                type="text"
                name="name"
                change={handleChange}
                text="Nombre"
              />
              {!usernameValid && (<Instructions >
                Debe de ser un nombre entre 3 y 30 caracteres <br />
                Debe de comenzar con una letra <br />
                Solo puede contener letras y números
              </Instructions>)}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Tagtext>Email</Tagtext>
              <Input
                type="text"
                name="email"
                change={handleChange}
                text="Email"
              />
              {!emailValid && (<Instructions show={!emailValid}>
                Debe de ser un nombre entre 3 y 30 caracteres <br />
                Debe de comenzar con una letra <br />
                Solo puede contener letras y números
              </Instructions>)}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Tagtext>Contraseña</Tagtext>
              <Input
                type="password"
                name="pwd"
                change={handleChange}
                text="Contraseña"
              />
              {!pwdValid && (<Instructions>
                Debe de ser un nombre entre 3 y 30 caracteres <br />
                Debe de comenzar con una letra <br />
                Solo puede contener letras y números
              </Instructions>)}
            </div>

            <div
              className={`flex flex-col gap-1 w-full`}
            >
              <Tagtext>Repetir contraseña</Tagtext>
              <Input
              type="password"
              name="repeaPwd"
              change={handleRepeatPwdChange}
              text="Contraseña" />
            </div>
            <Link to={`/`}>
              <Button 
                disable={usernameValid && emailValid && pwdValid && pwdMatch?true : false} 
                accion={guardar}>
                Registrarse
              </Button>
            </Link>

            <Tagtext> Tienes una cuenta? 
              <a
                onClick={() => setAction('Iniciar Sesion')}

                className="text-blue-500 hover:text-blue-400 cursor-pointer 
                dark:text-green-500 dark:hover:text-green-400 
                hover:underline"
              >
                Inicia sesion
              </a>
            </Tagtext>
          </div>
        </form>
        )}
      </ColorContainer>
    </section>
  );
};

export default LoginSign;
