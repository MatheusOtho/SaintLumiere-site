import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <nav className='flex justify-between py-5 px-5'>
                    <div className=' self-center items-center'>
                        <h1 className='font-bold'>
                            Saint Lumière
                        </h1>
                    </div>
                    <ul className='hidden lg:flex gap-8 font-bold'>
                        <li>
                            <Link to='/'>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Destaques
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Catálogo
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                Sobre
                            </Link>
                        </li>
                    </ul>

                    <button
                        className='lg:hidden text-2xl'
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        <i 
                        className={
                                isOpen
                                    ? 'fa-solid fa-xmark'
                                    : 'fa-solid fa-bars'
                            }>
                        </i>
                    </button>

                </nav>

                {/* Menu Mobile */}
                {isOpen && (
                    <div className='lg:hidden '>
                        <ul className='flex flex-col p-5 gap-4 font-semibold'>
                            <li>
                                <Link to='/'>Início</Link>
                            </li>
                            <li>
                                <Link to='/'>Destaques</Link>
                            </li>
                            <li>
                                <Link to='/'>Catálogo</Link>
                            </li>
                            <li>
                                <Link to='/'>Contato</Link>
                            </li>
                            <li>
                                <Link to='/'>Sobre</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header