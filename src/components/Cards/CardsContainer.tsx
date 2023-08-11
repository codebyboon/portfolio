import React from 'react'

import Card from '@/components/Cards/Card'
import {cardsInformation} from '@/constants/index'

/**
 * CardsContainer Method
 * * Used to display each card in the same container
 */
const CardsContainer = () => {
  return (    
    <div className="container flex flex-col my-auto mx-auto lg:flex-row lg:justify-between lg:mx-auto lg:my-3">
      {cardsInformation.map((info) => (
        <Card key={info.id} title={info.title} heading={info.heading} description={info.description} href={info.href}/>
      ))}
    </div>
  )
}

export default CardsContainer