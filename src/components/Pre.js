function Pre({color, className}) {
  return (
    <svg
      width="200"
      height="206"
      viewBox="0 0 200 206"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className = {className}
    >
      <path
        d="M2 28H198V190C198 197.732 191.732 204 184 204H16C8.26801 204 2 197.732 2 190V28Z"
        fill="white"
        stroke="#113045"
        stroke-width="4"
      />
      <path
        d="M8 2H192C195.314 2 198 4.68629 198 8V28H2V8C2 4.68629 4.68629 2 8 2Z"
        fill="#113045"
        stroke="#113045"
        stroke-width="4"
      />
      <rect
        x="42"
        y="73"
        width="116"
        height="41"
        fill={color} 
        stroke="#113045"
        stroke-width="4"
      />
      <rect x="182" y="40" width="4" height="50" rx="2" fill="#113045" />
      <rect x="182" y="94" width="4" height="10" rx="2" fill="#113045" />
    </svg>
  );
}

export default Pre;
