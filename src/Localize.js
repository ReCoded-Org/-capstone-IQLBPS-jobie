import { useTranslation } from 'react-i18next';

const Localize = () => {
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
   
   
  }

  return(
    <div className='footer'>
      <button type="button" onClick={changeLanguage} value='en'>English</button>
      <button type="button" onClick={changeLanguage} value='ar'>Kurdish</button>
    </div>
  )
}

export default Localize;