import React from 'react'

function GenderRadio() {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-gray-300'>Male</span>
                    <input type="radio" name="gender" className='radio border-slate-900 bg-white' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-gray-300'>Female</span>
                    <input type="radio" name="gender" className='radio border-white bg-white' />
                </label>
            </div>
        </div>
    )
}

export default GenderRadio