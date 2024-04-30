import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiBellOn, CiLogout } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { PiCoinsLight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { SlPresent } from "react-icons/sl";

interface SectionsListProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}

export const SectionsList: React.FC<SectionsListProps> = ({
  setSelectedTab
}) => {
  return (
    <Card className="w-[200px]">
      <CardHeader className="flex items-center">
        <div className="flex items-center mr-5">
          <Avatar className="mr-3">
            <AvatarImage>
              <CgProfile />
              {/* TODO(): Conider giving users the option to upload their own pfp? */}
            </AvatarImage>
            <AvatarFallback>Pp</AvatarFallback>
            {/* TODO(): Cut user's First and Last name and use initials */}
          </Avatar>
          <div>
            <CardTitle>Name Here</CardTitle>
            <CardDescription>Plan type</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          className="flex justify-between w-full h-full rounded-none"
          onClick={() => setSelectedTab(0)}
        >
          <RxAvatar />
          Personal Data
        </Button>
      </CardContent>
      <CardContent>
        <Button
          variant="ghost"
          className="flex justify-between w-full h-full rounded-none"
          onClick={() => setSelectedTab(1)}
        >
          <CiBellOn />
          Subscription
        </Button>
      </CardContent>
      <CardContent>
        <Button
          variant="ghost"
          className="flex justify-between w-full h-full rounded-none text-justify"
          onClick={() => setSelectedTab(2)}
        >
          <PiCoinsLight />
          Payment
        </Button>
      </CardContent>
      <CardContent>
        <Button
          variant="ghost"
          className="flex justify-between w-full h-full rounded-none"
          onClick={() => setSelectedTab(3)}
        >
          <SlPresent />
          Discounts
        </Button>
      </CardContent>
      <CardContent>
        <Button
          variant="ghost"
          className="flex justify-between w-full h-full rounded-none"
          onClick={() => setSelectedTab(4)}
        >
          <HiOutlineMail />
          Contact us
        </Button>
      </CardContent>
      <CardFooter>
        <div className="flex items-center">
          <CiLogout className="mr-2" />
          <p className="text-red-400">Log out</p>
        </div>
      </CardFooter>
    </Card>
  );
};
