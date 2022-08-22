import React, { useEffect } from "react";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_e3e97c1705d920ac219db68ff50761e9ba82b160",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const inputRef = React.useRef(null);
  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        // Run Function
        inputRef.current.click();
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const initializePayment = usePaystackPayment(config);
  return (
    <div
      ref={inputRef}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
    ></div>
  );
};

function PaystackComponent() {
  return <PaystackHookExample />;
}

export default PaystackComponent;
