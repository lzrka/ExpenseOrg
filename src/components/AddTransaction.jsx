import React,{useState, useContext} from "react";
import { GlobalContext } from "../context/Globalstate";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';



function AddTransaction() {
const [description, setText] = useState('');
const [amount, setAmount] = useState(0);
const [currency, setCurrency] = useState('');
const [category, setCategory] = useState('');
const [date, setDate] = useState('');

const {addTransaction} = useContext(GlobalContext);

const onSubmit = e => {
    console.log(currency)
    if(description == '' || amount == '' || currency == '' || category == '' || date == "")
    alert('All field has to be completed');


    e.preventDefault();

    const newTransaction = {
        id: uuidv4(),
        description,
        amount: +amount,
        date,
        currency,
        category,
        insertDate: new Date()
    }


    addTransaction(newTransaction);
    setDate('');
    setText('');
    setAmount(0);
    setCurrency('');
    setCategory('');
}

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} className='add_transaction_container'>
            <div className="form-control">
                <label htmlFor="text">Description</label>
                <input type="text" value={description} onChange={(e) => setText(e.target.value)} placeholder="Enter text...." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount...." />
            </div>
            <div className="form-control">
                    <label htmlFor="currency">Currency</label>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="">Select currency</option>
                        <option value="EUR">EUR</option>
                        <option value="HUF">HUF</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="category">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Clothes">Clothes</option>
                    </select>
                </div>
            <div className="form-control">
             <label htmlFor="date">Date</label>
             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
                <button className="add_transaction_button">Add transaction</button>
            </form>

        </div>
    )
}

export default AddTransaction
