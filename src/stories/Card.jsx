import PropTypes from 'prop-types'
import './Card.css'

const Card = ({imageUrl, title, text, button, buttonText, onClick}) => {
    
  return(
    <div className="card">
      <div>
        {imageUrl && <img src={imageUrl} alt={title} className="card-image"/>} 
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        {button && (<button className="card-button" onClick={onClick}>{buttonText}</button>)}
     </div> 
    </div>

      

  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  buttonText: PropTypes.string,
  button: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Card

  