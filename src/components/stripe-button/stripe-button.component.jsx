import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I9VejF6twIERjh8QCzMcPuCa4sbn4KL5QxhTNl9C9hitgGCv7f3OVbY8L38kLcuDxswxLrBVgIH6yb7LcQrkUy400FKH9KqSA'
  const onToken = token => {
    console.log(token);
    alert('Payment successful! Thanks!')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );

};

export default StripeCheckoutButton;

