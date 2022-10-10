import React from 'react'
import "./modal.css"

const Modal = (props) => {
  return (
        <>
            <div className="modal-backdrop">
            <div className='modal-wrapper'>
                <div className='modal-content'>{props.children}</div>
            </div>
            </div>
        </>

  )
}

export default Modal