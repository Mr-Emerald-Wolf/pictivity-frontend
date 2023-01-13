import { Link } from "react-router-dom";

export default function NavbarMobile() {
  const url_var = window.location.pathname.split("/");
  const which_page = url_var[1].trim(" ");

  return (
    <div className="flex align-middle justify-around absolute py-2 min-w-[93vw] rounded-lg bottom-4 left-[50%] translate-x-[-50%] bg-whitetwo">
      {/* <svg
        width="3"
        height="67"
        viewBox="0 0 3 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"absolute left-0"}
      >
        <line
          x1="1.5"
          y1="1.5"
          x2="1.5"
          y2="65.5"
          stroke="#928FB0"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg> */}
      <Link to="/">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 12.75L17 2.83337L29.75 12.75V28.3334C29.75 29.0848 29.4515 29.8055 28.9201 30.3368C28.3888 30.8682 27.6681 31.1667 26.9167 31.1667H7.08333C6.33189 31.1667 5.61122 30.8682 5.07986 30.3368C4.54851 29.8055 4.25 29.0848 4.25 28.3334V12.75Z"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.75 31.1667V17H21.25V31.1667"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <Link to="/generate">
        <svg
          width="30"
          height="30"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M30.0833 4.75H7.91667C6.16776 4.75 4.75 6.16776 4.75 7.91667V30.0833C4.75 31.8322 6.16776 33.25 7.91667 33.25H30.0833C31.8322 33.25 33.25 31.8322 33.25 30.0833V7.91667C33.25 6.16776 31.8322 4.75 30.0833 4.75Z"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.25 23.75L25.3333 15.8334L7.91666 33.25"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4583 15.8334C14.77 15.8334 15.8333 14.7701 15.8333 13.4584C15.8333 12.1467 14.77 11.0834 13.4583 11.0834C12.1467 11.0834 11.0833 12.1467 11.0833 13.4584C11.0833 14.7701 12.1467 15.8334 13.4583 15.8334Z"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <Link to="/ar">
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M10.6667 4H6.66667C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V10.6667M28 10.6667V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4H21.3333M21.3333 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V21.3333M4 21.3333V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H10.6667"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      {/* <Link to="/nft">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <g clip-path="url(#clip0_11_130)">
            <path
              d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 11.25H11.25V18.75H18.75V11.25Z"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 1.25V5"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 1.25V5"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 25V28.75"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 25V28.75"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 11.25H28.75"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 17.5H28.75"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.25 11.25H5"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.25 17.5H5"
              stroke="#928FB0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11_130">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link> */}
      <Link to="/profile">
        <svg
          width="30"
          height="30"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M24.9895 26.7367V24.6992C24.9895 23.6184 24.5602 22.5819 23.7959 21.8177C23.0317 21.0535 21.9952 20.6241 20.9144 20.6241H12.7643C11.6836 20.6241 10.647 21.0535 9.88283 21.8177C9.11861 22.5819 8.68927 23.6184 8.68927 24.6992V26.7367"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8394 16.549C19.09 16.549 20.9145 14.7246 20.9145 12.474C20.9145 10.2234 19.09 8.39893 16.8394 8.39893C14.5888 8.39893 12.7643 10.2234 12.7643 12.474C12.7643 14.7246 14.5888 16.549 16.8394 16.549Z"
            stroke="#928FB0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="16.8394"
            cy="17.1719"
            r="15.8282"
            stroke="#928FB0"
            stroke-width="2"
          />
        </svg>
      </Link>
    </div>
  );
}
