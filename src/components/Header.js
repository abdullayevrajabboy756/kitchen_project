import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
               <div className="header-one">
                       <div className="first-header text-center">Bizning mahsulotlarimiz</div>
                   
                   <div  className="d-flex header-two">
                       
                       <div className="bir left-surish">

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center top-surish">
                              <img className="d-block text-center bir2" src="images/header-one 1.png" alt=""/>
                               VEROL V
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block bir3" src="images/header-one2.png" alt=""/>
                               SUTLI <br/>
                               SIVOROTKA
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block bir4" src="images/header-one3.png" alt=""/>
                               BUGDOY KRAXMALI
                           </div>

                       </div>
                       
                       <div className="">

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center top-surish">
                               <img className="d-block ikki1" src="images/header-two1.png" alt=""/>
                               “NAZLI” <br/>
                               DROJI
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"  className="borders text-center">
                               <img className="d-block ikki2" src="images/header-two2.png" alt=""/>
                               “GRAND” DROJI
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block ikki3" src="images/header-two3.png" alt=""/>
                               “PISHKA” DROJI
                           </div>

                       </div>
                       
                       <div className="" >

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center top-surish">
                               <img className="d-block uch1" src="images/header-three1.png" alt=""/>
                               “NAZLI” <br/>
                               RAZRIXLITEL
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block uch2" src="images/header-three2.png" alt=""/>
                               “KLAR MAYA” <br/>
                               DROJI 10KG
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block ikki4" src="images/header-three3.png" alt=""/>
                               “KLAR MAYA” <br/>
                               DROJI 5KG
                           </div>
                       </div>
                       
                       <div className="" >

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center top-surish">
                               <img className="d-block tort1" src="images/header-four1.png" alt=""/>
                               ISTEMOL <br/>
                               SODASI
                           </div>

                           <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="borders text-center">
                               <img className="d-block tort2" src="images/header-four2.png" alt=""/>
                               QURUQ SUT
                           </div>
                       </div>
                       
                   </div>

                   <div className="header-three">
                       <div   className="five">
                           <div className="five-post">
                               <div className=" two text-center">Mahsulotlarimizdan bepul namunaga buyurtma bering</div>
                               <div className="one text-center">Buning uchun quydagi formani to‘ldiring</div>
                               <div className="d-flex three">
                                   <div className="my-rek">Ismingizni kiriting</div>
                                   <div className="my-rek">+998 (__) ___-__-__</div>
                                   <div className="my-rek">Bepul namuna olish</div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="hp1"><img src="images/head1.png" alt=""/></div>
                   <div className="hp2"><img src="images/head2.png" alt=""/></div>

               </div>
            </div>
        );
    }
}

export default Header;