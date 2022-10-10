import React , {useRef} from 'react'
import Modal from '../modal/modal'

const Modals = () => {
    const modalRef = useRef()
  return (
    <div className='modalist' style={{ display : "flex" , width : "100vw", justifyContent : "center"}}>
        <div className='App'>
      <button style={{ marginTop : "300px", backgroundColor : "white", padding : "15px 50px", border : "none", marginLeft : "20px"}} onClick={()=> modalRef.current.open()}>show text in English</button>
      <Modal ref={modalRef}>
        <h2>Holla!</h2>
        <p>React modal animated with Framer motion library.
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
         you need to be sure there isn't anything embarrassing hidden in the middle of text </p>
        <span>Built with  by <label>&#10083;</label> Sideeq Abdwaheed</span>
      </Modal>
    </div>
    <div className='App'>
      <button style={{ marginTop : "300px", background : "#EFA48B", padding : "15px 50px", border : "none", marginLeft : "20px"}} onClick={()=> modalRef.current.open()}>show text In Mandarin</button>
      <Modal ref={modalRef}>
        <h2>Holla!</h2>
        <p>React modal animated with Framer motion library.
        “滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中t </p>
        <span>Built with  by <label>&#10083;</label> Sideeq Abdwaheed</span>
      </Modal>
    </div>
    <div className='App'>
      <button style={{ marginTop : "300px", padding : "15px 50px", background : "#477890", color : "#FFF", border : "none", marginLeft : "20px"}} onClick={()=> modalRef.current.open()}>show text in Hangul</button>
      <Modal ref={modalRef}>
        <h2>Holla!</h2>
        <p>
        여러분 다가오는 10월 9일은 한글날이에요. 한글날은 세종대왕님께서 훈민정음, 한글을 창제해서 세상에 펴낸 것을 기념하고 한글의 우수성을 가리기 위한 국경일이에요! 많은 분들이 한글날은 한글이 만들어진 날이라고 생각하는데 이것은 틀린 사실이에요! 한글날은 한글이 창제된 날이 아니고 반포된 날이에요. 서기 1443년 훈민정음을 완성한 세종대왕은 서기 1446년에 음력 9월 말쯤 세상에 반포하였는데 이를 양력으로 바꾸어 지금의 10월 9일이 한글날로 되었답니다.
         또 한글날의 옛 이름은 한글을 처음 배울 때 가갸거겨.. 를 따 가갸날이었다 </p>
        <span>Built with  by <label>&#10083;</label> Sideeq Abdwaheed</span>
      </Modal>
    </div>
    <div className='App'>
      <button style={{ marginTop : "300px", padding : "15px 50px", background : "#202030", color : "#FFF", border : "none", marginLeft : "20px"}} onClick={()=> modalRef.current.open()}>show text in Hangul</button>
      <Modal ref={modalRef}>
        <h2>Holla!</h2>
        <p>    
    Modal fesi ti ere idaraya pẹlu ile ikawe išipopada Framer.
        Ọpọlọpọ awọn iyatọ ti awọn ọna ti Lorem Ipsum wa,
        ṣugbọn awọn opolopo ti jiya iyipada ni diẹ ninu awọn fọọmu, nipasẹ itasi arin takiti, tabi laileto ọrọ eyi ti ko dabi ani die-die gbagbọ. Ti o ba fẹ lo ọna kan ti Lorem Ipsum,
         o nilo lati rii daju pe ko si ohun itiju ti o farapamọ ni arin ọrọ </p>
        <span>Built with  by <label>&#10083;</label> Sideeq Abdwaheed</span>
      </Modal>
    </div>
    </div>
  )
}

export default Modals