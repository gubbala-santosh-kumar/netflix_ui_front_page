import { Link} from 'react-router-dom';
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-ctr"><br /><br />
        <p className='footer-head-text'>Q uestions? Call <strong>000-800-919-1694</strong></p><br /><br />
        <div className="links">
            <div className="link">
                <p className="link-text">FAQ</p>
                <p className="link-text">Investor Relations</p>
                <p className="link-text">Privacy</p>
                <p className="link-text">Speed Test</p>                
            </div>
            <div className="link">
                <p className="link-text">Help Centre</p>
                <p className="link-text">Jobs</p>
                <p className="link-text">Cookie Preferences</p>
                <p className="link-text">Legal Notices</p>                
            </div>
            <div className="link">
                <p className="link-text">Account</p>
                <p className="link-text">Ways to Watch</p>
                <p className="link-text">Corporate Information</p>
                <p className="link-text">Only on Netflix</p>                
            </div>
            <div className="link">
                <p className="link-text">Media Centre</p>
                <p className="link-text">Terms of Use</p>
                <p className="link-text">Contact Us</p>               
            </div>
        </div>
        <select name="lan" id="lan">
            <option value="en">English</option>
            <option value="hindi">हिन्दी</option>
        </select><br /><br />
        <p className='footer-last-text'>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer;