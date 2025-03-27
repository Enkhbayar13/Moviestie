export const Footercont = () => {
  return (
    <div className="flex h-[280px]  flex-start justify-between w-[1440px] pt-10 px-20 bg-[#4338CA]">
      <div className="flex flex-col items-start w-[240px] gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        ></svg>
        <p className="text-[#FAFAFA] font-bold italic text-[16px] ">Movie Z</p>

        <h1 className="text-[#FAFAFA] font-normal text-[14px]">
          © 2024 Movie Z. All Rights Reserved.
        </h1>
      </div>
      <div>
        <p className="text-[#FAFAFA] font-normal text-[14px]">
          Contant Information
        </p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.6673 4.6665L8.68732 8.4665C8.4815 8.59545 8.24353 8.66384 8.00065 8.66384C7.75777 8.66384 7.5198 8.59545 7.31398 8.4665L1.33398 4.6665M2.66732 2.6665H13.334C14.0704 2.6665 14.6673 3.26346 14.6673 3.99984V11.9998C14.6673 12.7362 14.0704 13.3332 13.334 13.3332H2.66732C1.93094 13.3332 1.33398 12.7362 1.33398 11.9998V3.99984C1.33398 3.26346 1.93094 2.6665 2.66732 2.6665Z"
              stroke="#FAFAFA"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[#FAFAFA] font-normal text-[14px]">
            Email: support@MovieZ.com
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_989_3877)">
              <path
                d="M14.6669 11.2802V13.2802C14.6677 13.4659 14.6297 13.6497 14.5553 13.8198C14.4809 13.9899 14.3718 14.1426 14.235 14.2681C14.0982 14.3937 13.9367 14.4892 13.7608 14.5487C13.5849 14.6082 13.3985 14.6303 13.2136 14.6136C11.1622 14.3907 9.19161 13.6897 7.46028 12.5669C5.8495 11.5433 4.48384 10.1777 3.46028 8.56689C2.3336 6.8277 1.63244 4.84756 1.41361 2.78689C1.39695 2.60254 1.41886 2.41673 1.47795 2.24131C1.53703 2.06589 1.63199 1.90469 1.75679 1.76797C1.88159 1.63126 2.03348 1.52203 2.20281 1.44724C2.37213 1.37245 2.55517 1.33374 2.74028 1.33356H4.74028C5.06382 1.33038 5.37748 1.44495 5.62279 1.65592C5.8681 1.86689 6.02833 2.15986 6.07361 2.48023C6.15803 3.12027 6.31458 3.74871 6.54028 4.35356C6.62998 4.59218 6.64939 4.8515 6.59622 5.10081C6.54305 5.35012 6.41952 5.57897 6.24028 5.76023L5.39361 6.60689C6.34265 8.27592 7.72458 9.65786 9.39361 10.6069L10.2403 9.76023C10.4215 9.58099 10.6504 9.45746 10.8997 9.40429C11.149 9.35112 11.4083 9.37053 11.6469 9.46023C12.2518 9.68593 12.8802 9.84248 13.5203 9.92689C13.8441 9.97258 14.1399 10.1357 14.3513 10.3852C14.5627 10.6348 14.6751 10.9533 14.6669 11.2802Z"
                stroke="#FAFAFA"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_989_3877">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#FAFAFA] font-normal text-[14px]">
            Phone: +976 (11) 123-4567
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#FAFAFA] font-normal text-[14px]">Follow us</p>
        <p className="text-[#FAFAFA] font-normal text-[14px]">
          {" "}
          Facebook Instagram Twitter Youtube
        </p>
      </div>
    </div>
  );
};
