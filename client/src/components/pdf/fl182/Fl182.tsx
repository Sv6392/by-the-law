import React from 'react'
import SUPFl182 from "./SU182";
export default function () {
    const [details, setDetails] = React.useState<SUPFl182>(
        {} as SUPFl182
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-190 </h3>
                <table style={{ width: "100%",  border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                                        id=""
                                        cols={80}
                                        // rows={4}
                                    />
                                </div>
                                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr",marginBottom:"5px" }}>
                                    <div>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input 
                                        name={"TelephoneNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"60%" }} type="number" id="telephone" />
                                    </div>
                                    <div>
                                        <label htmlFor="fax" style={{display:"inline"}}>FAX NO(optional):</label>
                                        <input
                                        name={"FaxNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"54%" }} type="text" id="fax" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="EmailAddress">E-MAIL ADDRESS (Optional):</label>
                                    <input 
                                    name={"EmailAddress"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"71.7%" }} type="email" id="attorney" />
                                </div>
                                <div>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input 
                                    name={" AttorneyFor"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"71.7%" }} type="email" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                            <div style={{position:'initial'}}><b>FOR CORT USE ONLY</b></div>
                               
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2 }}>
                                    <label htmlFor="name"><b>SUPERIOR COURT OF CALIFORIA, COUNTY OF</b></label>
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
                                <h3 style={{ textAlign: "center" }}>
                                    <b>JUDGMENT CHECKLIST— DISSOLUTION/LEGAL SEPARATION</b>
                                </h3>
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
                <div style={{ justifyContent:'center',alignItems:'center', border:'2px solid black', margin:'10px', padding:'4px'}}>
                     <b>This judgment checklist is a list of documents that a court may require to complete a default 
                        or uncontested judgment. The checklist may be filed along with your judgment, but is not required. 
                        If the forms or other documents have already been filed, you should check the boxes indicating that 
                        they have been previously filed. Unless listed otherwise on this form, when you file a document 
                        with the court, you should submit an original and 2 copies. One copy is for you and one is for 
                        the other party. There are three types of default and uncontested judgments:</b>
                        <div><b>•	Default With No Agreement (no response and no written agreement)</b></div>
                        <div><b>•	Default With Agreement (no response, but there is a written agreement)</b></div>
                        <div><b>•	Uncontested Case (response filed, or other appearance by respondent, and a written agreement)</b></div>
                         </div>
                         <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <b>DEFAULT WITH NO AGREEMENT (no response and no written agreement)</b><br />
                            <i>(Please check the box by each document being filed)</i><span style={{ marginLeft: '550px' }}> <b>Previously Filed</b> </span>
                            </td>
                        </tr>
                        </tbody>
                        </table>
            <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                                
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                a.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Proof of Service of Summons (form FL-115) or other proof of service
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                b.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Request to Enter Default (form FL-165), with a stamped 
                            envelope addressed to respondent and the court clerk's address as the return address
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                c.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Petitioner's Declaration Regarding Service of Disclosure (form FL-141)
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                d.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Declaration for Default or Uncontested Dissolution or Legal Separation (form FL-170)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                e.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Judgment (form FL-180) (5 copies)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                f.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Notice of Entry of Judgment (form FL-190)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                g.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            2 stamped envelopes of sufficient size and with sufficient 
                            postage to return the Judgment and Notice of Entry of Judgment, 
                            one envelope addressed to petitioner and the other to respondent.
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                h.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Declaration Under Uniform Child Custody Jurisdiction and Enforcement 
                            Act (UCCJEA) (form FL-105).(A new form must be filed if there have been any 
                            changes since the one most recently filed.)
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                i.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Petitioner's Income and Expense Declaration (form FL-150) or Financial 
                            Statement (Simplified) (form FL-155).(Needed unless one has been filed 
                            within the past 90 days and there have been no changes since then.)
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                j.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Computer printout of guideline child support (optional)
                            </td>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                k.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Notice of Rights and Responsibilities and Information Sheet on 
                            Changing a Child Support Order (form FL-192).This may be attached by 
                            the petitioner or by the court.
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table><br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-182 [New July 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        JUDGMENT CHECKLIST— DISSOLUTION/LEGAL SEPARATION
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Cal. Rules of Court, rule 5.405</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 3</li>
                    </div>
                </div><br />

                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER 1:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">PETITIONER 2:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
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
                </table>
                <div><span style={{ marginLeft: '930px' }}> <b>Previously Filed</b> </span></div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                l.
                            </td>
                            <td width="95%" valign="top">
                            Child Support Order
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Stipulation to Establish or Modify Child Support and Order (form FL-350) (attach to Judgment), or</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Child Support Information and Order Attachment (form FL-342) (attach to Judgment), or</i>
                            </td>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Written agreement containing declarations required by Family Code section 4065(a) (attach to Judgment)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                m.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Income Withholding for Support (form FL-195/OMB No. 0970-0154)
                            </td>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                n.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Child Custody and Visitation (Parenting Time) Order Attachment (form FL-341)
                                 or other proposed written order containing the information required by Family Code 3048(a) (attach to Judgment)</i>
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="97%" valign="top">
                            
                            <b>If spousal/partner support is requested, the marriage/partnership is over
                                10 years in duration, or termination of spousal/partner support for the respondent is requested:</b>
                            </td>
                        </tr>
                        
                        <tr>
                            <td width="3%" valign="top">
                                o.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Spousal or Partnership Support Declaration Attachment (form FL-157)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                p.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Income and Expense Declaration (form FL-150) (Needed unless a current financial 
                                declaration has been filed within the past 90 days and there have been no changes since then.)</i>
                            </td>
                             <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                </div>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                q.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Spousal, Partner, or Family Support Order Attachment (form FL-343) or other proposed written order
                                (attach to Judgment)
                                </i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td></td>
                            <td width="95%" valign="top">
                            <b>If assets or debts need to be divided or assigned:</b>
                            </td>
                            
                        </tr>
                       
                        <tr>
                            <td width="3%" valign="top">
                                r.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Property Declaration (form FL-160)</i>
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                </div>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                s.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Property Order Attachment to Judgment (form FL-345) or other proposed written order (attach to Judgment)
                            </td>
                            
                        </tr>
                        <tr>
                            <td></td>
                            <td width="95%" valign="top">
                            <b>If attorney fees and costs are requested:</b>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                t.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Request for Attorney Fees and Costs (form FL-319)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                u.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Attorney Fees and Costs Order Attachment (form FL-346) or other proposed written order
                                (attach to Judgment)
                                </i>
                            </td>
                            
                        </tr>
                        </tbody>
                    </table>
                </div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                2.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <b>DEFAULT WITH NO AGREEMENT (no response and no written agreement)</b><br />
                            </td>
                        </tr>
                        </tbody>
                        </table>
            <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                                
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                a.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Proof of Service of Summons (form FL-115) or other proof of service</i>
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                b.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Request to Enter Default (form FL-165), with a stamped envelope addressed to respondent and the court clerk's address as the return address
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                c.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Petitioner's Declaration Regarding Service of Declaration of Disclosure (form FL-141) (preliminary)
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                d.
                            </td>
                            <td width="95%" valign="top">
                            
                            Declaration Regarding Service of Final Declaration of Disclosure
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Petitioner's Declaration Regarding Service of Declaration of Disclosure (form FL-141) (final) or</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Stipulation and Waiver of Final Declaration of Disclosure (form FL-144) or</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Separately filed waiver or waiver included in a written agreement under Family Code section 2105(d)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                e.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Declaration for Default or Uncontested Dissolution or Legal Separation (form FL-170)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                f.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Written agreement of the parties. Respondent's signature on the agreement must be notarized.
                                (attach to Judgment.)

                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                g.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Judgment (form FL-180) (5 copies)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                h.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Notice of Entry of Judgment (form FL-190)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                i.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            2 stamped envelopes of sufficient size and with sufficient postage to 
                            return the Judgment and Notice of Entry of Judgment, one envelope addressed 
                            to petitioner and the other to respondent
                            </td>
                
                        </tr>
                        <tr>
                            <td></td>
                            <td width="95%" valign="top">
                            <b>If there are minor children of the marriage or domestic partnership:</b>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                j.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Declaration Under Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA) (form FL-105).
                                    (A new form must be filed if there have been any changes since the one most recently filed.)
                                    </i>
                            </td>
                            <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                    </div>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                k.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Income and Expense Declaration (form FL-150) or Financial Statement (Simplified) (form FL-155).
                                    (Needed unless one has been filed within the past 90 days and there have been no changes since then.)
                                    </i>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
                </div><br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-182 [New July 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        JUDGMENT CHECKLIST— DISSOLUTION/LEGAL SEPARATION
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Cal. Rules of Court, rule 5.405</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 3</li>
                    </div>
                </div><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER 1:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">PETITIONER 2:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
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
                </table>
                <div><span style={{ marginLeft: '930px' }}> <b>Previously Filed</b> </span></div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                l.
                            </td>
                            <td width="95%" valign="top">
                            Child Support Order
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Stipulation to Establish or Modify Child Support and Order (form FL-350) (attach to Judgment), or</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Child Support Information and Order Attachment (form FL-342) (attach to Judgment), or</i>
                            </td>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Written agreement containing declarations required by Family Code section 4065(a) (attach to Judgment)
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                m.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            Income Withholding for Support (form FL-195/OMB No. 0970-0154)
                            </td>
                           
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                n.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Child Custody and Visitation (Parenting Time) Order Attachment (form FL-341)
                                 or other proposed written order containing the information required by Family Code 3048(a) (attach to Judgment)</i>
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="97%" valign="top">
                            
                            <b>If spousal/partner support is requested, the marriage/partnership is over
                                10 years in duration, or termination of spousal/partner support for the respondent is requested:</b>
                            </td>
                        </tr>
                        
                        <tr>
                            <td width="3%" valign="top">
                                o.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Spousal or Partnership Support Declaration Attachment (form FL-157)</i>
                            </td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                p.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            <i>Income and Expense Declaration (form FL-150) (Needed unless a current financial 
                                declaration has been filed within the past 90 days and there have been no changes since then.)</i>
                            </td>
                             <div>
                                    <input type="checkbox" style={{ marginLeft: '10px' }} />
                                </div>
                            
                        </tr>
                        </tbody>
                    </table>
                







                            
                
                                            

                                            
                <br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-182 [New July 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        JUDGMENT CHECKLIST— DISSOLUTION/LEGAL SEPARATION
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Cal. Rules of Court, rule 5.405</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 3 of 3</li>
                    </div>
                </div>
                </div> 
                

        
    )
};
