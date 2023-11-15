import { STRIPE_SECRET_KEY } from '@/config'
import { validateItemProductArray } from '@/schemas/item-product'
import { transformProducts } from '@/utils/get'
import { type NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'

export async function POST (request: NextRequest) {
  const stripe = new Stripe(STRIPE_SECRET_KEY)

  const { items = [] } = await request.json()

  const result = validateItemProductArray(items)

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid items' })
  }

  const data = result.data

  const session = await stripe.checkout.sessions.create({
    line_items: transformProducts(data),
    mode: 'payment',
    success_url: `${request.nextUrl.origin}/payment/success`,
    cancel_url: `${request.nextUrl.origin}/cart`
  })

  return NextResponse.json({
    url: session.url
  })
}
