import React from "react";
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Rates from '../images/rates.png';
import Presentation from '../images/presentation.svg'
import Archery from '../images/archery.svg';
import Rocket from '../images/rocket.svg';
import Res from '../images/responsive.svg'



function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="pt-20 lg:mt-40  mt-24 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your Design page
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Design the template page to promote your business startup and generate leads for the
            offered services
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">To get more design pages for your ' Bussiness '</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48 mt-40 lg:h-screen ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div class="flex flex-col md:flex-row items-start lg:mt-32 justify-between mt-12">
            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 bg-gray-200 lg:mx-4">
              <img src={Presentation} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8 ">MARKETING</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 bg-gray-200 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={Archery}  alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">BRANDING</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 bg-gray-200 lg:mx-4 mt-4 md:mt-0">
              <img src={Rocket} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">MOTION</h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 bg-gray-200 lg:mx-4 mt-4 md:mt-0">
              <img src={Res} alt="" class="mx-auto h-32" />
              <h4 class="text-xl font-bold leading-tight mt-8">UI/UX DESIGN </h4>
              <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
      </div>
    </section>
    <section class="relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mt-12 bg-gray-200 pt-20 pb-40">
    <div class="text-center">
      <h2 class="text-3xl leading-tight font-bold text-white">Looking for the perfect rate to grow your bussiness</h2>
    </div>

    <div class="flex flex-col md:flex-row mt-12 items-center justify-between">
      <div class="w-full md:w-1/2">
        <img src={Rates} alt="" class="mx-auto" />
      </div>

      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h4 class="text-xl font-bold text-white">Stop Looking</h4>
        <p class="text-white leading-snug mt-2">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus. Praesent commodo cursus magna.</p>

        <ul class="mt-6 text-white">
          <li>
            <div class="flex items-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M12 24A12 12 0 0 1 3.515 3.515a12 12 0 0 1 16.971 16.971A11.922 11.922 0 0 1 12 24zm0-23a11 11 0 1 0 11 11A11.014 11.014 0 0 0 12 1zM9.646 16.506a.8.8 0 0 1-.514-.26L5.9 13.016l1.027-1.027 2.723 2.722 7.2-7.252L17.868 8.5l-7.714 7.754a.8.8 0 0 1-.508.252z"
                  fill="#fff" /></svg>
              <span class="ml-2">Integer posuere erat a ante venenatis dapibus</span>
            </div>
          </li>
          <li>
            <div class="flex items-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M12 24A12 12 0 0 1 3.515 3.515a12 12 0 0 1 16.971 16.971A11.922 11.922 0 0 1 12 24zm0-23a11 11 0 1 0 11 11A11.014 11.014 0 0 0 12 1zM9.646 16.506a.8.8 0 0 1-.514-.26L5.9 13.016l1.027-1.027 2.723 2.722 7.2-7.252L17.868 8.5l-7.714 7.754a.8.8 0 0 1-.508.252z"
                  fill="#fff" /></svg>
              <span class="ml-2">Integer posuere erat a ante venenatis dapibus</span>
            </div>
          </li>
        </ul>

        <a href="#" class="inline-block px-6 py-4 bg-white text-blue-600 rounded-lg mt-8">Find the Fair Rate</a>
      </div>
    </div>
  </section>
  <section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left -mt-32">
    <div class="flex flex-col md:flex-row items-center justify-between bg-blue-300 px-12 py-10 rounded-lg shadow-lg">
      <div class="w-full md:w-2/3">
        <h2 class="text-3xl leading-tight font-bold">Need help?</h2>
        <p class="mt-2 md:max-w-md">Contact our Customer Support that is always ready to help you with any possible questions, problems or
          information.</p>
      </div>

      <div class="w-full md:w-1/3 md:text-right mt-6 md:mt-0">
        <a href="#" class="inline-block px-6 py-4 bg-blue-600 text-white rounded-lg">Go to Support</a>
      </div>
    </div>
  </section>
    <section id="stats" className="py-20 bg-gray-300 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
  
    <section className="container mx-auto my-20 py-24 bg-orange-300 rounded-lg  text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
    </Layout>
  );
}

export default IndexPage;


// <section id="testimonials" className="py-8 lg:py-40">
// <div className="container mx-auto">
//   <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
//   <div className="flex flex-col md:flex-row md:-mx-3">
//     {customerData.map(customer => (
//       <div key={customer.customerName} className="flex-1 px-3">
//         <CustomerCard customer={customer} />
//       </div>
//     ))}
//   </div>
// </div>
// </section>