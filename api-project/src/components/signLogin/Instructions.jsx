import propTypes from 'prop-types';

function Instructions({children}) {
  return (
    <div className='flex flex-col gap-2 w-full dark:bg-blue-800/50 rounded-sm p-2'>
      <p className='text-sm text-white'>
        {children}
      </p>
    </div>
  );
}

Instructions.propTypes = {
  children: propTypes.node
}

export default Instructions;