import propTypes from 'prop-types';

function Input({change , type='text' , id='' ,text = 'input', bgColor='bg-green-300', brColor='border-green-500 dark:border-blue-100' }){
  return(
    <input className= {`${bgColor} dark:bg-blue-300/80 text-white p-1.5 border-2 ${brColor} rounded-sm w-full
    placeholder:text-gray-500 dark:placeholder:text-green-200 placeholder:italic placeholder:pl-1.5 `} 
        type={type} 
        id={id} 
        autoComplete='off'
        onChange={change} required
        placeholder= {text} />
  )
}

Input.propTypes ={
  change: propTypes.func,
  id: propTypes.string,
  type: propTypes.string,
  text: propTypes.string,
  bgColor: propTypes.string,
  brColor: propTypes.string
  
}

export default Input;