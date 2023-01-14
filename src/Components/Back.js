import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute top-8 right-8 z-10 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 6V15H10.5"
          stroke="#928FB0"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.265 22.4999C6.23759 25.2605 8.081 27.6302 10.5175 29.252C12.954 30.8738 15.8515 31.6598 18.7736 31.4916C21.6956 31.3235 24.4839 30.2102 26.7182 28.3196C28.9525 26.4289 30.5119 23.8634 31.1613 21.0095C31.8108 18.1555 31.5151 15.1679 30.3189 12.4966C29.1227 9.82529 27.0908 7.61511 24.5293 6.19907C21.9677 4.78302 19.0154 4.23782 16.117 4.6456C13.2187 5.05338 10.5314 6.39205 8.46 8.45992L1.5 14.9999"
          stroke="#928FB0"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
