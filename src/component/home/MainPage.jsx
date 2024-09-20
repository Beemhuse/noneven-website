

// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5"; // Importing close icon

// export default function MainPage() {
//   const [checkoutInfo, setCheckoutInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState(0);

//   // Flutterwave configuration object
//   const flutterwaveConfig = {
//     public_key: "FLWPUBK_TEST-3c7d20e63800e36901ea8101a3a53aea-X", // Replace this with your Flutterwave public key
//     tx_ref: Date.now(), // Reference to uniquely identify the transaction
//     amount: selectedPrice, // Amount in Naira
//     currency: "NGN", // Currency
//     payment_options: "card, mobilemoney, ussd",
//     customer: {
//       email: checkoutInfo.email, // Customer's email address
//       phonenumber: checkoutInfo.phone, // Customer's phone number
//       name: checkoutInfo.name, // Customer's name
//     },
//     customizations: {
//       title: "Product Purchase",
//       description: `Payment for ${selectedProduct}`,
//       logo: "https://example.com/logo.png", // Add your logo URL here
//     },
//   };

//   // Function to handle payment
//   const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

//   // Function to initialize Flutterwave payment
//   const handlePayment = () => {
//     if (
//       checkoutInfo.name &&
//       checkoutInfo.email &&
//       checkoutInfo.phone &&
//       checkoutInfo.address
//     ) {
//       handleFlutterwavePayment({
//         callback: (response) => {
//           console.log(response);
//           if (response.status === "successful") {
//             alert(`Payment successful for ${selectedProduct}`);
//           }
//           closePaymentModal(); // Close modal programmatically
//         },
//         onClose: () => {
//           console.log("Payment closed");
//         },
//       });
//     } else {
//       alert("Please fill in all the required information.");
//     }
//   };

//   // Function to show the form and set selected product and price
//   const handleCheckout = (product, price) => {
//     setSelectedProduct(product);
//     setSelectedPrice(price);
//     setShowForm(true); // Show form for delivery info
//   };

//   // Function to handle form submission and start the payment process
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     handlePayment();
//     setShowForm(false); // Hide form after submission
//   };

//   // Function to close the form
//   const closeForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <section className="xl:px-[150px] p-3 mt-[50px] grid gap-[50px] relative">
//           <img src="/root.svg" alt="image of root" className="w-full" />
//       <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
//         <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
//           Building a Thriving Agricultural Ecosystem
//         </h2>
//         <p className="xl:text-2xl text-lg text-center">
//           We are dedicated to supporting Nigerian farmers and businesses
//           throughout the agricultural value chain. Our mission is to promote
//           sustainable practices, ensure access to necessary resources, and
//           contribute to food security in the nation.
//         </p>
//       </div>
//       <div className="flex flex-col items-center gap-8">
//         <div className="grid grid-cols-3 items-center gap-3">
//           <img src="/root.svg" alt="image of root" className="w-" />
//           <img src="/root.svg" alt="image of root" />
//           <img src="/root.svg" alt="image of root" />
//         </div>
//         <button className="flex items-center bg-[#2D89BF] px-3 py-2 text-white gap-3">
//           {" "}
//           Learn More{" "}
//         </button>
//       </div>
//       <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
//         <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
//           Unlock Clarity & Confidence in Your Real Estate Journey
//         </h2>
//         <p className="xl:text-2xl text-lg text-center">
//           Schedule a personalized consultation with our real estate experts. Get
//           expert guidance & navigate the market with ease, whether you&apos;re
//           buying, selling, or investing.
//         </p>
//       </div>
//       <div className="flex flex-col items-center gap-8">
//         <div className="grid grid-cols-3 items-center gap-3">
//           <img src="/writing.svg" alt="image of writing" className="w-" />
//           <img src="/hand.svg" alt="image of  hand" />
//           <img src="/meeting.svg" alt="image of meeting" />
//         </div>
//         <button className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3">
//           <IoMdCall /> Book a consultation call{" "}
//         </button>
//       </div>

//       {/* Image overlay */}
//       <div
//         className="relative h-80 bg-cover bg-center"
//         style={{ backgroundImage: "url('/bgoverlay.svg')" }}
//       >
//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

//         {/* Text Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-2xl font-bold mb-4">
//             Efficient Import and Export Solutions
//           </h1>
//           <p className="mb-4">
//             From customs clearance to logistics, we handle all aspects of global
//             trade, allowing you to focus on growing your business.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
//             Contact Us Today
//           </button>
//         </div>
//       </div>
//       {/*  */}

//       <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
//         <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
//           Comprehensive Solutions for Your Agricultural Needs{" "}
//         </h2>
//         <p className="xl:text-2xl text-lg text-center">
//           From farm produce and equipment to expert services and global trade,
//           Noble Negro Ventures offers a wide range of solutions to support your
//           agricultural endeavors.
//         </p>
//       </div>
      
//       {/* Form for checkout info */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
//             {/* Close button */}
//             <button
//               onClick={closeForm}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//             >
//               <IoClose size={24} />
//             </button>

//             <h2 className="text-lg font-bold mb-4 text-center">Enter Delivery Information</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Name</label>
//                 <input
//                   type="text"
//                   value={checkoutInfo.name}
//                   onChange={(e) => setCheckoutInfo({ ...checkoutInfo, name: e.target.value })}
//                   required
//                   className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={checkoutInfo.email}
//                   onChange={(e) => setCheckoutInfo({ ...checkoutInfo, email: e.target.value })}
//                   required
//                   className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Phone</label>
//                 <input
//                   type="text"
//                   value={checkoutInfo.phone}
//                   onChange={(e) => setCheckoutInfo({ ...checkoutInfo, phone: e.target.value })}
//                   required
//                   className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Delivery Address</label>
//                 <input
//                   type="text"
//                   value={checkoutInfo.address}
//                   onChange={(e) => setCheckoutInfo({ ...checkoutInfo, address: e.target.value })}
//                   required
//                   className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md w-full font-semibold"
//                 >
//                   Proceed to Payment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Main page content */}
//       <div className="flex flex-col items-center gap-8">
//         <div className="grid grid-cols-3 items-center gap-6">
//           {/* Product 1 */}
//           <div className="text-center">
//             <img src="/prod1.svg" alt="image of writing" className="w-full" />
//             <h3 className="font-bold text-lg mt-2">Product 1</h3>
//             <p className="text-gray-600">₦5000</p>
//             <button
//               onClick={() => handleCheckout("Product 1", 5000)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
//             >
//               Buy Now
//             </button>
//           </div>

//           {/* Product 2 */}
//           <div className="text-center">
//             <img src="/prod2.svg" alt="image of hand" className="w-full" />
//             <h3 className="font-bold text-lg mt-2">Product 2</h3>
//             <p className="text-gray-600">₦3000</p>
//             <button
//               onClick={() => handleCheckout("Product 2", 3000)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
//             >
//               Buy Now
//             </button>
//           </div>

//           {/* Product 3 */}
//           <div className="text-center">
//             <img src="/prod3.svg" alt="image of meeting" className="w-full" />
//             <h3 className="font-bold text-lg mt-2">Product 3</h3>
//             <p className="text-gray-600">₦7000</p>
//             <button
//               onClick={() => handleCheckout("Product 3", 7000)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { FaShoppingCart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from "emailjs-com"; // Importing EmailJS

export default function MainPage() {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Flutterwave configuration object
  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-3c7d20e63800e36901ea8101a3a53aea-X", // Replace this with your Flutterwave public key
    tx_ref: Date.now(), // Reference to uniquely identify the transaction
    amount: selectedPrice, // Amount in Naira
    currency: "NGN", // Currency
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: checkoutInfo.email, // Customer's email address
      phonenumber: checkoutInfo.phone, // Customer's phone number
      name: checkoutInfo.name, // Customer's name
    },
    customizations: {
      title: "Product Purchase",
      description: `Payment for ${selectedProduct}`,
      logo: "https://example.com/logo.png", // Add your logo URL here
    },
  };

  // Function to handle payment
  const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

  // Function to send emails using EmailJS
  const sendEmails = (buyerEmail, paymentReference) => {
    const emailData = {
      name: checkoutInfo.name,
      email: checkoutInfo.email,
      phone: checkoutInfo.phone,
      address: checkoutInfo.address,
      product: selectedProduct,
      price: selectedPrice,
      payment_reference: paymentReference, // Include the payment reference in the email data
    };

    // Sending email to admin
    emailjs.send(
      'service_1oupkxg', // Replace with your EmailJS service ID
      'template_gb4qaag', // For admin email
      {
        ...emailData,
        to_email: 'noblenegroventures@gmail.com', // Admin's email
        subject: 'New Purchase Order',
      },
      'YOUR_USER_ID' // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log('Admin email sent:', result.text);
      },
      (error) => {
        console.log('Error sending email to admin:', error.text);
      }
    );

    // Sending email to buyer (receipt)
    emailjs.send(
      'service_1oupkxg', // Replace with your EmailJS service ID
      'template_9q5dkrk', // For buyer email receipt
      {
        ...emailData,
        to_email: buyerEmail, // Buyer's email
        subject: 'Your Purchase Receipt',
      },
      'YOUR_USER_ID' // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log('Buyer receipt email sent:', result.text);
      },
      (error) => {
        console.log('Error sending receipt to buyer:', error.text);
      }
    );
  };

  // Function to initialize Flutterwave payment
  const handlePayment = () => {
    if (
      checkoutInfo.name &&
      checkoutInfo.email &&
      checkoutInfo.phone &&
      checkoutInfo.address
    ) {
      handleFlutterwavePayment({
        callback: (response) => {
          console.log(response);
          if (response.status === "successful") {
            alert(`Payment successful for ${selectedProduct}`);

            // Extract Flutterwave payment reference (tx_ref) from the response
            const paymentReference = response.tx_ref;

            // Send email to admin and buyer
            sendEmails(checkoutInfo.email, paymentReference);
          }
          closePaymentModal(); // Close modal programmatically
        },
        onClose: () => {
          console.log("Payment closed");
        },
      });
    } else {
      alert("Please fill in all the required information.");
    }
  };

  // Function to show the form and set selected product and price
  const handleCheckout = (product, price) => {
    setSelectedProduct(product);
    setSelectedPrice(price);
    setShowForm(true); // Show form for delivery info
  };

  // Function to handle form submission and start the payment process
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePayment();
    setShowForm(false); // Hide form after submission
  };

  // Function to close the form
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <section className="xl:px-[150px] p-3 mt-[50px] grid gap-[50px] relative">




<img src="/root.svg" alt="image of root" className="w-full" />
      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
          Building a Thriving Agricultural Ecosystem
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          We are dedicated to supporting Nigerian farmers and businesses
          throughout the agricultural value chain. Our mission is to promote
          sustainable practices, ensure access to necessary resources, and
          contribute to food security in the nation.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3">
          <img src="/root.svg" alt="image of root" className="w-" />
          <img src="/root.svg" alt="image of root" />
          <img src="/root.svg" alt="image of root" />
        </div>
        <button className="flex items-center bg-[#2D89BF] px-3 py-2 text-white gap-3">
          {" "}
          Learn More{" "}
        </button>
      </div>
      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
      <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
      Unlock Clarity & Confidence in Your Real Estate Journey
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          Schedule a personalized consultation with our real estate experts. Get
          expert guidance & navigate the market with ease, whether you&apos;re
          buying, selling, or investing.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3">
          <img src="/writing.svg" alt="image of writing" className="w-" />
          <img src="/hand.svg" alt="image of  hand" />
          <img src="/meeting.svg" alt="image of meeting" />
        </div>
        <button className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3">
          <IoMdCall /> Book a consultation call{" "}
        </button>
      </div>

{/* Image overlay */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/bgoverlay.svg')" }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl font-bold mb-4">Efficient Import and Export Solutions</h1>
        <p className="mb-4">
          From customs clearance to logistics, we handle all aspects of global trade, allowing you to focus on growing your business.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Contact Us Today
        </button>
      </div>
    </div>
      {/*  */}
      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
      <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
          Comprehensive Solutions for Your Agricultural Needs{" "}
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          From farm produce and equipment to expert services and global trade,
          Noble Negro Ventures offers a wide range of solutions to support your
          agricultural endeavors.
        </p>
      </div>


      {/* Form for checkout info */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            {/* Close button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">Enter Delivery Information</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={checkoutInfo.name}
                  onChange={(e) => setCheckoutInfo({ ...checkoutInfo, name: e.target.value })}
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={checkoutInfo.email}
                  onChange={(e) => setCheckoutInfo({ ...checkoutInfo, email: e.target.value })}
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  value={checkoutInfo.phone}
                  onChange={(e) => setCheckoutInfo({ ...checkoutInfo, phone: e.target.value })}
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Delivery Address</label>
                <input
                  type="text"
                  value={checkoutInfo.address}
                  onChange={(e) => setCheckoutInfo({ ...checkoutInfo, address: e.target.value })}
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md w-full font-semibold"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main page content */}
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-6">
          {/* Product 1 */}
          <div className="text-center">
            <img src="/prod1.svg" alt="image of writing" className="w-full" />
            <h3 className="font-bold text-lg mt-2">Product 1</h3>
            <p className="text-gray-600">₦5000</p>
            <button
              onClick={() => handleCheckout("Product 1", 5000)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <img src="/prod2.svg" alt="image of hand" className="w-full" />
            <h3 className="font-bold text-lg mt-2">Product 2</h3>
            <p className="text-gray-600">₦3000</p>
            <button
              onClick={() => handleCheckout("Product 2", 3000)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <img src="/prod3.svg" alt="image of meeting" className="w-full" />
            <h3 className="font-bold text-lg mt-2">Product 3</h3>
            <p className="text-gray-600">₦7000</p>
            <button
              onClick={() => handleCheckout("Product 3", 7000)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
