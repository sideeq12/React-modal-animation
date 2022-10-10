
import './App.css';
import Modal from './components/modal/modal';
import {useRef} from 'react'

function App() {
  const modalRef = useRef()
  return (
    <div className='App'>
      <button onClick={()=> modalRef.current.open()}>show text</button>
      <Modal ref={modalRef}>Hello testing </Modal>
    </div>
  );
}

export default App;
