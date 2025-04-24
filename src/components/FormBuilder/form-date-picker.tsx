import React from 'react';
import { ElementsProps } from '@/lib/types';
import { ControllerRenderProps } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { FormControl, FormDescription } from '../ui/form';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Label } from '../ui/label';

export const FormDatePicker = React.forwardRef<
  HTMLDivElement,
  {
    element: ElementsProps;
    field: ControllerRenderProps;
  }
>(({ element, field }, ref) => {
  return (
    <div ref={ref} className={`grid gap-2 ${cn(element?.slots?.container)}`}>
      {element?.label && (
        <Label
          className={`first-letter:capitalize ${cn(element?.slots?.label)}`}
        >
          {element.label}
        </Label>
      )}
      <Popover>
        <PopoverTrigger className={`${element?.slots?.popoverTrigger}`}>
          <FormControl>
            <div
              className={cn(
                'w-[240px] flex items-center border rounded-sm p-2 text-left font-normal',
                !field.value && 'text-muted-foreground'
              )}
            >
              {field.value ? (
                format(field.value, 'PPP')
              ) : (
                <span className={`${cn(element.slots?.placeholder)}`}>
                  Pick a date
                </span>
              )}
              <CalendarIcon
                className={`${cn(
                  'ml-auto h-4 w-4 opacity-50',
                  element.slots?.icon
                )}`}
              />
            </div>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent sideOffset={5} className="p-0" align="start">
          <Calendar
            classNames={{}}
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date('1900-01-01')
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormDescription>{element.helperText}</FormDescription>
    </div>
  );
});

FormDatePicker.displayName = 'FormDatePicker';
