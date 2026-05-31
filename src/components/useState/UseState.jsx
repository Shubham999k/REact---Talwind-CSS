import React, { useState } from 'react'
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const UseState = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='flex items-center justify-center h-screen gap-5 '>

                {/* Decrease Button */}
                <button
                    className='bg-red-500 text-white px-5 py-3 rounded-lg'
                    onClick={() =>(count ===0) ?setCount(0): setCount(count - 1)}
                >
                  <FaMinus />  
                </button>

                {/* Count */}
                <h1 className='text-4xl font-bold '>
                    {count}
                </h1>

                {/* Increase Button */}
                <button
                    className='bg-green-500 text-white px-5 py-3 rounded-lg'
                    onClick={() => setCount(count + 1)}
                >
                    <BiPlusMedical />
                </button>

            </div>
        </>
    )
}

export default UseState