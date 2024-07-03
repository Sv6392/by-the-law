import React from 'react'

export default function SU145copy() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: "0", marginBottom: "0" }}>FL-145copy</h3>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', lineHeight: '1.5', padding: '20px' }}>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
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
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"71%" }} type="name" id="attorney" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse", paddingLeft: "1.6rem" }}>
                                <div  style={{ marginBottom: 2 }}>
                                    <label><b>SUPERIOR COURT OF CALIFORIA, COUNTY OF</b></label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                        <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                        <div  style={{ marginBottom: 2 }}>
                                    <label><b>SHORT TITLE:</b></label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={2}
                                        defaultValue={""}
                                    />
                                </div>
                        </td>
                        </tr>
                        <tr>

                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div><b><h1>FORM INTERROGATORIES-FAMILY LAW</h1></b></div>
                                <div style={{ marginBottom: 3, marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">Asking Party::</label>
                                    <input  type="text" id="name" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "85.4%" }} />
                                </div>
                                <div style={{ marginBottom: 3 }}>
                                    <label htmlFor="street">Answering Party :</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginBottom: 3 }}>
                                    <label htmlFor="street">Set No.:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.6%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "7px",paddingBottom: "5px",width:"50%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table><br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                    <h4><b>Sec. 1. Instructions to Both Parties</b></h4>
                    <p>
                        The interrogatories on page 2 of this form are intended to provide for the exchange of relevant information without
                        unreasonable expense to the answering party. They do not change existing law relating to interrogatories, nor do they
                        affect the answering party's right to assert any privilege or make any objection. <strong>Privileges must be asserted.</strong>
                    </p><br />
                    <h4><b>Sec. 2. Definitions</b></h4>
                    <p>Words in <strong>boldface</strong> in these interrogatories are defined as follows:</p>
                    <ol>
                        <li>
                           <b>(a)</b> <strong>Person</strong> includes a natural person; a partnership; any kind of business, legal, or public entity; and its agents or employees.
                        </li>
                        <li>
                          <b>(b)</b>  <strong>Document</strong> means all written, recorded, or graphic materials, however stored, produced, or reproduced.
                        </li>
                        <li>
                         <b> (c)</b>  <strong>Asset</strong> or <strong>property</strong> includes any interest in real estate or personal property. It includes any interest in a pension, profit-sharing, or retirement plan.
                        </li>
                        <li>
                          <b>(d)</b>  <strong>Debt</strong> means any obligation, including debts paid since the date of separation.
                        </li>
                        <li>
                          <b>(e)</b>  <strong>Support</strong> means any benefit or economic contribution to the living expenses of another person, including gifts.
                        </li>
                        <li>
                          <b>(f)</b>  If asked to <strong>identify a person</strong>, give the person's name, last known residence and business addresses, telephone numbers, and company affiliation at the date of the transaction referred to.
                        </li>
                        <li>
                          <b>(g)</b>  If asked to <strong>identify a document</strong>, attach a copy of the document unless you explain why not. If you do not attach the copy, describe the document, including its date and nature, and give the name, address, telephone number, and occupation of the person who has the document.
                        </li>
                    </ol><br />
                    <h4><b>Sec. 3. Instructions to the Asking Party</b></h4>
                    <p>
                        Check the box next to each interrogatory you want the answering party to answer.
                    </p>
                </div>

                <div style={{ width: '48%' }}>
                    <h4><b>Sec. 4. Instructions to the Answering Party</b></h4>
                    <p>
                        You must answer these interrogatories under oath within 30 days, in accordance with Code of Civil Procedure section
                        2030.260.
                    </p>
                    <p>
                        You must furnish all information you have or can reasonably find out, including all information (not privileged) from your
                        attorneys or under your control. If you don't know, say so.
                    </p>
                    <p>
                        If an interrogatory is answered by referring to a document, the document must be attached as an exhibit to the response and
                        referred to in the response. If the document has more than one page, refer to the page and section where the answer can be
                        found.
                    </p>
                    <p>
                        If a document to be attached to the response may also be attached to the <i>Schedule of Assets and Debts</i> (form FL-142), the document should be attached only to the response, and the form should refer to the response.
                    </p>
                    <p>
                        If an interrogatory cannot be answered completely, answer as much as you can, state the reason you cannot answer the
                        rest, and state any information you have about the unanswered portion.
                    </p><br />
                    <h4><b>Sec. 5. Oath</b></h4>
                    <p>
                        Your answers to these interrogatories must be under oath, dated, and signed. Use the following statement at the end of your answers:
                    </p>
                    <blockquote>
                        I declare under penalty of perjury under the laws of the State of California that the foregoing answers are true and correct.
                    </blockquote>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                        <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">Date:</label>
                                
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "7px",paddingBottom: "5px",width:"100%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">(SIGNATURE):</label>
                                
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "7px",paddingBottom: "5px",width:"100%" }} type="text" id="street" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-145 [Rev. January 1, 2006]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>FORM INTERROGATORIES-FAMILY LAW</b></h3>
                        
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Code of Civil Procedure, §§ 2030.010-2030.410, 2033.710</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 1 of 2</li>
                    </div>
                </div>
                <br /><br />
                <div className="form-container" style={{display:'flex', justifyContent:'space-between'}}>
      <div className="form-section" style={{width:'48%'}}>
        <div className="form-item" style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="personalHistory" style={{marginRight:'10px', marginTop:'5px'}} />
         (1). <label htmlFor="personalHistory"style={{lineHeight:'1.5',fontSize:'15px'}}>Personal history. State your full name, current residence address and work address, social security number, any other names you have used, and the dates between which you used each name.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="agreements" style={{marginRight:'10px', marginTop:'5px'}}/>
         (2). <label htmlFor="agreements"style={{lineHeight:'1.5',fontSize:'15px'}}>Agreements. Are there any agreements between you and your spouse or domestic partner, made before or during your marriage or domestic partnership or after your separation, that affect the disposition of assets, debts, or support in this proceeding? If your answer is yes, for each agreement state the date made and whether it was written or oral, and attach a copy of the agreement or describe its contents.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="legalActions" style={{marginRight:'10px', marginTop:'5px'}}/>
         (3). <label htmlFor="legalActions"style={{lineHeight:'1.5',fontSize:'15px'}}>Legal actions. Are you a party or do you anticipate being a party to any legal or administrative proceeding other than this action? If your answer is yes, state your role and the name, jurisdiction, case number, and a brief description of each proceeding.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="personsSharingResidence"style={{marginRight:'10px', marginTop:'5px'}} />
          (4). <label htmlFor="personsSharingResidence"style={{lineHeight:'1.5',fontSize:'15px'}}>Persons sharing residence. State the name, age, and relationship to you of each person at your present address.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="supportProvided"style={{marginRight:'10px', marginTop:'5px'}} />
          (5). <label htmlFor="supportProvided"style={{lineHeight:'1.5',fontSize:'15px'}}>Support provided others. State the name, age, address, and relationship to you of each person for whom you have provided support during the past 12 months and the amount provided per month for each.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="supportReceived" style={{marginRight:'10px', marginTop:'5px'}}/>
          (6). <label htmlFor="supportReceived"style={{lineHeight:'1.5',fontSize:'15px'}}>Support received for others. State the name, age, address, and relationship to you of each person from whom you have received support during the past 12 months and the amount received per month for each.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="currentIncome"style={{marginRight:'10px', marginTop:'5px'}} />
          (7). <label htmlFor="currentIncome"style={{lineHeight:'1.5',fontSize:'15px'}}>Current income. List all income you received during the past 12 months, its source, the basis for its computation, and the total amount received from each. Attach your last three paycheck stubs.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="otherIncome"style={{marginRight:'10px', marginTop:'5px'}} />
          (8). <label htmlFor="otherIncome"style={{lineHeight:'1.5',fontSize:'15px'}}>Other income. During the past three years, have you received cash or other property from any source not identified in item 7? If so, list the source, the date, and the nature and value of the property.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="taxReturns" style={{marginRight:'10px', marginTop:'5px'}}/>
          (9). <label htmlFor="taxReturns"style={{lineHeight:'1.5',fontSize:'15px'}}>Tax returns. Attach copies of all tax returns and tax schedules filed by or for you in any jurisdiction for the past three calendar years.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="assetsDebts"style={{marginRight:'10px', marginTop:'5px'}} />
          (10). <label htmlFor="assetsDebts"style={{lineHeight:'1.5',fontSize:'15px'}}>Schedule of assets and debts. Complete the Schedule of Assets and Debts (form FL-142) served with these interrogatories.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="separateProperty" style={{marginRight:'10px', marginTop:'5px'}}/>
          (11). <label htmlFor="separateProperty"style={{lineHeight:'1.5',fontSize:'15px'}}>Separate property contentions. State the facts that support your contention that an asset or debt is separate property.</label>
        </div>
      </div>

      <div className="form-section"style={{width:'48%'}}>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="propertyValuations" style={{marginRight:'10px', marginTop:'5px'}}/>
          (12). <label htmlFor="propertyValuations"style={{lineHeight:'1.5',fontSize:'15px'}}>Property valuations. During the past 12 months, have you received written offers to purchase or had written appraisals of any of the assets listed on your completed Schedule of Assets and Debts? If your answer is yes, identify the document.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="propertyHeldByOthers" style={{marginRight:'10px', marginTop:'5px'}}/>
          (13). <label htmlFor="propertyHeldByOthers"style={{lineHeight:'1.5',fontSize:'15px'}}>Property held by others. Is there any property held by any third party in which you have any interest or over which you have any control? If your answer is yes, indicate whether the property is shown on the Schedule of Assets and Debts completed by you. If it is not, describe and identify each such asset, state its present value and the basis for your valuation, and identify the person holding the asset.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="retirementBenefits" style={{marginRight:'10px', marginTop:'5px'}}/>
          (14). <label htmlFor="retirementBenefits"style={{lineHeight:'1.5',fontSize:'15px'}}>Retirement and other benefits. Do you have an interest in any disability, retirement, profit-sharing, or deferred compensation plan? If your answer is yes, identify each plan and provide the name, address, and telephone number of the administrator and custodian of records.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="reimbursementClaims" style={{marginRight:'10px', marginTop:'5px'}}/>
          (15). <label htmlFor="reimbursementClaims"style={{lineHeight:'1.5',fontSize:'15px'}}>Claims of reimbursement. Do you claim the legal right to be reimbursed for any expenditures of your separate or community property? If your answer is yes, state all supporting facts.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="credits" style={{marginRight:'10px', marginTop:'5px'}}/>
          (16). <label htmlFor="credits"style={{lineHeight:'1.5',fontSize:'15px'}}>Credits. Have you claimed reimbursement credits for payments of community debts since the date of separation? If your answer is yes, identify the source of payment, the creditor, the date paid, and the amount paid. State whether you have added to the debt since the separation.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="insurance" style={{marginRight:'10px', marginTop:'5px'}}/>
          (17). <label htmlFor="insurance"style={{lineHeight:'1.5',fontSize:'15px'}}>Insurance. Identify each health, life, automobile, and disability insurance policy or plan that you own or that covers you, your children, or your assets. State the policy type, policy number, and name of the company. Identify the agent and give the address.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="health"style={{marginRight:'10px', marginTop:'5px'}} />
          (18). <label htmlFor="health"style={{lineHeight:'1.5',fontSize:'15px'}}>Health. Is there any physical or emotional condition that limits your ability to work? If your answer is yes, state each fact on which you base your answer.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="childrenNeeds" style={{marginRight:'10px', marginTop:'5px'}}/>
          (19). <label htmlFor="childrenNeeds"style={{lineHeight:'1.5',fontSize:'15px'}}>Children’s needs. Do you contend that any of your children have any special needs? If so, identify the child with the need, the reason for the need, its cost, and its expected duration.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="attorneyFees" style={{marginRight:'10px', marginTop:'5px'}}/>
          (20). <label htmlFor="attorneyFees"style={{lineHeight:'1.5',fontSize:'15px'}}>Attorney fees. State the total amount of attorney fees and costs incurred by you in this proceeding, the amount paid, and the source of the money paid. Describe the billing arrangements.</label>
        </div>
        <div className="form-item"style={{display:'flex', alignItems:'flex-start', marginBottom:'10px'}}>
          <input type="checkbox" id="gifts"style={{marginRight:'10px', marginTop:'5px'}} />
          (21). <label htmlFor="gifts" style={{lineHeight:'1.5',fontSize:'15px'}}>Gifts. List any gifts you have made without the consent of your spouse or domestic partner in the past 24 months, their values, and the recipients.</label>
        </div>
      </div>
    </div>






                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-145 [Rev. January 1, 2006]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>FORM INTERROGATORIES-FAMILY LAW</b></h3>
                        
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Code of Civil Procedure, §§ 2030.010-2030.410, 2033.710</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 2 of 2</li>
                    </div>
                </div>
                <br /><br />    
            </div>
        </>





    )
}
