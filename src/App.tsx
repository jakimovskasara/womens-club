import BackgroundBanner from "./app-components/home/BackgroundBanner";
import SearchBox from "./app-components/home/SearchBox";
import Sponsors from "./app-components/home/Sponsors";
import BlogHomepage from "./app-components/home/BlogHomepage";
import { Footer } from "./app-components/home/Footer";

import Subscription from "./app-components/home/Subscription";
import BePartner from "./app-components/home/BePartner";
import Events from "./app-components/EventsPage/Events";

export const App = () => {
  return (
    <>
      <BackgroundBanner />
      <SearchBox />
      <Events />
      <Subscription />
      <Sponsors />
      <BlogHomepage />
      <BePartner />
      <Footer />
    </>
  );
};
