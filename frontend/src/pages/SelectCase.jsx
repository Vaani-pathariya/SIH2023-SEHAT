import React from 'react'
import Navbar from '../components/Navbar'
import emergency from '../assets/emergency.svg';
import consultDoctor from '../assets/consultDoctor.svg';
import { Link } from 'react-router-dom';

const SelectCase = () => {
  return (
    <div>
        <Navbar url='/'/>
        <div className='w-[100vw]  flex flex-col justify-center items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>
        <div className='w-[680px] h-[383px] top-[220px] left-[380px] mt-[-120px]'>
                <div className='mb-6'>Please select your option</div>

                <div className='flex justify-between items-baseline mt-[-130px]'>

                    <div>
                        <Link to='/login'>
                        <img src={emergency} alt='emergency'/>
                        </Link>
                    <div className='mt-6'>Emergency</div>
                    </div>

                    <div>
                        <Link to='/login'><img src={consultDoctor} alt='consult doctor'/></Link>
                    <div className='mt-6'>Consult Doctor</div>
                    </div>

                </div>
        </div>
        </div>
    </div>
  )
}

export default SelectCase