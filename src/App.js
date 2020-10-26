//import React from 'react';
import React from 'react';
import HeaderBar from './components/HeaderBar.js';
import Carrousel from './components/elements/Carrousel.js';
import Docbtn from './components/DocumentBtn.js';
import QA from './components/QA.js';
import Issues from './components/IssuesBtn.js';
import Add from './components/AddBtn.js';
import BootButtons from './components/BootCards.js';
import './App.css';
import { grey } from '@material-ui/core/colors';
import Netsuitelogo from './imgs/Netsuite-logo.png';
import JDELogo from './imgs/Jd-Edwards-Logo.jpg';
import SAPLogo from './imgs/SAP-Logo.png';
import OCLogo from './imgs/OC-Logo.png';

function App() { 
  
  return (
    <view style={{ flex: 1, scrollBehavior: "smooth" }}>
      <div id="Home">
        <div className='App'>
            <HeaderBar></HeaderBar>
            {/*}<Carrousel></Carrousel>*/}
            <div className='ButtonContainer'
          >
            <div className='Documents'>
              <Docbtn></Docbtn>
            </div>
            <div className='QA'>
              <QA></QA>
            </div>
            <div className='Issues'>
              <Issues></Issues>
            </div>
            <div className='New'>
              <Add></Add>
            </div>
          </div>
        </div> 
      </div>
      <div className='ErpContents'>
      <div id="Netsuite" className="Netsuite">
        <h1 className="ERPTitle" style={{color: grey[900]}}><b>Netsuite</b></h1>
          <div className="ERPInfo">
            <p>
            NetSuite is engineered to streamline mission-critical processes. 
            In turn, this allows businesses to continue focusing on what they do best and to react to new market opportunities swiftly and confidently. 
            From financials to supply chain management to billing and beyond, NetSuite ERP gives companies clear visibility and control of their business.
            From financials to supply chain management to billing and beyond, NetSuite ERP gives companies clear visibility and control of their business.
            </p>
            <img className="NSimg" alt="NS" src={Netsuitelogo}/>
          </div>
          
        </div>
      <div id="JDEdwards" className="JDEdwards">
        <h1 className="ERPTitle" style={{color: 'white'}}><b>JD Edwards</b></h1>
        <div className="ERPInfo">
            <p style={{color:'white'}}>
            This ERP was an Enterprise resource planning software company. Products included World for IBM AS/400 minicomputers, OneWorld for CNC architecture, and JD Edwards EnterpriseOne. 
            The company was founded March 1977 in Denver, Colorado, by Jack Thompson, C.T.P.
            </p>
            <img className="NSimg" alt="JDE" src={JDELogo}/>
        </div>
        
      </div>


      <div id="SAP" className="SAP">
        <h1 className="ERPTitle" style={{color: grey[900]}}><b>SAP</b></h1>
        <div className="ERPInfo">
            <p style={{color:grey[900]}}>
            SAP is a market leader in providing ERP (Enterprise Resource and Planning) solutions and services. In this chapter, we will try to understand more on ERP and where it should be used. 
            In addition, we will learn the implementation techniques of ERP along with the ERP packages available in the market.
            </p>
            <img className="NSimg"  alt="SAP" src={SAPLogo}/>
        </div>
      </div>
      <div id="OracleCloud" className="OracleCloud">
        <h1 className="ERPTitle" style={{color: 'white'}}><b>Oracle Cloud</b></h1>
        <div className="ERPInfo">
            <p style={{color:'white'}}>
            Oracle ERP Cloud is an end-to-end Software as a service suite that manages enterprise operations. The suite runs on an Oracle technology stack in Oracle’s cloud centers. Oracle ERP Cloud is accessible through both public and private cloud implementation and supports hybrid deployment. Oracle supplies updates to Oracle ERP Cloud at least twice annually. 
            According to the company’s website, there are nine different software modules that make up the Oracle ERP Cloud suite
            </p>
            <img className="NSimg" alt="OC" src={OCLogo}/>
        </div>
      </div>

      </div>
    </view>
  );
}

export default App;



