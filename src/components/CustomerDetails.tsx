import React, { useState, useEffect } from 'react';
import '../styles/Customer.css';


type CustomerDetailsProps = {
  customer: { id: number; name: string; details: string };
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Function to fetch images from the external API
    const fetchImages = async () => {
      try {
        const key=process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const response = await fetch(`https://api.unsplash.com/photos/random?count=9&client_id=${key}`);
        const data = await response.json();
        const imageUrls = data.map((img: any) => img.urls.small);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    // Fetch images initially
    fetchImages();

    // Set up an interval to update images every 10 seconds
    const interval = setInterval(() => {
      fetchImages();
    }, 10000); // 10000ms = 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [customer.id]); // Re-fetch images if customer changes

  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.details}</p>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Customer ${customer.id} - ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
