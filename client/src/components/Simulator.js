import { resetWarningCache } from 'prop-types';
import React, { useState, useEffect, Fragment } from 'react';

const API = process.env.REACT_APP_API;

export const Simulator = () => {

    const [tax_id, setTax_id] = useState('');
    const [business_name, setBusiness_name] = useState('');
    const [requested_amount, setRequested_amount] = useState('');

    // to show decision API after submit
    const [showDecision, setShowDecision] = useState(false);
    const [decision, setDecision] = useState('');
    const [classDecision, setClassDecision] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/application`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Tax_Id: tax_id,
                Business_Name: business_name,
                Requested_Amount: parseInt(requested_amount, 10)
            }),
        });
        const data = await res.json();
        setShowDecision(true);
        setDecision(data.decision);
        setClassDecision(data.decision.toLowerCase());
    };

    const reset = () => {
        setShowDecision(false);
        setDecision('');
        setTax_id('');
        setBusiness_name('');
        setRequested_amount('');
        setClassDecision('');
    };

    return (
        <Fragment>
            {showDecision
                ? <div className="row">
                    <div className="col l8 offset-l2 s12" id="summary">
                        <h1>Summary</h1>
                        <p>Tax ID: {tax_id}</p>
                        <p>Business Name: {business_name}</p>
                        <p>Requested Amount: {requested_amount}</p>
                        <h3>Decision:</h3>
                        <p id="desicion" className={classDecision}>{decision}</p>
                    </div>
                    <div className="col l2 offset-l5 s4 offset-s4">
                        <button className="btn waves-effect waves-light fill-button grey" 
                            onClick={() => reset()}
                        >
                            Ok
                        </button>
                    </div>
                </div>
                : <div className="row">
                    <div className="col l8 offset-l2 s12">
                        <h1>
                            Business Information:
                        </h1>
                    </div>
                    <form className="col l8 offset-l2 s12" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col l8 offset-l2 s12">
                                <input
                                    placeholder="Tax ID"
                                    id="Tax_Id"
                                    type="text"
                                    className="validate"
                                    autoFocus
                                    onChange={(e) => setTax_id(e.target.value)}
                                    value={tax_id}
                                    required
                                />
                                <label htmlFor="Tax_Id">Tax ID</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col l8 offset-l2 s12">
                                <input
                                    placeholder="Business name"
                                    id="Business_Name"
                                    type="text"
                                    className="validate"
                                    onChange={(e) => setBusiness_name(e.target.value)}
                                    value={business_name}
                                    required
                                />
                                <label htmlFor="Business_Name">Business Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col l8 offset-l2 s12">
                                <input
                                    placeholder="Requested amount"
                                    id="Requested_Amount"
                                    type="number"
                                    className="validate"
                                    onChange={(e) => setRequested_amount(e.target.value)}
                                    value={requested_amount}
                                    required
                                />
                                <label htmlFor="Requested_Amount">Requested Amount</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col l4 offset-l4 s6 offset-s6">
                                <button className="btn waves-effect waves-light fill-button grey"
                                    type="submit"
                                >
                                    Simulate
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </Fragment>
    )
}