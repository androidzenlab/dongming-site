import Header from "components/Header";
import Section from "components/Section";
import Footer from "components/Footer";
import { MapProvider } from "providers/map-provider";
import { MapComponent } from "components/MapComponent";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Section
          leftHalf={
            <>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              Contact Me
              </h3>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">

              </h3>
              <p className="text-xl font-light">
              Level 1 Room16, <br/>37 Courtenay Place, <br/>Te Aro, <br/>Wellington
              <br/>
              Tel: 04-802 5208

               <br/> Mobile: 02102347268
              </p>
            </>
          }
          rightHalf={

    <MapProvider>
      <MapComponent />
    </MapProvider>

            // <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
      </main>
      <Footer />
    </div>
  );
}
