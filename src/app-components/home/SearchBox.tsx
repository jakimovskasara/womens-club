import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function SearchBox() {
    const [date, setDate] = React.useState<Date>()
    return (
        <>
            <div className="rounded-2xl bg-indigo-800 mt-8 pt-2 flex justify-center align-center ml-12 mr-12">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal bg-indigo-800 inline-flex",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
                <Select >
                    <SelectTrigger className="w-[280px] justify-start text-left font-normal bg-indigo-800 mt - 2 ml-2 mb-2 inline-flex">
                        <SelectValue placeholder="Town" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sofia">Sofia</SelectItem>
                        <SelectItem value="bertovitsa">Berkovitsa</SelectItem>
                        <SelectItem value="plovdiv">Plovdiv</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}


export default SearchBox
