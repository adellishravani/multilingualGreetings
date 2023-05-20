import React from 'react'

const LanguageContext = React.CreateContext({
  activeLanguage: 'english',
  changeLanguage: () => {},
})

export default LanguageContext
