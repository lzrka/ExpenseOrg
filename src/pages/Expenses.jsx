import TransactionList from "../components/TransactionList";
import { GlobalProvider } from "../context/Globalstate";

export default function Expenses() {
  return (
    <GlobalProvider>
      <h1>Expenses</h1>
      <TransactionList />;
    </GlobalProvider>
  );
}
