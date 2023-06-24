import React from "react";

export default function FAQ() {
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
          <summary className="font-semibold">
            Who is allowed to tokenize?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-10 text-gray-500">
              Anyone who is log in to this platform and fill the form for the
              tokenization of property. After that our team will assess the
              documents and that property will list on our platform.
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
            Are Real Chain World's properties checked before they are listed?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-14 text-gray-500">
              Yes, to ensure the highest quality to our investors we have a very
              strict and thorough selection and due-diligence process before a
              property gets listed on our platform.
              <ol>
                <li>
                  1. The real estate owner (Seller) submits an application for
                  the crowd-sale.
                </li>
                <li>
                  2. Applicants are prequalified based on track record,
                  financial strength, and expertise.
                </li>
                <li>
                  3. Detailed underwriting includes a review of investment
                  strategy, financials, legal standing and property
                  condition/location.
                </li>
                <li>
                  4. Approved properties are listed and tokenized for funding on
                  the our platform.
                </li>
              </ol>
              All submitted investment opportunities (real estate properties)
              are carefully curated by our team of experts following the above
              process.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
