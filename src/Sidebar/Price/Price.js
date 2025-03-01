import React from 'react'

export default function Price() {
  return (
  <>
   <div className='ml'>
    <h2 className='sidebar-title-price-title'>Price</h2>
       <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>Ksh 0 - 50
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>Ksh 50 - 100
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>Ksh 100 - 500
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test2' />
          <span className='checkmark'></span>Ksh 500 - 5000
        </label>
      </div>
  </>
  )
}
