import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51NYCFAHCanyZGkJbtoZKN9k84yFwChbIpp7vaIBM5O3Gju1i734YDZapIp3Vpecs1H8KLXL3i9KY4l86uOenyD2m00zQrXNijk");

export { stripePromise };
