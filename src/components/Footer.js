import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-content d-flex">
                    <div className="birs"><img src="images/logo.png" alt=""/></div>
                    <div className="ikks"><img className="mr-3" src="images/call.png" alt=""/> +998(95) 198 00 66</div>
                    <div className="uchs">
                        <div className="uchs1 d-flex"> <div className=""><img src="images/location.png" alt=""/></div> <div className="">Manzil: O’rikzor bozori</div>  </div>
                        <div className="uchs2 d-flex"><div className=""><img  src="images/time.png" alt=""/></div>  <div className="">Ish vaqti: Du - Shn. 9:00 dan 17:00 gacha</div></div>
                    </div>
                    <div className="torts"><img src="images/logo2.png" alt=""/></div>
                </div>
            </div>
        );
    }
}

export default Footer;