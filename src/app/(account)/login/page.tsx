"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="h-screen flex items-center justify-center bg-light">
      <div className="p-20 flex flex-col items-center rounded-lg bg-background">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={166}
          height={36}
          className="mb-5"
        />
        {/* <h1 className="text-center h5 mb-4">Welcome to Themefisher ERP</h1> */}
        <p className="text-center text-text-light">
          Login with your official google account
        </p>
        <div>
          <Button
            variant="outline"
            className="mt-5"
            onClick={() => signIn("google")}
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_160_7176)">
                <path
                  d="M6.96721 0.657779C4.9689 1.35101 3.24556 2.66679 2.05032 4.41184C0.855082 6.1569 0.250946 8.23925 0.326651 10.353C0.402355 12.4668 1.15391 14.5006 2.47092 16.1557C3.78794 17.8108 5.60099 18.9999 7.64377 19.5484C9.2999 19.9757 11.035 19.9945 12.7 19.6031C14.2083 19.2643 15.6028 18.5396 16.7469 17.5C17.9376 16.3849 18.802 14.9663 19.2469 13.3968C19.7305 11.6901 19.8166 9.89517 19.4985 8.14997H10.1985V12.0078H15.5844C15.4768 12.6231 15.2461 13.2103 14.9062 13.7344C14.5663 14.2585 14.1242 14.7086 13.6063 15.0578C12.9486 15.4928 12.2072 15.7855 11.4297 15.9172C10.6499 16.0621 9.85011 16.0621 9.07033 15.9172C8.28 15.7538 7.53236 15.4276 6.87502 14.9593C5.819 14.2118 5.02608 13.1498 4.6094 11.925C4.18567 10.6771 4.18567 9.32435 4.6094 8.07653C4.906 7.20187 5.39632 6.40549 6.04377 5.74684C6.7847 4.97926 7.72273 4.43059 8.75495 4.16102C9.78718 3.89146 10.8737 3.91142 11.8953 4.21872C12.6934 4.4637 13.4232 4.89174 14.0266 5.46872C14.6339 4.86455 15.2401 4.25882 15.8453 3.65153C16.1578 3.32497 16.4985 3.01403 16.8063 2.67965C15.8853 1.82259 14.8042 1.15568 13.625 0.717154C11.4777 -0.0625494 9.12811 -0.0835031 6.96721 0.657779Z"
                  fill="white"
                />
                <path
                  d="M6.96709 0.657806C9.12781 -0.08398 11.4774 -0.0635778 13.6249 0.715618C14.8043 1.15712 15.8849 1.82724 16.8046 2.68749C16.4921 3.02187 16.1624 3.33437 15.8437 3.65937C15.2374 4.26458 14.6317 4.8677 14.0265 5.46874C13.4231 4.89177 12.6933 4.46373 11.8952 4.21874C10.8739 3.91037 9.78743 3.88926 8.75493 4.15772C7.72243 4.42618 6.78383 4.97384 6.04209 5.74062C5.39464 6.39927 4.90432 7.19564 4.60771 8.07031L1.36865 5.56249C2.52804 3.26337 4.53545 1.50472 6.96709 0.657806Z"
                  fill="#E33629"
                />
                <path
                  d="M0.509419 8.04688C0.683515 7.18405 0.97255 6.34848 1.36879 5.5625L4.60786 8.07656C4.18413 9.32438 4.18413 10.6772 4.60786 11.925C3.52869 12.7583 2.449 13.5958 1.36879 14.4375C0.376842 12.463 0.0743141 10.2133 0.509419 8.04688Z"
                  fill="#F8BD00"
                />
                <path
                  d="M10.1984 8.14844H19.4984C19.8166 9.89365 19.7305 11.6885 19.2469 13.3953C18.8019 14.9648 17.9376 16.3834 16.7469 17.4984C15.7016 16.6828 14.6516 15.8734 13.6063 15.0578C14.1245 14.7082 14.5668 14.2576 14.9067 13.733C15.2467 13.2084 15.4771 12.6205 15.5844 12.0047H10.1984C10.1969 10.7203 10.1984 9.43437 10.1984 8.14844Z"
                  fill="#587DBD"
                />
                <path
                  d="M1.36719 14.4375C2.4474 13.6042 3.52708 12.7667 4.60625 11.925C5.02376 13.1504 5.81782 14.2124 6.875 14.9594C7.53439 15.4255 8.28364 15.749 9.075 15.9094C9.85478 16.0544 10.6546 16.0544 11.4344 15.9094C12.2119 15.7778 12.9533 15.4851 13.6109 15.05C14.6562 15.8657 15.7063 16.675 16.7516 17.4907C15.6076 18.5309 14.2132 19.2561 12.7047 19.5954C11.0397 19.9868 9.30457 19.968 7.64844 19.5407C6.3386 19.1909 5.11512 18.5744 4.05469 17.7297C2.93228 16.8386 2.01556 15.7156 1.36719 14.4375Z"
                  fill="#319F43"
                />
              </g>
              <defs>
                <clipPath id="clip0_160_7176">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
