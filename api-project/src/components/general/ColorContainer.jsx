import propTypes from 'prop-types';

function ColorContainer({ children}){
  return(
    <div className={`bg-green-300/50 dark:bg-blue-300/50
    justify-center border-2 rounded-sm 
    border-green-400 dark:border-blue-400
    py-10 px-20`}>
      {children}
    </div>
  )
}

export default ColorContainer;

ColorContainer.propTypes = {
  children:propTypes.any
}