import propTypes from 'prop-types';

function Button({ children, bgColor='bg-green-500 dark:bg-blue-500', accion }){
  return(
    <button className={`${bgColor} py-3 px-10 rounded-md capitalize font-semibold
    text-blue-950 hover:bg-green-700 hover:text-white
    dark:text-green-950 dark:hover:bg-blue-700  
    transition duration-300 ease-in-out`}
    onClick={accion}
    >{children}</button>
  )
}

Button.propTypes ={
  bgColor: propTypes.string,
  accion:propTypes.any,
  children: propTypes.string,
}

export default Button