import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
