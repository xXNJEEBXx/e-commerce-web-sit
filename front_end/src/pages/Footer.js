import React from 'react';

function Footer() {
    return (
        <footer>
            <div style={{ color: 'white' }} className="gray-footer-bar background-purple2  ">
                <div className="container">
                    <div className=" child-width300px child-height300px child-padding30px flex-warp">
                        <div className="address ">
                            <h1 style={{ fontSize: '40px' }}>Address</h1>
                            <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-map-marker-alt color-white" />
                                <li style={{ paddingLeft: '10px' }}>Our Location</li>
                            </div>
                            <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-phone" />
                                <li style={{ paddingLeft: '10px' }}>+966568199827</li>
                            </div>
                            <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-envelope" />
                                <li style={{ paddingLeft: '10px' }}>xXNJEEBXx@GmAiL.CoM</li>
                            </div>
                            <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <li>
                                    <i style={{ padding: '4px' }} className="fab fa-facebook circle-white-2px" />
                                </li>
                                <li style={{ paddingLeft: '5px' }}>
                                    <i style={{ padding: '4px' }} className="fab fa-instagram circle-white-2px" />
                                </li>
                                <li style={{ paddingLeft: '5px' }}>
                                    <i style={{ padding: '4px' }} className="fab fa-twitter circle-white-2px" />
                                </li>
                                <li style={{ paddingLeft: '5px' }}>
                                    <i style={{ padding: '4px' }} className="fab fa-youtube circle-white-2px" />
                                </li>
                            </div>
                        </div>
                        <div className="about-us ">
                            <h1 style={{ color: 'white', fontSize: '30px' }}>About us</h1>
                            <p style={{ fontSize: '15px' }}>
                                Spring rose is a Saudi national market leader in flowers business offering quality,
                                prestigious,
                                flowers
                                that will add a personal touch to any occasion. With large variety of choices and unique
                                flowers.
                            </p>
                        </div>
                        <div className="qicik-links ">
                            <h1 style={{ fontSize: '30px' }}>Qicik links</h1>
                            <div>
                                <li style={{ fontSize: '20px' }}>Home</li>
                                <li style={{ fontSize: '20px' }}>Shop cart</li>
                                <li style={{ fontSize: '20px' }}>Conutact us</li>
                                <li style={{ fontSize: '20px' }}>Our reviews</li>
                            </div>
                        </div>
                        <div className="contact-us ">
                            <form action="php/php_code.php" method="post">
                                <h1 style={{ fontSize: '30px' }}>Contact us</h1>
                                <input id="input-contact-us-email-id" type="email" name="email" style={{ width: '200px', marginBottom: '10px', fontSize: '15px', color: 'white' }} className="background-black2 hover-background-black3" placeholder="your email" /><br />
                                <textarea id="input-contact-us-message-id" name="message" className="background-black2 hover-background-black3" style={{ width: '200px', height: '100px', fontSize: '15px', color: 'white' }} placeholder="your message..." defaultValue={""} />
                                <div style={{ textAlign: 'right', width: '200px', marginTop: '5px' }}><button style={{ borderRadius: '15px' }} className="btn btn-primary" id="submit-button-id" type="submit" name="submit">
                                    <i style={{ marginRight: '5px' }} className="fas fa-envelope" />Sned
                                </button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar background-blue2 flex-center">
                <li style={{ fontSize: '15px', color: 'white', paddingBlock: '5px' }}><i className="far fa-copyright" /> ... | Desiged
                    by xXNJEEBXx</li>
            </div>
        </footer>
    );
}

export default Footer;

