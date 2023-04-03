import { useState } from 'react';
import { CgClose } from 'react-icons/cg'
import { IoMenuSharp } from "react-icons/io5";
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import 'animate.css';

const Nav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div name='navbar' className="w-full h-[70px] bg-gray-800 z-20 fixed bg-opacity-80">
            <div className="max-w-[1280px] h-full mx-auto px-4 flex justify-around lg:justify-between items-center">
                <h2 className='flex text-titulo font-roboto uppercase hover:text-amarillo animate__animated animate__bounce'>Mayne Arias</h2>
                <ul className='hidden md:flex p-4 m-4'>
                    <a href='#sobremi' className='text-subTitulo mx-2 hover:text-amarillo'>Sobre mi</a> 
                    <a href='#lotes' className='text-subTitulo mx-2 hover:text-amarillo'>Lotes</a>
                    <a href='#contacto' className='text-subTitulo mx-2 hover:text-amarillo'>Contatos</a>
                    <a href='#ubicacion' className='text-subTitulo mx-2 hover:text-amarillo'>Ubicacion</a>
                </ul>

                <div onClick={handleNav} className='md:hidden hover:cursor-pointer z-20 text-primario'>
                    {nav ? <CgClose size={28} className='text-titulo' /> : <IoMenuSharp size={28} className='text-titulo' />}
                </div>

                <div className={nav ? 'z-10 lg:hidden fixed top-0 right-0 w-[60%] md:w-[35%] h-full bg-black ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-[60%] md:w-[35%] h-full bg-black ease-in duration-500'}>
                    <ul className='pt-24 font-bold px-4 flex flex-col'>
                        <a href='#sobremi' smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-amarillo text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Sobre mi</a>
                        <a href='#lotes' smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-amarillo text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Lotes</a>
                        <a href='#contacto' smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-amarillo text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Contactos</a>
                        <a href='#ubicacion' smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-amarillo text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Ubicacion</a>
                        <div className='mt-8 w-full px-8 flex justify-between'>
                        <a href='https://www.facebook.com/mariaines.arias.169' target='_blanck'><IoLogoFacebook size={28} className='hover:cursor-pointer text-blue-800'/></a>
                        <a href='https://www.instagram.com/mayne.arias/' target='_blanck'><IoLogoInstagram size={28} className='hover:cursor-pointer text-red-600'/></a>
                        <a href='https://web.whatsapp.com/' target='_blanck'><IoLogoWhatsapp size={28} className='hover:cursor-pointer text-green-900' /></a>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Nav