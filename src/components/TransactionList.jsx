import React from "react";

function TransactionList() {
return (
<div>
    <h3>History</h3>
    <ul>
        <li className="minus">
        Cash<span>-$400</span><button className="delete-btn">x</button>
        </li>
    </ul>
</div>

) 

}

export default TransactionList