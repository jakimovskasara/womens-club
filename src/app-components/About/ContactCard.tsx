import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactCard = () => {
  return (
    <div className="rounded-2xl bg-indigo-800 p-8 min-w-fit">
      <Tabs defaultValue="account" className="w-2/5">
        <TabsList className="content-center">
          <TabsTrigger value="info">Contact Info</TabsTrigger>
          <TabsTrigger value="form">Contact Form</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Label>Find us here:</Label>
          <p>Instagram:</p>
          <p>Facebook:</p>
          <p>E-mail:</p>
        </TabsContent>
        <TabsContent value="form">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Ask us through this form</CardTitle>
              <CardDescription>
                Fill to form and we will get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Type of question</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="membership">Membership</SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                        <SelectItem value="general">General info</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email:" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Your Question/Message</Label>
                      <Textarea
                        placeholder="Type your message here."
                        id="message-2"
                      />
                    </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Send</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactCard;
