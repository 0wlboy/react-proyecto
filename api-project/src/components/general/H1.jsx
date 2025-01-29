import propTypes from 'prop-types';

function H1({ children, textColorLight='text-green-100', textColorDark='text-blue-950' }) {
  return <h1 className= {`text-3xl py-5 ${textColorDark} dark:${textColorLight} font-bold `}>{children}</h1>;
}

H1.propTypes = {
  children: propTypes.string.isRequired,
  textColorLight: propTypes.string,
  textColorDark: propTypes.string
}

export default H1;