import { ElementsProps } from '@/lib/types';
import { ControllerRenderProps } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { FormControl, FormDescription } from '../ui/form';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export const FormDateTimePicker = ({
  element,
  field,
}: {
  element: ElementsProps;
  field: ControllerRenderProps;
}) => {
  const handleDateTimeChange = (
    type: 'hour' | 'minute' | 'ampm',
    value: string
  ) => {
    const currentDate = field.value || new Date();
    const newDate = new Date(currentDate);
    if (type === 'hour') {
      const hour = parseInt(value, 10);
      newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === 'ampm') {
      const hours = newDate.getHours();
      if (value === 'AM' && hours >= 12) {
        newDate.setHours(hours - 12);
      } else if (value === 'PM' && hours < 12) {
        newDate.setHours(hours + 12);
      }
    }
    field.onChange(newDate);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <FormControl>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] pl-3 text-left font-normal',
                !field.value && 'text-muted-foreground'
              )}
            >
              {field.value ? (
                format(field.value, 'MM/dd/yyyy hh:mm aa')
              ) : (
                <span>MM/DD/YYYY hh:mm aa</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="sm:flex">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) =>
                date > new Date() || date < new Date('1900-01-01')
              }
              initialFocus
            />
            <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
              <ScrollArea className="w-64 sm:w-auto">
                <div className="flex sm:flex-col p-2">
                  {Array.from({ length: 12 }, (_, i) => i + 1)
                    .reverse()
                    .map((hour) => (
                      <Button
                        key={hour}
                        size={'icon'}
                        variant={
                          field.value &&
                          field.value.getHours() % 12 === hour % 12
                            ? 'default'
                            : 'ghost'
                        }
                        onClick={() => {
                          handleDateTimeChange('hour', hour.toString());
                        }}
                        className="sm:w-full shrink-0 aspect-square"
                      >
                        {hour}
                      </Button>
                    ))}
                </div>

                <ScrollBar orientation="horizontal" className="sm:hidden" />
              </ScrollArea>
              <ScrollArea className="w-64 sm:w-auto">
                <div className="flex sm:flex-col p-2">
                  {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                    <Button
                      key={minute}
                      size="icon"
                      variant={
                        field.value && field.value.getMinutes() === minute
                          ? 'default'
                          : 'ghost'
                      }
                      onClick={() => {
                        handleDateTimeChange('minute', minute.toString());
                      }}
                      className="sm:w-full shrink-0 aspect-square"
                    >
                      {minute.toString().padStart(2, '0')}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" className="sm:hidden" />
              </ScrollArea>
              <ScrollArea>
                <div className="flex sm:flex-col p-2">
                  {['AM', 'PM'].map((ampm) => (
                    <Button
                      key={ampm}
                      size="icon"
                      variant={
                        field.value &&
                        ((ampm === 'AM' && field.value.getHours() < 12) ||
                          (ampm === 'PM' && field.value.getHours() >= 12))
                          ? 'default'
                          : 'ghost'
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() => {
                        handleDateTimeChange('ampm', ampm);
                      }}
                    >
                      {ampm}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <FormDescription>{element.helperText}</FormDescription>
    </div>
  );
};
