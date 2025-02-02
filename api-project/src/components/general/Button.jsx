import propTypes from 'prop-types';

function Button({ children, disable = false, bgColor='bg-green-500 dark:bg-blue-500', accion, type='button'}){
  return(
    <button className={`${bgColor} py-3 px-10 rounded-md capitalize font-semibold
    text-blue-950 hover:bg-green-700 hover:text-white
    dark:text-green-950 dark:hover:bg-blue-700  
    transition duration-300 ease-in-out
    ${disable?'cursor-not-allowed opacity-50':''}`}
    onClick={accion}
    type={type}
    >{children}</button>
  )
}

Button.propTypes ={
  bgColor: propTypes.string,
  accion:propTypes.any,
  disable: propTypes.bool,
  type: propTypes.string,
  children: propTypes.string,
}

export default Button