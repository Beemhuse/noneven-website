import { FaShoppingCart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from "emailjs-com"; // Importing EmailJS
import products from "../../assets/product";
import crayfishImage from "../../assets/ProductImage/crayfishImage.jpeg";
import garriImage from "../../assets/ProductImage/garriImage.jpeg";
import store1 from "../../assets/ProductImage/headoffice.jpeg";
import store2 from "../../assets/ProductImage/store2.jpeg";
import store3 from "../../assets/ProductImage/store3.jpeg";
import coconutimage from "../../assets/ProductImage/coconutimage.jpeg";
import ElevenLitersRedPalmOil from "../../assets/ProductImage/11 Liters Red Palm oil.jpeg";
import MlFortifiedCoconutoil from "../../assets/ProductImage/500 ml Fortified Coconut oil (Edible).jpeg"; // 500 ml Fortified Coconut oil (Edible)
import palmfruittree from "../../assets/Image/palmfruittree.jpg";
import coconuttree from "../../assets/Image/coconuttree.jpg";

export default function MainPage() {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    currencyType: "",
    currencyValue: 0,
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedPriceUSD, setSelectedPriceUSD] = useState(0);
  const [selectedPriceEUR, setSelectedPriceEUR] = useState(0);

  const handleCurrencyChange = (currency) => {
    setCheckoutInfo({
      ...checkoutInfo,
      currencyType: currency,
      currencyValue:
        currency === "NGN"
          ? selectedPrice
          : currency === "USD"
          ? selectedPriceUSD
          : currency === "EUR"
          ? selectedPriceEUR
          : selectedPrice,
    });
  };

  // Flutterwave configuration object
  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-3c7d20e63800e36901ea8101a3a53aea-X", // Replace this with your Flutterwave public key
    tx_ref: Date.now(), // Reference to uniquely identify the transaction
    amount: checkoutInfo?.currencyValue, // Amount in Naira
    currency: checkoutInfo?.currencyType, // Currency
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: checkoutInfo.email, // Customer's email address
      phonenumber: checkoutInfo.phone, // Customer's phone number
      name: checkoutInfo.name, // Customer's name
    },
    customizations: {
      title: "Product Purchase",
      description: `Payment for ${selectedProduct}`,
      logo: "/Logo.svg", // Add your logo URL here
    },
  };

  // Function to handle payment
  const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

  const sendEmails = (buyerEmail, paymentReference) => {
    console.log({ buyerEmail });

    const emailData = {
      name: checkoutInfo.name,
      email: checkoutInfo.email,
      phone: checkoutInfo.phone,
      address: checkoutInfo.address,
      product: selectedProduct,
      price: selectedPrice,
      payment_reference: paymentReference,
    };
    console.log(emailData?.email);
    // Admin email
    emailjs
      .send(
        "service_1oupkxg",
        "template_gb4qaag",
        {
          ...emailData,
          to_email: "noblenegroventures@gmail.com",
          subject: "New Purchase Order",
        },
        "uQCYukDaD13qnaIyx"
      )
      .then(
        (result) => {
          console.log("Admin email sent:", { result }, { emailData });
        },
        (error) => {
          console.log("Error sending email to admin:", error.text);
        }
      );

    // Buyer receipt email
    emailjs
      .send(
        "service_1oupkxg",
        "template_9q5dkrk",
        {
          ...emailData,
          to_email: buyerEmail,
          subject: "Your Purchase Receipt",
        },
        "uQCYukDaD13qnaIyx"
      )
      .then(
        (result) => {
          console.log("Buyer receipt email sent:", result.text);
        },
        (error) => {
          console.log("Error sending receipt to buyer:", error.text);
        }
      );
  };

  // Function to initialize Flutterwave payment
  const handlePayment = () => {
    // sendEmails("checkoutInfo.email", "paymentReference");
    if (
      checkoutInfo.name &&
      checkoutInfo.email &&
      checkoutInfo.phone &&
      checkoutInfo.address &&
      checkoutInfo.currencyValue
    ) {
      handleFlutterwavePayment({
        callback: (response) => {
          // console.log({response});
          if (response.status === "completed") {
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
  const handleCheckout = (product, price, usdPrice, eurPrice) => {
    setCheckoutInfo({
      ...checkoutInfo,
      name: "",
      email: "",
      phone: "",
      address: "",
      currencyValue: 0,
      currencyType: "",
    });
    setSelectedProduct(product);
    setSelectedPrice(price);
    setSelectedPriceUSD(usdPrice);
    setSelectedPriceEUR(eurPrice);
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
    <section className="xl:px-[100px] p-.3 mt-[50px] grid gap-[50px] relative">
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-9 p-2">
          <div>
            <img
              src={palmfruittree}
              alt="image of root"
              style={{ width: "100vw", height: "40vh" }}
            />
            <div className="flex flex-row items-center gap-3 mt-4">
              <img
                src="https://guardian.ng/wp-content/uploads/2021/06/Fresh-oil-palm-fruits-1062x598.jpg"
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
              <img
                src={ElevenLitersRedPalmOil}
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
            </div>
          </div>
          <div>
            <img src={coconuttree} style={{ width: "100vw", height: "40vh" }} />
            <div className="flex flex-row items-center gap-3 mt-4">
              <img
                src={coconutimage}
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
              <img
                src={MlFortifiedCoconutoil}
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
            </div>
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/mtA51AezDjE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBm4S4lwaRmSzO64X7VYRrxU6IhuQ"
              alt="image of root"
              style={{ width: "100vw", height: "40vh" }}
            />
            <div className="flex flex-row items-center gap-3 mt-4">
              <img
                src={garriImage}
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
              <img
                src="https://dailytrust.com/wp-content/uploads/2020/04/High-demand-for-garri-as-prices-of-food-items-skyrocket.jpg"
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
            </div>
          </div>
          <div>
            <img
              src={crayfishImage}
              style={{ width: "100vw", height: "40vh" }}
            />
            <div className="flex flex-row items-center gap-3 mt-4">
              <img
                src="https://danazamsglobalventures.com/wp-content/uploads/2022/10/dried-crayfish-packaged.jpg"
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
              <img
                src="https://udyfoods.com/wp-content/uploads/2021/10/IMG_99271-scaled.jpeg"
                alt="Small image 1"
                style={{ width: "49%", height: "15rem" }}
              />
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-9 p-2">
          <img
            src={palmfruittree}
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />
          <img src={coconuttree} style={{ width: "100vw", height: "40vh" }} />

          <img
            src="https://i.ytimg.com/vi/mtA51AezDjE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBm4S4lwaRmSzO64X7VYRrxU6IhuQ"
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />
          <img
            src="https://guardian.ng/wp-content/uploads/2021/06/Fresh-oil-palm-fruits-1062x598.jpg"
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />
          <img
            src="https://thumbs.dreamstime.com/b/aromatic-young-coconut-tree-farm-tropical-green-fruit-growth-thailand-to-export-asia-world-nature-product-agriculture-349586924.jpg"
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />

          <img
            src={garriImage}
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />

          <img src={crayfishImage} style={{ width: "100vw", height: "40vh" }} />
        </div> */}
      </div>
      <div className="xl:w-3/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
          Building and Facilitating a Thriving Agricultural-based Supplies for
          our Global Needs
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          We are dedicated to supporting Nigerian farmers and businesses
          throughout the agricultural value chain. Our mission is to promote
          sustainable practices, ensure access to necessary resources, and
          contribute to food security in the nation.
        </p>
      </div>
      {/* <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3"> */}

      {/* ..... */}

      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-9 p-2">
          <img
            src={store1}
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />
          <img src={store2} style={{ width: "100vw", height: "40vh" }} />
          <img
            src={store3}
            alt="image of root"
            style={{ width: "100vw", height: "40vh" }}
          />
        </div>
      </div>

      {/* ..... */}
      <div className="xl:w-3/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
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
        <div className="flex flex-row items-center  gap-3">
          <img
            src="/writing.svg"
            alt="image of writing"
            style={{ width: "30vw" }}
          />
          <img src="/hand.svg" alt="image of  hand" style={{ width: "30vw" }} />
          <img
            src="/meeting.svg"
            alt="image of meeting"
            style={{ width: "30vw" }}
          />
        </div>
        <p>
          Those in diaspora, instead of coming back into unnecessary altercation
          with mistrusted relative(s); enter into contract with Noble Negro
          Ventures Nigeria Limited through any lawyer of your choice to purchase
          a land and or build a house of your specification for you and get your
          documents with the property on your return to the country.
        </p>
        <button
          className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3"
          href="mailto:noblenegroventures@gmail.com"
        >
          <IoMdCall /> Book a consultation call{" "}
        </button>
      </div>

      {/* Image overlay */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgoverlay.svg')" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl font-bold mb-4">
            Efficient Import and Export Solutions
          </h1>
          <p className="mb-4">
            From customs clearance to logistics, we handle all aspects of global
            trade, allowing you to focus on growing your business.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            href="mailto:noblenegroventures@gmail.com"
          >
            Contact Us Today
          </button>
        </div>
      </div>
      {/*  */}
      <div className="xl:w-3/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
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

            <h2 className="text-lg font-bold mb-4 text-center">
              Enter Delivery Information
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={checkoutInfo.name}
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, name: e.target.value })
                  }
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={checkoutInfo.email}
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, email: e.target.value })
                  }
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  value={checkoutInfo.phone}
                  onChange={(e) =>
                    setCheckoutInfo({ ...checkoutInfo, phone: e.target.value })
                  }
                  required
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Currency</label>
                <select
                  value={checkoutInfo.currencyType}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  className="border w-full px-3 py-2 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="NGN">Naira (₦)</option>
                  <option value="USD">Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={checkoutInfo.address}
                  onChange={(e) =>
                    setCheckoutInfo({
                      ...checkoutInfo,
                      address: e.target.value,
                    })
                  }
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
      {/* <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-6 mb-9"> */}
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-9 p-2">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.alt}
                style={{ height: "60vh", width: "100%" }}
                className="w-full"
              />
              <h3
                className="font-bold text-lg mt-2"
                style={{ textTransform: "uppercase" }}
              >
                {product.name}
              </h3>
              <p className="text-gray-600">₦{product.price}</p>
              <p className="text-gray-600">${product.priceUSD}</p>
              <p className="text-gray-600">€{product.priceEUR}</p>
              <button
                onClick={() =>
                  handleCheckout(
                    product.name,
                    product.price,
                    product.priceUSD,
                    product.priceEUR
                  )
                }
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
//
