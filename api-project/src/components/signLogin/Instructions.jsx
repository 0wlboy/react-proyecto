import propTypes from 'prop-types';

function Instructions({children}) {
  return (
    <div 
    className={`flex w-full dark:bg-blue-800/50 rounded-sm p-3
    `}>
      <p className='text-xs text-white/80'>
        {children}
      </p>
    </div>
  );
}

Instructions.propTypes = {
  children: propTypes.node
}

export default Instructions;