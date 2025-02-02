import propTypes from 'prop-types';

function Input({change , type='text' , name='',text = 'input', bgColor='bg-green-300' }){
  return(
    <input 
    className= {`${bgColor} dark:bg-blue-300/60 text-white py-2.5 pl-3 rounded-sm w-full
    placeholder:text-gray-500 dark:placeholder:text-green-200/80 placeholder:italic placeholder:pl-1.5 `} 
        type={type}  
        name={name}
        autoComplete='off'
        onChange={change} 
        placeholder= {text} />
  )
}

Input.propTypes ={
  change: propTypes.func,
  name: propTypes.string,
  type: propTypes.string,
  text: propTypes.string,
  bgColor: propTypes.string
  
}

export default Input;