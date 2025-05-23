import React from 'react'

function GenderRadio({ onCheckboxChange, selectedGender }) {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='label-text text-gray-300'>Male</span>
                    <input type="radio" name="gender" className='radio border-slate-900 bg-white' 
                    checked={selectedGender === 'male'} onChange={() => onCheckboxChange('male')}/>
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                    <span className='label-text text-gray-300'>Female</span>
                    <input type="radio" name="gender" className='radio border-white bg-white'
                    checked={selectedGender === 'female'} onChange={() => onCheckboxChange('female')} />
                </label>
            </div>
        </div>
    )
}

export default GenderRadio