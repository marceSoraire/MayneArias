import React from 'react';
import May from './may.jpg';
// import cv from '../../CV Desarrollador Frontend.pdf';
import 'animate.css';
// import { IoArrowDownSharp } from "react-icons/io5";

const Sobremi = () => {
    return (
        <div id='sobremi'>
            <img src={May} alt='yo' className='rounded-full mx-auto border-2 border-amarillo -mt-28 h-[200px] w-[200px] md:-mt-40 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] animate__animated animate__flipInY' />
            <h1 className='font-roboto text-gray-800 text-center mt-2 text-3xl animate__animated animate__bounceInDown'>Asesora Comercial de Ventas</h1>
            {/* <div className='flex justify-center'>
                <div className="w-full flex justify-center mb-4 md:my-2">
                    <button className='mt-5 border-gray-400 rounded-md w-[280px] mx-auto sm:w-[325px] font-poppins text-[18px] bg-white flex items-center justify-center border border-secundario py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg'>
                        <a href={cv} download='' className='flex'>Curriculum Vitae<IoArrowDownSharp size={20} className='my-auto mx-1' /></a>
                    </button>
                </div>
            </div> */}
            <div className='w-full md:w-[60%] md:mx-auto md:p-6 md:flex md:flex-col md:justify-center'>
                <article className='font-poppins md:text-[18px] md:my-2 text-justify mx-4 md:text-center'>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum temporibus voluptate dolores, in necessitatibus ratione error reiciendis, maxime eveniet impedit nisi odit! Adipisci dignissimos quasi non placeat labore facilis similique!
                   Debitis voluptatem necessitatibus iusto quia cumque possimus fugiat consequatur omnis deleniti, illo sit repellat qui eveniet minima laborum ex distinctio quam totam similique vitae. Aliquid provident et ipsam sit dolorum!
                   Aliquam recusandae at sunt rem asperiores doloremque necessitatibus voluptas corrupti nemo et adipisci, harum magni fugiat nam doloribus laudantium explicabo molestiae veritatis ad fuga obcaecati quasi labore eos facilis. Aut.
                   Debitis doloremque id itaque a inventore cupiditate cum explicabo iusto voluptate illo nemo nihil tenetur velit minima, asperiores officiis repellat ex consectetur ut expedita placeat laudantium! Quas velit cum quasi.
                   Modi praesentium officiis dicta, eos recusandae nemo error. Id accusamus atque nulla, non, voluptatum asperiores quae tempora autem tempore totam incidunt aspernatur repellendus aperiam facilis nesciunt dolore itaque! Voluptate, voluptatum?
                   Laborum eaque saepe magni pariatur quod ipsa iure amet quibusdam rerum ab nostrum doloribus aspernatur earum optio, voluptas non natus ipsum. Voluptate, enim odio! Amet, dolorem. Voluptatibus assumenda voluptate autem.
                   Adipisci, in molestiae aliquam ab nemo rem! Illo ratione doloremque autem temporibus asperiores voluptate laudantium nesciunt repellat unde consequuntur maiores consequatur quae ut deserunt, pariatur voluptatum beatae, id optio vel.
                   Quisquam vel autem quidem laborum ipsa obcaecati, veniam, consequuntur excepturi odio, neque est molestiae. At iusto enim nisi, quasi ullam consequatur eos ducimus officia? Nulla porro cupiditate alias laudantium deserunt!
                   Aspernatur repellendus cum quae unde rem quam fuga veritatis, at quia odio eveniet quisquam voluptatem illo, tempora iure sed porro accusamus ab aliquam? Officia rem, obcaecati maiores rerum necessitatibus vel.
                   Nihil amet mollitia libero eligendi officiis fugit recusandae dignissimos sequi, quasi itaque in enim consequatur eum ea, architecto, quis culpa sapiente placeat aliquid nobis molestiae? Officia eveniet illum numquam ducimus!
                </article>
            </div >
        </div >
    )
}

export default Sobremi