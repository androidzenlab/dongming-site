import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more
                about you.
                This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.
                Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show
                your visitors who you are
              </h2>
              <p className="text-xl font-light">

              </p>
            </>
          }
          rightHalf={
                <Image                            
                    src={`${process.env.BASE_PATH}/teacher.avif`}
                    width={1000}
                    height={760}
                    className="w-1/2 h-auto"
                    alt="section-image"
                />
            // <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
      </main>
      <Footer />
    </div>
  );
}
