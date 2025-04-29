import React from 'react'

import Offers from './offers'

export default function Home() {
  return (
    <div className='container-home'>
        <h1>Hola soy el home</h1>
        <div class='ofertas'>
            <Offers titulo='Titulo de la oferta'></Offers>
        </div>
    </div>
  )
}
