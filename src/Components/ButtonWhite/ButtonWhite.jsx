import './ButtonWhite.scss'

const ButtonWhite = ({ children, link }) => {
  return (
    <button className='ButtonWhite'><a href={link}>{children}</a></button>
  )
}

export default ButtonWhite;