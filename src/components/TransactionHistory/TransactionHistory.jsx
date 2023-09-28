export const TransactionHistory = ({items}) => {
    return(
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (
      <TransactionItem key={item.id} item={item} /> 
    ))}
  </tbody>
</table>
    )
};

const TransactionItem = ({item:{id, type, amount, currency}}) => {
    return(
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    )
};

/* <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */