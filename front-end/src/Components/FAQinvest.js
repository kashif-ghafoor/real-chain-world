import React from "react";

export default function FAQinvest() {
  return (
    <div>
      <div className="text-5xl ml-20 mt-12  text-gray-100 space-y-2 s">
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">What is AML / KYC?</summary>
          <div className="mt-3">
            <p className="text-sm leading-10 text-gray-500">
              With Real Chain World, we build an ecosystem that has been ruled
              with the competent financial market regulators. Also, we are in
              the process of becoming a member of a self-regulating organization
              (SRO). To put it simply; we take regulation seriously. This means
              at all times we have to know who our customers (investors /
              sellers) are and therefore we ask you to, during sign-up, go
              through our AML and KYC Process. Depending on the amount you want
              to invest this identification will be by taken some photos. Once
              you're done, you're ready to invest. Only in certain cases we
              might contact you and ask for additional information, this is
              usually the case when your descriptions for the source of funds
              are not clear enough.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">Who is allowed to invest?</summary>
          <div className="mt-3">
            <p className="text-sm leading-10 text-gray-500">
              Anyone who is log in successfully to this platform can invest.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            Who will assess the value of the property?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-500">
              We have some Asseessment Companies that will tell us the updated
              value, condition, or other relevant factors related to a your
              property.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            Does each property have its own unique token?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-14 text-gray-500">
              Yes, each property will have its own unique ERC-20 token. This
              means that you can invest using Ether (during the crowd-sale) and
              you will receive unique tokens legally representing your share of
              the property you've just invested in
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
