import React from 'react'
import SUPFl172 from "./SU172"
export default function Petition () {
    const [details, setDetails] = React.useState<SUPFl172>(
        {} as SUPFl172
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-172 </h3>
            <h1><b>THIS FORM IS COURT USE ONLY</b></h1>
                <table style={{ width: "100%",  border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                    
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="name"><b><h1>SUPERIOR COURT OF CALIFORIA, COUNTY OF</h1></b></label>
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
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input 
                                    name={"Petitioner"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"85.4%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input 
                                    name={"Respondent"}
                                    onChange={(e) => handleChange(e)}
                                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"83.7%" }} type="text" id="street" />
                                </div>
                                <div>
                                    <label htmlFor="street">OTHER PARTY:</label>
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
                                    <b>CASE INFORMATION-FAMILY LAW</b>
                                    
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
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>1. ASSIGNMENT</span>
        <span> Case assigned to </span>
        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        <span> Judicial Officer (name): </span>
        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        <span> Dept. No. </span>
        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>2. PETITION</span>
        <span> The petition for </span>
        <input type="checkbox" style={{ margin: '10px' }} />
        <span> dissolution </span>
        <input type="checkbox" style={{ margin: '10px' }} />
        <span> legal separation </span>
        <input type="checkbox" style={{ margin: '10px' }} />
        <span> nullity </span>
        <input type="checkbox" style={{ margin: '10px' }} />
        <span> parentage </span>
        <input type="checkbox" style={{ margin: '10px' }} />
        <span> other (specify): </span>
        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
        <span> was filed on (date): </span>
        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>3. BACKGROUND DATA</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <span>a. Date of marriage/registered domestic partnership:</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
          <span> Date of separation on the petition: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
          <span> on the response (if different): </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <span> Length of marriage or partnership: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> There is a dispute about the length of the marriage or partnership.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> c.<input type="checkbox" style={{ marginRight: '10px' }} /> Interpreter needed</span>
          <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
            {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
            <span> (1)<input type="checkbox" style={{ marginRight: '10px' }} /> Petitioner's Language: </span>
            <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} /></div>
            {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
            <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
            <span> (2)<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent's Language: </span>
            <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} /></div>
            {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
            <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
            <span> (3)<input type="checkbox" style={{ marginRight: '10px' }} /> Other Party's Language: </span>
            <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
  <span style={{ fontWeight: 'bold' }}>4. CHILDREN</span>
  <table style={{ marginLeft: '20px', marginBottom: '10px', borderCollapse: 'collapse', width:'100%' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '5px' }}>Name of child or children</th>
        <th style={{ border: '1px solid black', padding: '5px' }}>Birthdate</th>
        <th style={{ border: '1px solid black', padding: '5px' }}>Age</th>
        <th style={{ border: '1px solid black', padding: '5px' }}>Gender</th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index}>
          <td style={{ border: '1px solid black', padding: '5px' }}>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
          </td>
          <td style={{ border: '1px solid black', padding: '5px' }}>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
          </td>
          <td style={{ border: '1px solid black', padding: '5px' }}>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
          </td>
          <td style={{ border: '1px solid black', padding: '5px' }}>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
    <input type="checkbox" style={{ margin: '10px' }} />
    <span> Additional children listed on Attachment 4.</span>
  </div>
</div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>5.<input type="checkbox" style={{ marginRight: '10px' }} /> RELATED CASES</span>
        <span> One or both of the parties, or a child or children of the parties, has been involved in other related court cases. (List county or district and case number, if known):</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> a.<input type="checkbox" style={{ marginRight: '10px' }} /> Custody or visitation (parenting time) for the children of this case: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> Juvenile delinquency: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> c.<input type="checkbox" style={{ marginRight: '10px' }} /> Juvenile dependency: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> d.<input type="checkbox" style={{ marginRight: '10px' }} /> Domestic violence/protective order: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> e.<input type="checkbox" style={{ marginRight: '10px' }} /> Bankruptcy: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> f.<input type="checkbox" style={{ marginRight: '10px' }} /> Criminal (only if reasonably related to the issues of this case): </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ margin: '10px' }} /> */}
          <span> g.<input type="checkbox" style={{ marginRight: '10px' }} /> Other: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>6.<input type="checkbox" style={{ marginRight: '10px' }} /> JUDGMENT TERMINATING STATUS OF MARRIAGE OR DOMESTIC PARTNERSHIP HAS BEEN ENTERED</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <span>a. Date of termination:</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px' }} />
          <span> b. Date status judgment entered: </span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)' }} />
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
                        <div> FL-180 [New. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CASE INFORMATION 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        {/* <div>Family Code, §§ 2024, 2340, 2343, 2346</div> */}
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
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%", height:'40px' }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">RESPONDENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%", height:'40px' }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">OTHER PARTY:</label>
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
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>7. SERVICE AND RESPONSE</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> a.<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent was served with the petition on (date):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
          <span> , by (method):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span> personal service</span>
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span> substituted service</span>
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span> publication or posting</span>
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span> notice and acknowledgement of receipt</span>
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span> other (specify):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent has not been served with the petition.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> c.<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent filed a response on (date):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> d.<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent has not filed a response with the court.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> e.<input type="checkbox" style={{ marginRight: '10px' }} /> Default has been entered against respondent.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> f.<input type="checkbox" style={{ marginRight: '10px' }} /> Respondent appeared by filing an Appearances, Stipulations, and Waivers (form FL-130).</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>8. DISCLOSURE</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <span>Service of declarations of disclosure has been completed by:</span>
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <span>a. Preliminary</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Petitioner</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Respondent</span>
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <span>b. Final</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Petitioner</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Respondent</span>
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <span>c. Final has been waived by</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Petitioner</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Respondent</span>
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <span>d. Other (specify):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginRight: '10px', marginLeft: '10px' }} />
          <input type="checkbox" style={{ marginRight: '10px' }} />
          <span>Petitioner</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span>Respondent</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>9. PROTECTIVE ORDERS</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <span><input type="checkbox" style={{ marginRight: '10px' }} />The parties have a restraining order that expires on (date):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <span>a.<input type="checkbox" style={{ marginRight: '10px' }} /> Protected party (name):</span>
          <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
        </div>
        <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> Children are included as protected persons.</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>10. DEPARTMENT OF CHILD SUPPORT SERVICES</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> a.<input type="checkbox" style={{ marginRight: '10px' }} /> The Department of Child Support Services has a separate case open.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> The Department of Child Support Services has intervened in this case.</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>11. CUSTODY/PARENTING TIME (VISITATION)</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> a.<input type="checkbox" style={{ marginRight: '10px' }} /> The parties have participated in child custody and visitation (parenting time) mediation.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> b.<input type="checkbox" style={{ marginRight: '10px' }} /> An agreement has been reached.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> c.<input type="checkbox" style={{ marginRight: '10px' }} /> Counsel has been appointed to represent the minor child or children.</span>
        </div>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> d.<input type="checkbox" style={{ marginRight: '10px' }} /> A child custody evaluation</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span> has been ordered</span>
          <input type="checkbox" style={{ marginRight: '10px', marginLeft: '10px' }} />
          <span> report has been filed.</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>12. EXPERTS</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          {/* <input type="checkbox" style={{ marginRight: '10px' }} /> */}
          <span> a. <input type="checkbox" style={{ marginRight: '10px' }} />The following experts have been appointed (include issues):</span>
          <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%', height: '60px', marginTop: '10px' }}></textarea>
        </div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>13. OTHER</span>
        <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
          <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%', height: '60px', marginTop: '10px' }}></textarea>
        </div>
      </div>
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
                        <div> FL-172 [New. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CASE INFORMATION 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        {/* <div>Family Code, §§ 2024, 2340, 2343, 2346</div> */}
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div>
            </div>
                

        
    )
};
