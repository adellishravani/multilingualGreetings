import './index.css'

const Buttons = props => {
  const {languageDetails, changeLanguage} = props
  const {buttonText, imageAltText} = languageDetails

  const changelanguage = () => {
    changeLanguage(imageAltText)
  }

  return (
    <button type="button" onClick={changelanguage} className="btnn">
      {buttonText}
    </button>
  )
}

export default Buttons
