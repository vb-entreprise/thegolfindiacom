interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  className = "" 
}: StarRatingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg"
  };

  return (
    <span className={`inline-flex items-center ${sizeClasses[size]} ${className}`}>
      {[...Array(maxRating)].map((_, i) => (
        <span 
          key={i} 
          className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </span>
  );
} 