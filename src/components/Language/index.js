import LanguageContext from '../../Context/LanguageContext'
import Buttons from '../Buttons'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const Language = () => {
  const getImage = activeLanguage => {
    switch (activeLanguage) {
      case 'english':
        return languageGreetingsList[0].imageUrl
      case 'tamil':
        return languageGreetingsList[1].imageUrl
      case 'telugu':
        return languageGreetingsList[2].imageUrl
      default:
        return null
    }
  }

  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage, changeLanguage} = value
        const {imageUrl} = getImage(activeLanguage)

        const changelanguage = imageAltText => {
          changeLanguage(imageAltText)
        }
        return (
          <div className="bg">
            <h1>Multilingual Greetings</h1>
            <ul className="ullist">
              {languageGreetingsList.map(each => (
                <Buttons
                  languageDetails={each}
                  key={each.id}
                  changeLanguage={changelanguage()}
                />
              ))}
            </ul>
            <div>
              <img src={imageUrl} alt="imageAltText" />
            </div>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default Language
