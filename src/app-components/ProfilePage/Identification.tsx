import { cn } from "@/lib/utils"
//import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  //DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaFeather } from "react-icons/fa"
import { useState } from "react"

 
export function DrawerDialogDemo() {
    const [open, setOpen] = useState(false)
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }
  
  function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
      <form className={cn("grid items-start gap-4", className)}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="shadcn@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@shadcn" />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    )
  }

  type IdentificationProps = {
    title: string;
    placeholder: string;
  }
  
  export function Identification(props: IdentificationProps) {
    return (
      <div> 
        <Label>{props.title}</Label>
        <Input type="email" placeholder={props.placeholder} />
        <Button type="submit"><FaFeather /></Button>
      </div>
    )
  }