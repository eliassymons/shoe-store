import { ShopContext } from "../context/shop-context";
import React, { useContext } from "react";

function Checkout() {
  const { emptyCart } = useContext(ShopContext);
  return (
    <div className="flex w-full items-center justify-center px-0">
      {" "}
      <button
        className="mx-auto text-center rounded-lg bg-green-300 text-3xl mt-8 px-4 py-1 hover:text-white hover:bg-green-600"
        data-te-toggle="modal"
        data-te-target="#exampleModalCenter"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Check Out Now
      </button>
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-screen overflow-hidden  px-0 outline-none  bg-inherit"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all px-0 duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div class="flex flex-shrink-0 items-center text-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 m-0">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200 mx-auto"
                id="exampleModalScrollableLabel"
              >
                Thank you!
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
                onClick={() => emptyCart()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="relative p-4">
              <p className="text-center">
                You've been checked out successfully.
              </p>
            </div>
            <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => emptyCart()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
