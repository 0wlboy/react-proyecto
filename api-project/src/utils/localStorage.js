import propTypes from 'prop-types';

export function setItem({key, value}) {
    console.log(`guardando ${key} ${value}`);
    try{
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch(error){
      console.error(error);
    }

}

export function getItem({key}) {
    try{
      const item = window.localStorage.getItem(key);
      console.log(`obteniendo ${key} ${item}`);
      return item? JSON.parse(item): undefined;
    } catch(error){
      console.error(error);
    }
}

setItem.propTypes = {
    key: propTypes.string.isRequired,
    value: propTypes.any.isRequired,
}