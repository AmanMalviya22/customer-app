import React from 'react';
import '../styles/Customer.css';

type CustomerListProps = {
  customers: { id: number; name: string; description: string }[];
  onSelectCustomer: (id: number) => void;
  selectedCustomerId: number; // New prop to track selected customer
};

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-item ${customer.id === selectedCustomerId ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
