import './ButtonWhite.scss'

const ButtonWhite = ({ children, link }) => {
  return (
    <a href={link}><button className='ButtonWhite'>{children}</button></a>
  )
}

export default ButtonWhite;