import { useEffect } from "react";
import { Button, H1, ColorContainer, Input, Tagtext, Instructions } from "../../components/components";
import { useState } from "react";

const USER_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;






function LoginSign() {
  const [action, setAction] = useState('Inicia Sesion');

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPdw, setMatchPdw] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name)
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd)
    setValidPwd(result);

    const match = pwd === matchPdw;
    setValidMatch(match);

  }, [pwd, matchPdw]);



  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <H1>{action}</H1>
      <ColorContainer>
      <form action="">
      <div className="flex flex-col justify-center items-center space-y-5">
          <div className={`flex flex-col gap-1 w-full ${action === 'Inicia Sesion'? 'hidden': 'block'}`}>
            <Tagtext>Nombre</Tagtext>
            <Input type="text" 
                  id="name" 
                  change={(e) => setName(e.target.value)}
                  text="Nombre"
            />
            <Instructions>
                Debe de ser un nombre entre 3 y 30 caracteres <br />
                Debe de comenzar con una letra <br/>
                Solo puede contener letras y números
            </Instructions>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Tagtext>Email</Tagtext>
            <Input text="Email"/>
            <Instructions>
                Debe de ser un nombre entre 3 y 30 caracteres <br />
                Debe de comenzar con una letra <br/>
                Solo puede contener letras y números
            </Instructions>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Tagtext>Contraseña</Tagtext>
            <Input text="Contraseña"/>
          </div>
          <div className={`flex flex-col gap-1 w-full ${action === 'Inicia Sesion'? 'hidden': 'block'}`}>
            <Tagtext>Repetir contraseña</Tagtext>
            <Input text="Contraseña"/>
          </div>
          <Button>{action}</Button>
          <Tagtext>
            {action === 'Inicia Sesion'? 'No tienes una cuenta? ':'Tienes una cuenta? '} 
            <a onClick={() => action === 'Inicia Sesion'? setAction('Registrate'): setAction('Inicia Sesion')} 
            className="text-blue-500 hover:text-blue-400 cursor-pointer 
            dark:text-green-500 dark:hover:text-green-400 
            hover:underline">
              {action}</a>
              </Tagtext>
        </div>
      </form>
      </ColorContainer> 
    </section>
  );
}

export default LoginSign;