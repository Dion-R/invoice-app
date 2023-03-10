import Navbar from "./components/Navbar";
import InvoiceController from "./components/InvoiceController";
import InvoiceCard from "./components/InvoiceCard";
import NoInvoices from "./components/NoInvoices";
import InvoiceOverview from "./components/InvoiceOverview";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container px-5 py-7">
        {/* <InvoiceController />
        <InvoiceCard />
        <NoInvoices /> */}
        <InvoiceOverview />
      </div>
    </div>
  );
}

export default App;
