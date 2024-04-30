import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react"
import { Button } from '@/components/ui/button'

const Subscription = () => {
  return (
    <div>
      <Alert className="w-2/4 mx-auto mt-4 bg-rose-100">
        <Terminal className="h-4 w-4" />
        <AlertTitle>30 BGN subscription / monthly</AlertTitle>
        <AlertDescription className="grid grid-cols-2">
          <div className="p-4">
            <ul>
              <li>☑ Access to events booking</li>
              <li>☑ Esperience the evrnts at a discounted price</li>
              <li>☑ Individual mentor from the community</li>
              <li>☑ Access to our newsletter with benefits from partners</li>
            </ul>
          </div>
          <div className="p-4 place-self-center">
          <Button>Subscribe</Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Subscription;
