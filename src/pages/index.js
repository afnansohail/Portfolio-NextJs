import Head from 'next/head';
import { useState } from 'react';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillBehanceCircle} from 'react-icons/ai';

import Image from 'next/image';
import avatar from '../../public/avi.png'
import logo from '../../public/as_logo.svg'
import ae_ico from '../../public/tools-icons/aftereffects.png'
import ps_ico from '../../public/tools-icons/photoshop.png'
import ai_ico from '../../public/tools-icons/illustrator.png'
import pp_ico from '../../public/tools-icons/prempro.png'
import fg_ico from '../../public/tools-icons/figma.png'
import nx_ico from '../../public/tools-icons/nxt.png'

import fg from '../../public/proj-icons/fg.png'
import hxl from '../../public/proj-icons/hxl.png'
import lgs from '../../public/proj-icons/lgs.png'
import ms from '../../public/proj-icons/ms.png'
import pm from '../../public/proj-icons/pm.png'
import RH from '../../public/proj-icons/RH.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Afnan Sohail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-gray-100 dark:bg-gray-900 font-Exo'>
        <section className='min-h-screen'>

          <nav className='sticky px-8 py-6 mb-12 flex justify-between shadow-md md:px-12 mt-0'>
           <a href=""> <Image src={logo} alt="Afnan Sohail Logo" width={200} height='auto' /></a>
            <ul className='flex items-center'>
              <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg md:text-2xl dark:text-teal-500 text-teal-700' /> </li>
              <li><a className='border-2 border-teal-700 dark:border-teal-500 hover:bg-gradient-to-b hover:from-teal-600 hover:to-teal-700 dark:hover:from-teal-400 dark:hover:to-teal-500 duration-100 hover:text-white text-teal-700 drop-shadow-md px-4 py-2 rounded-md ml-8 text-sm md:text-lg'
              href="https://pdfhost.io/v/KlZpzf4LD_Resume" target={'_blank'}>Resume</a></li>
            </ul>
          </nav>
        

          {/* Nav End */}

          
          <div className='relative py-12 mx-auto flex justify-center'>
            <Image src={avatar} alt="avatar" width={250} height='auto'/>
          </div>

          <div className=' text-center p-10'>
            <h2 className='text-4xl py-2 text-teal-700 dark:text-teal-500 font-bold'>Graphic Designer & Video Editor</h2>
            <p className='text-xl py-2 text-gray-700 dark:text-gray-200 leading-7'>Designing the world, one pixel at a time.</p>
          </div>
          <div className='text-4xl flex justify-center gap-10 text-teal-700 dark:text-teal-500 py-3'>
            <a href="https://www.instagram.com/designsbyafnan" target={'_blank'}> <AiFillInstagram /> </a>
            <a href="https://www.linkedin.com/in/afnan-sohail-552a8b1b1/" target={'_blank'}> <AiFillLinkedin /> </a>
            <a href="https://www.behance.net/afnansohail" target={'_blank'}> <AiFillBehanceCircle /> </a>
          </div>
        </section>


        <section className='bg-slate-200 dark:bg-gray-800 py-6 w-full md:h-screen'>
          <h3 className='text-3xl py-2  dark:text-teal-500 text-teal-700 font-bold text-center'>Tools I Use</h3>

          <div className='max-w-screen-lg p-6 mx-auto w-full h-full'>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center'>
              <Image src={ps_ico} alt="photoshop" className='rounded-3xl'/>
              <Image src={ai_ico} alt="illustrator" className='rounded-3xl'/>
              <Image src={pp_ico} alt="premiere pro" className='rounded-3xl'/>
              <Image src={ae_ico} alt="after effects" className='rounded-3xl'/>
              <Image src={fg_ico} alt="figma" className='rounded-3xl'/>
              <Image src={nx_ico} alt="nextJS" className='rounded-3xl'/>
            </div>
            
          </div>

        </section>

        <section className='py-6 w-full md:h-screen'>
          <h3 className='text-3xl py-2 text-teal-700 dark:text-teal-500 font-bold text-center'>My Projects</h3>

          <div className='max-w-screen-lg p-6 mx-auto w-full h-full'>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center'>
              <a href="https://www.behance.net/gallery/115721679/Multan-Sultans-Social-Media-Posts" target={'_blank'}>
                <Image src={ms} alt="Multan Sultans"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
              <a href="https://www.behance.net/gallery/166860755/Hexlsior-Clothing" target={'_blank'}>
                <Image src={hxl} alt="Hexlsior"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
              <a href="https://www.behance.net/gallery/125500611/Rawalakot-Hawks-Social-Media-Posts" target={'_blank'}>
                <Image src={RH} alt="Rawalakot Hawks"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
              <a href="https://www.behance.net/gallery/111459905/Planet-Mist-Creatives" target={'_blank'}>
                <Image src={pm} alt="Planet Mist"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
              <a href="https://www.behance.net/gallery/97753345/Logo-Designs" target={'_blank'}>
                <Image src={lgs} alt="Logo Designs"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
              <a href="https://www.behance.net/gallery/115723881/Flame-Game-Social-Media-Posts" target={'_blank'}>
                <Image src={fg} alt="Flame Game"
                className='rounded-3xl duration-100 hover:scale-105 hover:drop-shadow-2xl'/>
              </a>
            </div>
            
          </div>

        </section>


        <footer className='bg-slate-200 dark:bg-gray-800'>
          <p className='text-teal-700 dark:text-teal-500 font-semibold py-1 text-center shadow-inner'>Copyright © 2023 Afnan Sohail. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  )
}
