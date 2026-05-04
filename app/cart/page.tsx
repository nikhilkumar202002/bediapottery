'use client';
import { useRouter } from 'next/navigation';
import MobileCart from '@/components/cart/MobileCart'; // Adjust path as needed

export default function CartPage() {
  const router = useRouter();

  const proceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <main className="bg-[#fcfbf9] flex lg:flex-row font-sans">
      {/* Left Side: Product Context - Sticky */}
      <div className="hidden lg:block w-1/2 h-screen sticky top-0 bg-gray-200 z-0">
        <img 
          src="/images/banner/cart-page.png" 
          alt="Pottery making" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: The Sidebar Cart - Only Scrollable Area */}
      <div className="w-full lg:w-1/2 overflow-y-auto scrollbar-hide relative z-10">
        <MobileCart onCheckout={proceedToCheckout} />
      </div>
    </main>
  );
}