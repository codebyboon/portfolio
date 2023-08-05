import React from 'react'

import Card from '@/components/Cards/Card'
import {cardsInformation} from '@/constants/index'

/*Design of the Card Container*/
const CardsContainer = () => {
  return (    
    <div className="container flex justify-between mx-auto my-10">
      {cardsInformation.map((info) => (
        <Card title={info.title} heading={info.heading} description={info.description} href={info.href}/>
      ))}
    </div>
  )
}

export default CardsContainer