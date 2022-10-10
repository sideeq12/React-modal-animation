import React , {useState} from 'react'
import "./modal.css"
import { motion , AnimatePresence } from "framer-motion"

const Modal = (props) => {
    const [open, setOpen] = useState(true)
  return (
       <AnimatePresence>
        {open && ( <>
            <motion.div className="modal-backdrop"
            initial={{
                opacity : 0
            }}
            animate={{
                opacity : 1
            }}
            exit={{
                opacity : 0,
                transition : {
                    delay : 0.3
                }
            }}
            onClick={()=> setOpen(false)}
            >
            <motion.div className='modal-wrapper'
            initial={{
                scale : 0
            }}
            animate={{
                scale : 1,
                transition : {
                    duration : 0.5
                }
            }}
            exit={{
                scale : 0,
                transition : {
                    delay : 0.3
                }
            }}
           
            >
                <motion.div className='modal-content'
                initial={{
                    x : 100,
                    opacity : 0
                }}
                animate={{
                    x : 0,
                    opacity : 1,
                    transition : {
                        duration : 0.3
                    }
                }}
                exit={{
                    x : 100,
                    opacity : 0
                }}
                >{props.children}</motion.div>
            </motion.div>
            </motion.div>
        </>)}
       </AnimatePresence>

  )
}

export default Modal