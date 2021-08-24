import React, {Component} from 'react';
import AOS from "aos";

class Navbar extends Component {
    render() {
        return (
            <div className="bg-qism">
                <div className="navbars d-flex text-center">

                  <ul className="nav-item">
                      <li className="nav-link">
                          <a href="#" className="navbar-brand"><img src="images/logo.png" alt=""/></a>
                      </li>
                  </ul>

                    <div className="nav-second d-block">
                        <button className="btn d-block">O’zbek</button>
                        <button className="btn">Русский</button>
                    </div>

                    <div className="nav-third">
                        <div className="one">Savollaringiz bormi? Qo’ng’iroq qiling:</div>
                        <div className="two d-flex"><img className="first"  src="images/phone.png" alt=""/> <img className="mr-2" src="images/telegram-3 1.png" alt=""/> +998(95) 198 00 66</div>
                    </div>

                   <div className="nav-four">
                    <button className="btn"><img src="images/download.png" alt=""/> Narxlar katalogini yuklab oling</button>
                   </div>

                </div>
                
                <div className="line-chizq"></div>
                
                <div className="header-qism d-block">
                    <div className="text-center first">Qandolat mahsulotlari ishlab chiqarish uchun</div>
                    <div className="text-center second">Sifatli xom ashyo va ingrediyentlar
                        ulgurji narxlarda oling</div>
                    
                    <div className="d-flex three2">

                        <div data-aos="fade-right" className="one">
                            <div className="bir text-center"><img src="images/three1.png" alt=""/></div>
                            <div className="ikki text-center">Mahsulotlar Eron va Qozog‘iston davlatlaridan keltiriladi</div>
                        </div>

                        <div data-aos="fade-right" className="two">
                            <div className="bir text-center"><img src="images/three2.png" alt=""/></div>
                            <div className="ikki text-center">Doimo 20tonnagacha mahsulot skladimizda mavjud</div>
                        </div>

                        <div  data-aos="fade-left" className="three">
                            <div className="bir text-center"><img src="images/three3.png" alt=""/></div>
                            <div className="ikki text-center">Barcha turdagi mahsulotlardan
                                BEPUL naʼmunalar jo‘natamiz</div>
                        </div>

                        <div  data-aos="fade-left" className="four">
                            <div className="bir text-center"><img src="images/three4.png" alt=""/></div>
                            <div className="ikki text-center">O‘zbekiston bo‘yicha yetkazib beramiz</div>
                        </div>
                    </div>

                    <div className="five">
                        <div data-aos="zoom-out-up" className="five-post">
                            <div className="one text-center">Xarid qiladigan miqdoringizdan kelib chiqib</div>
                            <div className="two text-center">Siz uchun maxsus narxlarni 7 daqiqada
                                hisoblab beramiz</div>
                            <div className="d-flex three">
                                <div className="my-rek">Ismingizni kiriting</div>
                                <div className="my-rek">+998 (__) ___-__-__</div>
                                <div className="my-rek">Narxlarni hisoblatish</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="six d-flex">
                        <div data-aos="zoom-out-right" className="one">
                            <div className="bir text-center">5 yil</div>
                            <div className="ikki text-center">5 yillik tajriba</div>
                        </div>
                        
                        <div data-aos="zoom-out-right" className="two">
                            <div className="bir text-center">300 tonna</div>
                            <div className="ikki text-center">oyiga 300 tonna mahsulot yetkazib beramiz</div>
                        </div>
                        
                        <div data-aos="zoom-out-left" className="three">
                            <div className="bir text-center">+150</div>
                            <div className="ikki text-center">+150dan ortiq doimiy mijozlarimiz</div>
                        </div>
                        
                        <div data-aos="zoom-out-left" className="four">
                            <div className="bir text-center">1000kv.m</div>
                            <div className="ikki text-center">1000 kv.m dan ortiq sklad maydoni</div>
                        </div>
                        
                    </div>

                </div>
                
               <div className="eych1"><img src="images/left.png" alt=""/></div>
                <div className="eych2"><img src="images/right1.png" alt=""/></div>
                <div className="eych3"><img src="images/right2.png" alt=""/></div>

            </div>
        );
    }
}

export default Navbar;