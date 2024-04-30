import FAQ from "./FAQ";
import ContactCard from "./ContactCard";
import Information from "./Information";


const AboutPage = () => {
  return (
    <>
    <div className="min-h-24 justify-center">
    <h1 className="text-xl font-bold text-indigo-800 flex items-center justify-center italic">Mamma Buddy - the best place for all expecting mothers</h1>
    <p className="text-center">Read more about us and ask your questions! We are here to help!</p>
    </div>
    <div className="flex items-center justify-center mt-4">
        <div className="float-right pr-4 pl-4">
            <ContactCard />
        </div>
        <div className="float-left pl-4 pr-4">
            <Information />
        </div>
    </div>
    <FAQ/>
    </>
  )
}

export default AboutPage
