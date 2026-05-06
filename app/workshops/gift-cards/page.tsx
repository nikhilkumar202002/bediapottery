import GiftCardHero from '@/components/giftcard/GiftCardHero'
import InfoAndTimeline from '@/components/giftcard/InfoAndTimeline'
import TestimonialsSection from '@/components/testimonial/TestimonialsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Cards',
  description: 'Give the gift of pottery. Purchase a Bedia Pottery gift card for your loved ones.',
}

const GiftCardsPage = () => {
  return (
    <>
      <GiftCardHero />
      <InfoAndTimeline />
      <TestimonialsSection />
    </>
  )
}

export default GiftCardsPage
