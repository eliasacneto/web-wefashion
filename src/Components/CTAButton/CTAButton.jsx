import React from 'react'
import './CTAButton.scss'
import WhatsApp from '../../assets/icons/whatsapp-logo.svg'

const CTAButton = () => {
  return <button className="button-cta-whatsapp"><img class='whats-logo' src={WhatsApp} />Quero falar com um consultor</button>;
};

export default CTAButton