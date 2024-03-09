import { Accordion } from 'flowbite-react';
import React from 'react'

const AccordionComp = () => {
  return (
    <>
     <section className='pt-[150px] min-h-[100vh] sm:px-32 pb-10'>
     <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What products do you sell?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We offer a wide range of products including electronics, fashion apparel, home goods, and more. You can browse our categories to find exactly what you're looking for.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do I place an order?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Placing an order is easy! Simply add the desired products to your cart, proceed to checkout, fill in your shipping details, choose a payment method, and confirm your order.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What payment methods do you accept?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We accept various payment methods including credit/debit cards, PayPal, and other local payment methods depending on your location.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Do you offer international shipping?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, we do offer international shipping. Shipping rates and times vary depending on the destination country.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What is your return policy?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We offer a 30-day return policy for items that are in their original condition. Some exclusions may apply for certain types of products.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do you protect my personal information?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We are committed to protecting your privacy. Your personal information is kept secure and processed in accordance with our Privacy Policy and applicable laws.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can I contact customer service?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You can contact our customer service via email, phone, or live chat. Our contact details can be found on our "Contact Us" page.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
     </section>
    </>
  )
}

export default AccordionComp
