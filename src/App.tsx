// App.tsx
import React, { useState, useEffect } from 'react';
import HeroBanner from './components/HeroBanner/HeroBanner';
import './css/global.scss';

const App: React.FC = () => {
  const [language, setLanguage] = useState('es');
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`./language/${language}/heroBannerData.json`).then((langData) => {
      setData(langData);
    });
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
      </button>
      {data && <HeroBanner data={data} />}
    </div>
  );
};

export default App;
