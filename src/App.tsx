import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './styles/App.css';

const customersData = [
  {
    "id": 1,
    "name": "General Customer",
    "description": "A typical customer in the industry.",
    "details": "This customer engages in standard activities related to our products and services."
  },
  {
    "id": 2,
    "name": "Common Client",
    "description": "An average client seeking our solutions.",
    "details": "The client interacts with our offerings in a standard manner."
  },
  {
    "id": 3,
    "name": "Standard User",
    "description": "A typical user of our services.",
    "details": "This user follows standard procedures and workflows."
  },
  {
    "id": 4,
    "name": "Regular Patron",
    "description": "A familiar patron of our business.",
    "details": "The patron's interactions align with common usage patterns."
  },
  {
    "id": 5,
    "name": "Everyday Consumer",
    "description": "A representative consumer of our products.",
    "details": "This consumer's behavior mirrors typical usage scenarios."
  }
];


const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);

  const handleSelectCustomer = (id: number) => {
    const customer = customersData.find((customer) => customer.id === id);
    if (customer) {
      setSelectedCustomer(customer);
    }
  };

  return (
    <div className="app">
      <h1>This here is the heading</h1>
      <div className="content">
        <CustomerList
          customers={customersData}
          onSelectCustomer={handleSelectCustomer}
          selectedCustomerId={selectedCustomer.id} // Pass selectedCustomerId
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
