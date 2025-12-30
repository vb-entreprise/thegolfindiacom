"use client";

interface PriceProps {
  amount: number;
  currency?: string; // Kept for backward compatibility, but always uses USD
  className?: string;
}

export function Price({ amount, currency = "$", className }: PriceProps) {
  try {
    // All prices are in USD
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return <span className={className}>{formattedPrice}</span>;
  } catch (error) {
    console.error('Error formatting price:', error);
    return <span className={className}>${amount}</span>;
  }
} 