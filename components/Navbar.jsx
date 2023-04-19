import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center px-6'>
            <h1 className='font-bold text-[25px]'>Temple Quizzes</h1>
            <ul className='flex gap-4'>
                <li><Link href='/' legacyBehavior><a>Create Quiz</a></Link></li>
                <li><Link href='/QuizLayout' legacyBehavior><a>TakeQuiz</a></Link></li>
            
            </ul>
        </nav>
    </header>
  )
}

export default Navbar