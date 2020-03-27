import React from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import coustomer from '../images/customer.png';
import appdesign from '../images/appdesign.png';
import webhosting from '../images/webhosting.png';
import webdesign from '../images/webdesign.jpg';
import team1 from '../images/team1.jpg';
import team3 from '../images/team-3.jpg';
import team2 from '../images/team2.jpg';
import team4 from '../images/team4.png';


// <FaTwitter className="align-middle w-8 h-8 ml-1" />

function ServicePage() {
  
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section class="relative px-4 sm:px-8 mt-24 bg-gray-200 lg:px-16 xl:px-40 2xl:px-64 py-20 text-center">
        <div>
          <h2 class="text-3xl leading-tight font-bold">Our Services</h2>
        </div>

        <div class="flex flex-col md:flex-row items-start justify-between mt-12">   
              
            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-8 lg:p-8 md:mx-2 lg:mx-4">
            <img src={webdesign} alt="webdesign" class="mx-auto h-40 rounded-lg" />
            <h4 class="text-xl font-bold leading-tight mt-8">Web Desing / Development</h4>
            <p class="text-gray-700 mt-2">Web development is the work involved in developing a website for the Internet an intranet. </p>
            </div>


            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={webhosting} alt="webhosting" class="mx-auto h-40 rounded-lg" />
              <h4 class="text-xl font-bold leading-tight mt-8">Web Hosting / Maintenance</h4>
              <p class="text-gray-700 mt-2">Web hosting is a type of Internet hosting service that allows individuals to make their website via the World Wide Web</p>
            </div>

           
            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={appdesign}  alt="appdesign" class="mx-auto h-40 rounded-lg" />
              <h4 class="text-xl font-bold leading-tight mt-8"> App Desin / Development</h4>
              <p class="text-gray-700 mt-2">Depending on your reasons for wanting to design mobile apps, you may get the easy to work done</p>
            </div>
            <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
              <img src={coustomer} alt="coustomer support" class="mx-auto h-40 rounded-lg" />
              <h4 class="text-xl font-bold leading-tight mt-8">Customer Service </h4>
              <p class="text-gray-700 mt-2">Customer service is the provision of service to customers before, during and after a purchase</p>
            </div>
        </div>

        <div class="mt-12 md:mt-20 w-full md:max-w-3xl mx-auto">
          <p class="text-xl">&ldquo;We make an beautiful design , easy to development. I’ve been able to apply for an
            amazing rate in just a minutes. Thank you get confidience of us!&rdquo;</p>
        </div>
      </section>
      <section className="pt-20 pb-48  ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our developers
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team1}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan 
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaTwitter className="align-middle w-8 h-8 " />
                       </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaFacebook className="align-middle w-8 h-8 " />
                      
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <AiOutlineGoogle className="align-middle w-8 h-8 " />
                      
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team2}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Romina Hadid
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaTwitter className="align-middle w-8 h-8 " />
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <AiOutlineGoogle className="align-middle w-8 h-8 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team3}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Alexa 
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <AiOutlineGoogle className="align-middle w-8 h-8 " />
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaTwitter className="align-middle w-8 h-8 " />
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaFacebook className="align-middle w-8 h-8 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team4}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Jenna Kardi
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <AiOutlineGoogle className="align-middle w-8 h-8 " />
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaTwitter className="align-middle w-8 h-8 " />
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <FaFacebook className="align-middle w-8 h-8 " />
                      </button>
                      <button
                      className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                    <AiOutlineGithub className="align-middle w-8 h-8 " />
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
}

export default ServicePage;
