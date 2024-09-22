import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface CryptoCardProps {
  name: string
  symbol: string
  price: number
  priceChange: number
  image: string
}

export function CryptoCard({ name, symbol, price, priceChange, image }: CryptoCardProps) {
  const isPositive = priceChange > 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {name} ({symbol.toUpperCase()})
        </CardTitle>
        <img src={image} alt={name} className="h-8 w-8" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${price.toFixed(2)}</div>
        <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
          {Math.abs(priceChange).toFixed(2)}%
        </p>
      </CardContent>
    </Card>
  )
}