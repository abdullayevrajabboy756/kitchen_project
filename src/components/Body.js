import React, {Component} from 'react';
import { Collapse, Button} from 'reactstrap';
class Body extends Component {
    state={
        isOpen:false,
        isOpen1:false,
        isOpen2:false,
        isOpen3:false
    };
    setIsOpen=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    };
    setIsOpen1=()=>{
        this.setState({
            isOpen1:!this.state.isOpen1
        })
    };
    setIsOpen2=()=>{
        this.setState({
            isOpen2:!this.state.isOpen2
        })
    };
    setIsOpen3=()=>{
        this.setState({
            isOpen3:!this.state.isOpen3
        })
    };
    render() {
        return (
            <div>
               <div className="mysayt-body">
                 <div className="first d-flex">

                     <div className="qwer1">
                         <div  data-aos="fade-left" className="bir1">Karimov Dilshod</div>
                         <div  data-aos="fade-right" className="ikki1">Kompaniya rahbari va mutaxassis</div>
                     </div>

                     <div className="qwer2">
                         <div className="ase1">Assalomu aleykum</div>
                         <div className="ase2">Men Snabtorg kompaniyasi taʼsischisiman.
                             Shu soha bo’yicha 5 yillik tajribaga egaman.
                             Komandamiz bilan 5 yil davomida xom ashyolarni O‘zbekiston qandolat fabrikalari
                             uchun yetkazib kelamiz</div>
                         <div className="ase3">Sizni qiziqtirgan barcha savol va takliflaringizni eshitishga tayyorman</div>
                         <div className="ase4">Buning uchun quydagi formani to‘ldiring</div>
                         <input type="text" className="ase5" placeholder="Savol va taklifingizni kiriting"/>
                         <input type="text" className="ase6" placeholder="Ismingizni kiriting"/>
                         <input type="number" className="ase7" placeholder="+998 (__) ___-__-__"/>
                         <button className="btn">Yuborish</button>
                     </div>

                 </div>

                   <div className="ikkinchi">
                       <div className="ikkinchi1 text-center">Ko’p beriladigan savollar</div>
                       
                       <div className="d-flex ">

                           <div  className="inpul">

                               <Button data-aos="zoom-in" className="d-flex justify-content-between align-items-center"  onClick={ this.setIsOpen}>Маҳсулотлари қаердан келтирилган? <img  src="images/plus.png" alt=""/></Button>
                               <Collapse isOpen={this.state.isOpen}>
                                 <div className="">Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
                                     do amet sint. Velit officia consequat duis enim velit mollit. <br/>
                                     Exercitation veniam consequat sunt nostrud amet.</div>
                               </Collapse>

                               <Button data-aos="zoom-in" className="d-flex justify-content-between align-items-center"  onClick={ this.setIsOpen1}>Бепул етказиб бериш шартлари қанақа? <img src="images/plus.png" alt=""/></Button>
                               <Collapse isOpen={this.state.isOpen1}>
                                   <div className="">Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
                                       do amet sint. Velit officia consequat duis enim velit mollit. <br/>
                                       Exercitation veniam consequat sunt nostrud amet.</div>
                               </Collapse>

                               <Button data-aos="zoom-in" className="d-flex justify-content-between align-items-center" onClick={ this.setIsOpen2}>Бонус ва чегирмалар кимлар учун? <img  src="images/plus.png" alt=""/></Button>
                               <Collapse isOpen={this.state.isOpen2}>
                                   <div className="">Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
                                       do amet sint. Velit officia consequat duis enim velit mollit. <br/>
                                       Exercitation veniam consequat sunt nostrud amet.</div>
                               </Collapse>

                               <Button data-aos="zoom-in" className="d-flex justify-content-between align-items-center" onClick={ this.setIsOpen3}>Нархлар каталоги мавжудми? <img src="images/plus.png" alt=""/></Button>
                               <Collapse isOpen={this.state.isOpen3}>
                                   <div className="">Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
                                       do amet sint. Velit officia consequat duis enim velit mollit. <br/>
                                       Exercitation veniam consequat sunt nostrud amet.</div>
                               </Collapse>

                           </div>

                           <div data-aos="fade-left" className="inputs-group">
                               <div className="bir ">Savollaringiz qoldimi?</div>
                               <div className="ikki text-center">Formani to’ldiring va savollaringizga tez orada javob oling</div>
                               <input type="text" className="d-block uch" placeholder="Savol va taklifingizni kiriting"/>
                               <input type="text" className="d-block tort" placeholder="Ismingizni kiriting"/>
                               <input type="number" className="d-block besh" placeholder="+998 (__) ___-__-__"/>
                               <button className="btn">Yuborish</button>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Body;