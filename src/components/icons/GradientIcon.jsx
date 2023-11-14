const GradientIcon = ({ icon: Icon, gradientId, size }) => {
  return (
    <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "orange", stopOpacity: 1 }} />
      </linearGradient>
      <Icon size={size} style={{ fill: `url(#${gradientId})` }} />
    </svg>
  );
};

export default GradientIcon;
