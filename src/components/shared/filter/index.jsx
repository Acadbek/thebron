import { FilterIcon } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import useMultiRangeSlider from "@/hooks/useMultiRangeInput"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import MultiRangeSlider from "../multi-range"

const Filter = () => {
  const [date, setDate] = useState({ from: new Date(2022, 0, 20), to: addDays(new Date(2022, 0, 20), 20) })
  const [values, setValues] = useState([20, 80]);

  const handleRangeChange = (newValues) => {
    setValues(newValues);
  };

  const [range, setRange] = useState({ min: 0, max: 100 });


  return (
    <Sheet p-0>
      <SheetTrigger asChild>
        <Button flex items-center gap-2 variant="outline">Фильтр <FilterIcon /></Button>
      </SheetTrigger>
      <SheetContent className="p-0" flex flex-col min-w="599px">
        <SheetHeader h="45px" my-0 py="8px" border-b flex justify-start items-center>
          <SheetTitle>Фильтры</SheetTitle>
        </SheetHeader>
        <div mt-0 mx-0 px="20px">
          <ToggleGroup defaultValue={'bold'} flex items-center className="gap-0" mx-0 w-full type="single">
            <ToggleGroupItem className="data-[state=on]:bg-primary data-[state=on]:text-white !data-[state=off]:border" rounded-r-none p-0 w-full mx-0 value="bold" aria-label="Toggle">
              С начало дешедешевле
            </ToggleGroupItem>
            <ToggleGroupItem className="data-[state=on]:bg-primary data-[state=on]:text-white !data-[state=off]:border" rounded-l-none p-0 w-full mx-0 value="italic" aria-label="Toggle">
              С начначала дорогие
            </ToggleGroupItem>
          </ToggleGroup>
          <p text-sm text-muted-foreground mt="40px" mb-2>Прибытие | Выезд</p>
          <Popover w-full>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mr-[50px]" align="start">
              <Calendar w-full
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <div border-b w-full my="40px"></div>
          <SheetTitle>Ценовой диапазон</SheetTitle>
          <p text-lg not-italic font-normal leading-6>Цены за ночь без учета налогов и сборов</p>
          <MultiRangeSlider
            min={0}
            max={100}
            onChange={(values) => setRange(values)}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Filter;
