import CheckoutFlow from '@/components/cart/CheckoutFlow';

export const metadata = {
  title: 'Checkout | Bedia Pottery',
  description: 'Securely complete your purchase.',
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutFlow />
    </main>
  );
}