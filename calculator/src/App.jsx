import react from 'react'
import Calculator from './Calculator'


function App() {


  return (

    <div className='flex flex-col items-center justify-center h-screen text-center bg-indigo-600 '>

      <h1 className='mb-4 font-serif text-4xl font-bold text-white '>
        Basic Calculator
      </h1>

      <Calculator />

    </div>
  )
    
}

export default App
