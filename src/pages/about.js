import React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Home1 from '../images/icon-home-1.svg';
import Home2 from '../images/icon-home-2.svg';
import Home3 from '../images/icon-home-3.svg';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section class="relative bg-gray-100 px-4 sm:px-8 mt-32  lg:px-16 xl:px-40 2xl:px-64 py-20 text-center">
        <div>
          <h2 class="text-3xl leading-tight font-bold">About us you know</h2>
        </div>

        <div class="flex flex-col md:flex-row items-start justify-between mt-12">
            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4">
              <img src={Home1} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">Apply with your home</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={Home2} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">Complete the form</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={Home3} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">Choose the fair rate</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

        <div class="mt-12 md:mt-20 w-full md:max-w-3xl mx-auto">
          <p class="text-xl">&ldquo;FairRate is beautiful, elegant and easy to apply. I’ve been able to apply for an
            amazing rate in just a minutes. Thank you very much for creating this impressive service!&rdquo;</p>
          <p class="text-xl font-bold text-blue-600 mt-4">Camila</p>
          <p class="text-sm uppercase tracking-wider text-gray-700">Founder of the company</p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
