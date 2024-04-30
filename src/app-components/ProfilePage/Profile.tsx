import { useState } from "react";
import { SectionsList } from "./SectionsList";
import { Identification } from "./Identification";
import { Button } from "@/components/ui/button";

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const renderSelectedTab = () => {
    switch(selectedTab) {
      case 0:
        return <PersonalData />
      case 1:
        return <Subscription />
      case 2:
        return <Payment />
      case 3:
        return <Discounts />
    }
  }

  return (
    <>
      <div className="mt-5">
      <div className="inline-block mr-4">
          <SectionsList setSelectedTab={setSelectedTab} />
      </div>
        {renderSelectedTab()}
      </div>
    </>
  );
};

const PersonalData = () => {
  return <>
    <div className="inline-block mr-4">
          <Identification placeholder="Jenny Smith" title="Name"/>
          <Identification placeholder="(+359) 876 987 234" title="Phone"/>
          <Identification placeholder="Blagoevgrad, Svoboda Buchvarova 7" title="Address"/>
        </div>
        <div className="inline-block mr-4">
          <Identification placeholder="man210@aubg.edu" title="E-mail"/>
          <Identification placeholder="*******" title="Password"/>
          <Identification placeholder="2700" title="Post code"/>
        </div>
  </>
}

const Subscription = () => {
  return <>
  <div className="inline-block mr-12">
    <h1>Current subscription</h1>
    <h5>Valid until:</h5>
    <div className="bg-red-300 w6  h-[120px]"> 
      <p className=" place-content-center ">13.05</p>
    </div>
    <Button>Unsubscribe</Button>
  </div>
  </>
}

const Payment = () => {
  return <>
     <div className="inline-block mr-4">
          <Identification placeholder="**********" title="Creditcard"/><img src="/cards.jpg" alt="Cards" width="50px"/>
          <Identification placeholder="Account number: ****" title="PayPay"/><img src="/payPal.png" alt="Cards" width="50px"/> 
      </div>
  </>
}

const Discounts = () => {
  return <>
    <div className="inline-block mr-4">
    <p>Discount codes from:</p>
          <Identification placeholder="10Community" title="Ciela Bookstore"/>
          <Identification placeholder="MammaComm25" title="Puffies"/>
          <Identification placeholder="CommunityMamma15" title="1 Magazine"/>
    </div>

    <div className="inline-block mr-4">
          <Identification placeholder="MC2024" title="Бочко"/>
          <Identification placeholder="Mustela15" title="Mustela"/>
          <Identification placeholder="10MammaCM" title="She and Her"/>
    </div>
  </>
}