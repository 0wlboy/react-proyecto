import propTypes from 'prop-types';

function Tagtext({children}){
  return(
    <h3 className='text-md text-blue-950 dark:text-green-100 font-semibold capitalize'>
      {children}
    </h3>
  )
}

Tagtext.propTypes ={
  children: propTypes.string,
  
}

export default Tagtext;

