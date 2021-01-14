import React from 'react';

export const Footer = () => (
    <footer className="page-footer indigo darken-4" id="footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">About</h5>
                    <p className="grey-text text-lighten-4">This application works with ReactJs client and back API Flask to simulate an Application decision.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="https://github.com/Andbet97/application-process-simulator">Repository</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://github.com/Andbet97">Github</a></li>
                        <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/andres-betancurt-974586bb">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright indigo darken-3">
            Andrés Felipe Betancurt Rivera
        </div>
    </footer>
)