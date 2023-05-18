import React from 'react';
import { FiExternalLink } from 'react-icons/fi'

const Donate = () => {
  const handleDonation = () => {
    // Replace this with your actual Stripe payment link
    const stripePaymentLink = 'https://donate.stripe.com/dR6dU6gWd3qe94QcMM';
    window.open(stripePaymentLink, '_blank');
  };

  return (
    <section className="flex flex-col items-center py-16 space-y-8 px-4">
      <h2 className="text-3xl font-bold">Donate</h2>
      <p className="text-center text-lg max-w-lg">
        Thank you for your support. Your donation will help to continue creating amazing content and inspiring more people to learn about our universe.
      </p>
      <button
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDonation}
      >
        <span>Donate</span>
        <FiExternalLink size={24} />
      </button>
    </section>
  );
};

export default Donate;
