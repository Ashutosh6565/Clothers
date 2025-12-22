import React, { useEffect, useState } from 'react';

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "Delhi", country: "India" },
          orderItems: [
            { name: "Product 1", image: "https://picsum.photos/200" }
          ],
          totalPrice: 200,
          isPaid: true
        },
        {
          _id: "67890",
          createdAt: new Date(),
          shippingAddress: { city: "Mumbai", country: "India" },
          orderItems: [
            { name: "Product 2", image: "https://picsum.photos/200" }
          ],
          totalPrice: 150,
          isPaid: true
        }
      ];

      setOrders(mockOrders);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
   <div>
    
   </div>
  );
};

export default MyOrderPage;
