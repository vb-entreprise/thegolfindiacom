"use client";

interface PriceProps {
  amount: number;
  currency?: string;
  className?: string;
}

export function Price({ amount, currency = "$", className }: PriceProps) {
  try {
    // Determine currency format based on currency symbol
    let currencyCode = 'USD';
    let locale = 'en-US';
    
    if (currency === "£") {
      currencyCode = 'GBP';
      locale = 'en-GB';
    }
    
    // Format price in the appropriate currency
    const formattedPrice = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return <span className={className}>{formattedPrice}</span>;
  } catch (error) {
    console.error('Error formatting price:', error);
    return <span className={className}>{currency}{amount}</span>;
  }
} 