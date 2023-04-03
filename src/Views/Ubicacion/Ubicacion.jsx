import React from 'react'
import centruy from '../../img/3.jpg';

const Ubicacion = () => {
    return (
        <div id='ubicacion'>
            <h2 className="font-roboto text-center text-gray-800 text-3xl my-6">Ubicacion</h2>
            <div className='flex justify-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53559.083936378855!2d-60.712846865392564!3d-32.965718987247634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654ae022e122d%3A0xd937aeb706dca3b2!2sCiudad%20Ribera!5e0!3m2!1ses-419!2sar!4v1679516086541!5m2!1ses-419!2sar" width='100%' height='600px' title='centuy21' className='mt-5'></iframe>
            </div>
            <img src={centruy} alt='abc' className='w-full h-[800px]'/>
        </div>
    )
}

export default Ubicacion