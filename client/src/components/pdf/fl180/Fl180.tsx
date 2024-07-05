import React from 'react'
import SUPFl180 from "./SU180"
export default function Petition () {
    const [details, setDetails] = React.useState<SUPFl180>(
        {} as SUPFl180
      );
    
      function handleChange(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      }


      function handleSUPERIORCOURTOFCALIFORNIA(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      } 



    return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-180 </h3>
                <table style={{ width: "100%",  border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                    <tr>
                            <td style={{ width: "64%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginBottom: 10 }}>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={4}
                                        defaultValue={""}
                                    />
                                </div>
                                <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr" }}>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">STREET ADDRESS:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:'71%' }} type="text" id="Streetaddress" />
                                    </div>
                                    
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="faxno">FAX NO.:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"75%" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="mailaddress">E-MAIL ADDRESS(optional):</label>
                                    
                                    <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"67%" }} type="text" id="fax" />
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"71%" }} type="name" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                                FOR COURT USE ONLY
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <input
                                     name={"Countyof"}
                                     onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                        style={{ width: "48.4%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input
                                    name={"StreetAddress"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"79.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2, marginBottom: 2 }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input
                                    name={"MailingAddress"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"78.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input 
                                    name={"CityAndZipCode"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"77.2%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input 
                                    name={"BranchName"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"81.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 2, border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem", marginBottom:"4px"}}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input 
                                    name={"Petitioner"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"85.4%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input 
                                    name={"Respondent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div><h3 >
                                    <b>JUDGMENT</b>
                                    <div style={{display:'flex'}}>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10px'}} type="checkbox" /> <b>DISSOLUTION</b>
                                    </label>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10'}} type="checkbox" /> <b>LEGAL SEPARATION</b>
                                    </label>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10px'}} type="checkbox" /> <b>NULLITY</b>
                                    </label>
                                    </div>
                                   
                                    <div style={{display:'flex'}}>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10px'}} type="checkbox" /> <b>Status only</b>
                                    </label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10px'}} type="checkbox" /> <b>Reserving jurisdiction over termination of marital or domesti partnership status</b>
                                    </label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                    <label style={{marginLeft:'40px'}}>
                                        <input onChange={(e) => handleChange(e)} style={{margin:'10px'}} type="checkbox" /> <b>Judgment on reserved issues</b>
                                    </label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                    <label style={{marginLeft:'40px'}}>
                                    <b>Date marital or domestic partnership status ends:</b>
                                    <input 
                                    name={"Respondent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"50%%" }} type="text" id="street" />
                                    </label>
                                    </div>
                                    
                                </h3>
                                </div>
                                
                                
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem",marginBottom: "8px" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table><br />

    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
      <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          1.<input type="checkbox" id="personalConduct" />
          <label htmlFor="personalConduct" style={{ marginLeft: '5px' }}>
            This judgment 
          </label>
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            <span style={{ marginLeft: '5px', marginRight: '5px' }}>contains personal conduct restraining orders</span>
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            <span style={{ marginLeft: '5px' }}>modifies existing restraining orders.</span>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>
            The restraining orders are contained on page(s)
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '50px', marginLeft: '5px', marginRight: '5px' }} />
            of the attachment. They expire on (date):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          2.<span>This proceeding was heard as follows: </span>
          <input type="checkbox" style={{ marginLeft: '5px' }} />
          <span style={{ marginLeft: '5px', marginRight: '5px' }}>Default or uncontested</span>
          <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
          <span style={{ marginLeft: '5px' }}>By declaration under Family Code section 2336</span>
          <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
          <span>Contested</span>
          <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
          <span>Agreement in court</span>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>a. Date:
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px', marginRight: '5px' }} />
            Dept.:
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>Room:
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>b. Judicial officer (name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Temporary judge
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>c. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Petitioner present in court
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Attorney present in court (name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>d. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Respondent present in court
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Attorney present in court (name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>e. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Claimant present in court (name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px', marginRight: '5px' }} />
            Attorney present in court (name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>f. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Other (specify name):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
       3. <label>
          The court acquired jurisdiction of the respondent on (date):
          <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
        </label>
        <div style={{ marginLeft: '20px' }}>
          <label>
            (a) 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            The respondent was served with process.
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>
            (b) 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            The respondent appeared.
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <b><h4>THE COURT ORDERS, GOOD CAUSE APPEARING</h4></b>
        <div style={{ marginBottom: '10px' }}>
          <label>
            4. a. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Judgment of dissolution is entered. Marital or domestic partnership status is terminated and the parties are restored to the status of single persons
          </label>
          <div style={{ marginLeft: '20px' }}>
            <label>
              (1) 
              <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
              on (specify date):
              <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
            </label>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <label>
              (2) 
              <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
              on a date to be determined on noticed motion of either party or on stipulation.
            </label>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            b. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Judgment of legal separation is entered.
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            c. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            Judgment of nullity is entered. The parties are declared to be single persons on the ground of (specify):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            d. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            This judgment will be entered nunc pro tunc as of (date):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '100px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            e. <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />Judgment on reserved issues.
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            f. 
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            petitioner's
            <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
            respondent's former name is restored to (specify):
            <input type="text" style={{backgroundColor: "rgb(225, 243, 243)", width: '200px', marginLeft: '5px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            g. <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />Jurisdiction is reserved over all other issues, and all present orders remain in effect except as provided below.
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            h. <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} /> This judgment contains provisions for child support or family support. Each party must complete and file with the court a Child Support Case Registry Form (form FL-191) within 10 days of the date of this judgment. The parents must notify the court of any change in the information submitted within 10 days of the change, by filing an updated form. The Notice of Rights and Responsibilities—Health-Care Costs and Reimbursement Procedures and Information Sheet on Changing a Child Support Order (form FL-192) is attached.
          </label>
        </div>
        </div>
        </div>          
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-180 [Rev. July 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        JUDGMENT 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2024, 2340, 2343, 2346</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div><br /><br />

                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">CASE NAME(Last name, first name of each party):</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%", height:'40px' }} type="text" id="name" />
                                </div>
                                
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table><br />
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        <span>4.  i. <input type="checkbox" style={{ margin:'10px'}}/>The children of this marriage or domestic partnership are:</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Name</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
        <span>Birthdate</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2)<input type="checkbox" style={{ margin:'10px'}}/> Parentage is established for children of this relationship born prior to the marriage or domestic partnership</span>
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>j.<input type="checkbox" style={{ margin:'10px'}}/> Child custody and visitation (parenting time) are ordered as set forth in the attached</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Settlement agreement, stipulation for judgment, or other written agreement which contains the information required by Family Code section 3048(a).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2) <input type="checkbox" style={{ margin:'10px'}}/>Child Custody and Visitation Order Attachment (form FL-341).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(3)<input type="checkbox" style={{ margin:'10px'}}/> Stipulation and Order for Custody and/or Visitation of Children (form FL-355).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(4)<input type="checkbox" style={{ margin:'10px'}}/> Previously established in another case. Case number:</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
        <span>Court:</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>k.<input type="checkbox" style={{ margin:'10px'}}/> Child support is ordered as set forth in the attached</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Settlement agreement, stipulation for judgment, or other written agreement which contains the declarations required by Family Code section 4065(a).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2)<input type="checkbox" style={{ margin:'10px'}}/> Child Support Information and Order Attachment (form FL-342).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(3)<input type="checkbox" style={{ margin:'10px'}}/> Stipulation to Establish or Modify Child Support and Order (form FL-350).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(4)<input type="checkbox" style={{ margin:'10px'}}/> Previously established in another case. Case number:</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
        <span>Court:</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>l.<input type="checkbox" style={{ margin:'10px'}}/> Spousal, domestic partner, or family support is ordered:</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Reserved for future determination as relates to <input type="checkbox" style={{ margin:'10px'}}/> petitioner <input type="checkbox" style={{ margin:'10px'}}/> respondent</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2)<input type="checkbox" style={{ margin:'10px'}}/> Jurisdiction terminated to order spousal or partner support to <input type="checkbox" style={{ margin:'10px'}}/> petitioner <input type="checkbox" style={{ margin:'10px'}}/> respondent</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(3) <input type="checkbox" style={{ margin:'10px'}}/>As set forth in the attached Spousal, Partner, or Family Support Order Attachment (form FL-343).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(4) <input type="checkbox" style={{ margin:'10px'}}/>As set forth in the attached settlement agreement, stipulation for judgment, or other written agreement.</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(5)<input type="checkbox" style={{ margin:'10px'}}/> Other (specify):</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>m. <input type="checkbox" style={{ margin:'10px'}}/>Property division is ordered as set forth in the attached</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Settlement agreement, stipulation for judgment, or other written agreement.</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2)<input type="checkbox" style={{ margin:'10px'}}/> Property Order Attachment to Judgment (form FL-345).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(3)<input type="checkbox" style={{ margin:'10px'}}/> Other (specify):</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>n.<input type="checkbox" style={{ margin:'10px'}}/> Attorney fees and costs are ordered as set forth in the attached</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(1)<input type="checkbox" style={{ margin:'10px'}}/> Settlement agreement, stipulation for judgment, or other written agreement.</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
        {/* <input type="checkbox" style={{ margin:'10px'}}/> */}
        <span>(2)<input type="checkbox" style={{ margin:'10px'}}/> Attorney Fees and Costs Order (form FL-346).</span>
      </div>
      <div style={{ marginLeft: '40px', marginBottom: '10px' }}>
       
        <span>(3)<input type="checkbox" style={{ margin:'10px'}}/> Other (specify):</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        
        <span>o.<input type="checkbox" style={{ margin:'10px'}}/> Other (specify):</span>
        <input type="text" style={{ marginRight: '10px', marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)"  }} />
      </div>
    </div>
    <div>Each attachment to this judgment is incorporated into this judgment, and the parties are ordered to comply with each attachment's provisions. Jueisdiction is reserved to make other orders necessary to carry out this judgment.</div>
    <div style={{ marginLeft: "5%" }}>
                    <div style={{ marginTop: 2, fontSize: 16 }}>
                        Date: <input
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            name={"TypeOrPrintName"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }} type="text" id="fax" size={20} />
                            <div>(Number of pages attached)</div>{" "}
                        </div>
                        <div>
                        <span><input type="checkbox" style={{ margin:'10px'}}/> SIGNATURE FOLLOWS LAST ATTACHMENT</span>
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div>  (JUDICIAL OFFICER)</div>
                        </div>
                    </div>
                </div><br />
                <div style={{border:'2px solid black', margin:'3px', padding:'5px'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><b>NOTICE</b></div>
                    Dissolution or legal separation may automatically cancel the rights of a spouse or domestic partner under the other spouse's or domestic partner's will, trust, retirement plan, power of attorney, pay-on-death bank account, transfer-on-death vehicle registration, survivorship rights to any property owned in joint tenancy, and any other similar property interest. It does not automatically cancel the rights of a spouse or domestic partner as beneficiary of the other spouse's or domestic partner's life insurance policy. You should review these matters, as well as any credit cards, other credit accounts, insurance policies, retirement plans, and credit reports, to determine whether they should be changed or whether you should take any other actions.
                    A debt or obligation may be assigned to one party as part of the dissolution of property and debts, but if that party does not pay the debt or obligation, the creditor may be able to collect from the other party.
                    An earnings assignment may be issued without additional proof if child, family, partner, or spousal support is ordered. Any party required to pay support must pay interest on overdue amounts at the "legal rate," which is currently 10 percent

                    </div>














<br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-180 [Rev. July 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        JUDGMENT 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2024, 2340, 2343, 2346</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div>
            </div>
                

        
    )
};
