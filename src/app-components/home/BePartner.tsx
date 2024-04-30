import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Sitting from "../../../public/sitting.png";

const BePartner = () => {
  return (
    <div className="w-full">
      <Alert className="mt-4 bg-rose-100">
        <AlertDescription className="grid grid-cols-2">
          <div className="pl-4">
            <img src={Sitting} className="h-[280px] mx-auto" />
          </div>
          <div className="pl-4 place-self-center">
          <AlertTitle>Want to be our partner?</AlertTitle>
            <Button className="mt-3" href="/partners">See how</Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BePartner;
