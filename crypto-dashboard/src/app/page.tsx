'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchTopCryptos } from '@/lib/api'
import { CryptoCard } from '@/components/crypto-card'
import { PriceChart } from '@/components/price-chart'

export default function Home() {
  const { data: cryptos, isLoading, error } = useQuery({
    queryKey: ['topCryptos'],
    queryFn: fetchTopCryptos,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred</div>

  const chartData = cryptos?.map(crypto => ({
    name: crypto.symbol,
    price: crypto.current_price,
  })) || []

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cryptos?.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            price={crypto.current_price}
            priceChange={crypto.price_change_percentage_24h}
            image={crypto.image}
          />
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Price Comparison</h2>
        <PriceChart data={chartData} />
      </div>
    </main>
  )
}