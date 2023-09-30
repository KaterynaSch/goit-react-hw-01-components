import { Table, TableData, TableHead } from "./TransactionnHistory.styled";

export const TransactionHistory = ({items}) => {
    return(
<Table>
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (
      <TransactionItem key={item.id} item={item} /> 
    ))}
  </tbody>
</Table>
    )
};

const TransactionItem = ({item:{id, type, amount, currency}}) => {
    return(
        <tr key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
        </tr>
    )
};

