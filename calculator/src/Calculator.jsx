import React, {useState}  from 'react'

function Calculator() {

    const [calculate, setCalculate] = useState("")

    const clearall = ()=> {
        setCalculate("");
    };

    const handleClick =(e)=> {
        setCalculate(calculate.concat(e.target.value));
    };

    const equal =()=> {
        setCalculate(eval(calculate).toString())
    };

  return (
    <div className='h-auto p-6 space-y-8 bg-slate-600 rounded-2xl w-96'>
        <div>

            <input value={calculate} className='box-border w-full h-16 pr-6 font-serif text-4xl tracking-wide text-right text-gray-800 rounded-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] outline-none' type=" text" placeholder='0' />

        </div>

    <div className='space-y-8 ' >


        <div className='flex justify-around text-2xl font-medium capitalize'>
            <input onClick={clearall} className='text-green-500 hover:text-indigo-800' type="button" value="c" />
            <input onClick={handleClick} className='text-green-500 hover:text-indigo-800' type="button" value="<" />
            <input onClick={handleClick} className='text-green-500 hover:text-indigo-800' type="button" value="%" />
            <input onClick={handleClick} className='text-green-500 hover:text-indigo-800' type="button" value="/" />
        </div>
        <div className='flex justify-around text-2xl font-medium capitalize'>
            <input onClick={handleClick} className=' text-slate-800 hover:text-indigo-800' type="button" value="7" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="8" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="9" />
            <input onClick={handleClick} className='text-green-500 hover:text-indigo-800' type="button" value="*" />
        </div>
        <div className='flex justify-around text-2xl font-medium capitalize'>
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="4" />
            <input onClick={handleClick}  className='text-slate-800 hover:text-indigo-800' type="button" value="5" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="6" />
            <input onClick={handleClick}  className='text-green-500 hover:text-indigo-800' type="button" value="-" />
        </div>
        <div className='flex justify-around text-2xl font-medium capitalize'>
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="1" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="2" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="3" />
            <input onClick={handleClick} className='text-green-500 hover:text-indigo-800' type="button" value="+" />
        </div>
        <div className='flex justify-around text-2xl font-medium capitalize'>
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="0" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="00" />
            <input onClick={handleClick} className='text-slate-800 hover:text-indigo-800' type="button" value="." />
            <input onClick={equal} className='p-3 text-yellow-400 rounded-full shadow-lg hover:text-indigo-800 bg-slate-500 hover:bg-slate-400' type="button" value="=" />
        </div>
        
        
        


    </div>
    </div>
  )
}

export default Calculator