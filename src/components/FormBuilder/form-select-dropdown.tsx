import React from 'react';
import { ElementsProps } from '@/lib/types';
import { Control, useController } from 'react-hook-form';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { cn } from '@/lib/utils';
import { FormLabel } from '../ui/form';

export const FormSelectDropDown = React.forwardRef<
  HTMLDivElement,
  {
    element: ElementsProps;
    control: Control<Record<string, unknown>, unknown, unknown>;
  }
>(({ element, control }, ref) => {
  const { field } = useController({
    control,
    name: element.name,
  });

  return (
    <div ref={ref} className={cn('grid gap-2', element?.slots?.container)}>
      {element.label && <FormLabel>{element.label}</FormLabel>}
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value as string}
      >
        <SelectTrigger className={`${cn(element?.slots?.trigger)}`}>
          <SelectValue
            className={`${cn(element.slots?.selectedValue)}`}
            placeholder={element.placeholder}
          ></SelectValue>
        </SelectTrigger>
        <SelectContent className={`${cn(element?.slots?.selectContent)}`}>
          {element.options?.map((option, index) => (
            <SelectItem
              className={`${cn(element?.slots?.selectItem)}`}
              value={option.value as string}
              key={index}
            >
              <Label className={`${cn(element?.slots?.label)}`}>
                {option.label}
              </Label>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
});

FormSelectDropDown.displayName = 'FormSelectDropDown';
