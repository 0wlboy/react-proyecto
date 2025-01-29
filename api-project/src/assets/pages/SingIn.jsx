import { Input, Tagtext, Button, ColorContainer, H1 } from "../../components/components";

function SingIn(){
  return(
    <div className="flex flex-col items-center pt-10">
      <H1>Registro</H1>
      <ColorContainer>
        <div className="flex flex-col gap-5">
          <div> 
            <Tagtext>Primer Nombre</Tagtext>
            <Input text="Primer Nombre"></Input>
          </div>
          <div>
            <Tagtext>Segundo Nombre</Tagtext>
            <Input text="Segundo Nombre"></Input>
          </div>
          <div>
            <Tagtext>Correo</Tagtext>
            <Input text="Correo"></Input>
          </div>
          <div>
            <Tagtext>Contraseña</Tagtext>
            <Input text="Contraseña"></Input>
          </div>
          <div>
            <Tagtext>Repetir Contraseña</Tagtext>
            <Input text="Contraseña"></Input>
          </div>
          <div className="flex items-center justify-center">
           <Button>registrar</Button>
          </div>
        </div>
      </ColorContainer>
    </div>
  )
}

export default SingIn;