import { useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import { IoArrowDownSharp, IoArrowUp } from "react-icons/io5";

const Proyectos = () => {

  const [ver, setVer] = useState(true);
  const handleOnChange = () => setVer(!ver)

  return (
    <div id='lotes' className='w-full md:w-[80%] md:mx-auto my-6 md:p-6'>
      <h2 className="font-roboto text-center text-gray-800 text-3xl my-6">Lotes</h2>
      <div className='flex flex-wrap justify-between'>
        <Cards
        //   img={futbol}
          art='proyect'
          title='...'
          text='Descripcion del Lote'
          codigo='https://github.com/marceSoraire/futbolEstadium'
          proyecto='https://espontanea-trufa-c8b622.netlify.app'
        />
        <Cards
        //   img={acuario}
          art='proyect'
          title='...'
          text='Descripcion del Lote'
          codigo='https://github.com/marceSoraire/trabajoFinalAcuariojs'
          proyecto='https://marcesoraire.github.io/trabajoFinalAcuariojs/'
        />
        <Cards
        //   img={abm}
          art='proyect'
          title='...'
          text='Descripcion del Lote'
          codigo='https://github.com/marceSoraire/React.js-Ambientar'
          proyecto='https://marcesoraire.github.io/React.js-Ambientar/'
        />
      </div>
      {ver ?
        <div className="w-full flex justify-center">
          <button onClick={handleOnChange} className='mt-5 border border-gray-400 rounded-md w-[280px] mx-auto sm:w-[325px] font-poppins text-[18px] bg-white flex items-center justify-center py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg hover:shadow-amarillo'>
            Ver Mas<IoArrowDownSharp size={20} />
          </button>
        </div>
        :
        <>
          <div className='flex flex-wrap justify-between'>
            <Cards
            //   img={cine}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='https://github.com/marceSoraire/API-Peliculas'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
            //   img={rick}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='https://github.com/marceSoraire/RickAndMorty'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
            //   img={calcu}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='https://github.com/marceSoraire/Calculadora'
              proyecto='https://marcesoraire.github.io/Calculadora/'
            />
          </div>
          <div className='flex flex-wrap justify-between'>
            <Cards
            //   img={ahorcado}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='https://github.com/marceSoraire/Ahorcado'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
            //   img={imgAc}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='https://github.com/marceSoraire/DesarrolloWeb-Acuario'
              proyecto='https://marcesoraire.github.io/DesarrolloWeb-Acuario/'
            />
            <Cards
            //   img={mentoria}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
              codigo='none'
              proyecto='https://mentoriait.netlify.app/'
            />
          </div>
          <div className='flex flex-wrap justify-between'>
            <Cards
            //   img={rpg}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
            // codigo='none'
            // proyecto='none'
            />
            <Cards
            //   img={sda}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
            // codigo='none'
            // proyecto='none'
            />
            <Cards
            //   img={cl}
              art='proyect'
              title='...'
              text='Descripcion del Lote'
            // codigo='none'
            // proyecto='none'
            />
          </div>
          <div className="w-full flex justify-center">
            <button onClick={handleOnChange} className='mt-5 border border-gray-400 rounded-md w-[280px] mx-auto sm:w-[325px] font-poppins text-[18px] bg-white flex items-center justify-center py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg hover:shadow-amarillo'>
              Ver Menos<IoArrowUp size={20} />
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default Proyectos