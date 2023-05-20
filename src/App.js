import {Component} from 'react'
import Language from './components/Language'
import LanguageContext from './Context/LanguageContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {activeLanguage: 'english'}

  changelanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const activeLanguage = this.state
    return (
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changelanguage,
        }}
      >
        <Language />
      </LanguageContext.Provider>
    )
  }
}

export default App
