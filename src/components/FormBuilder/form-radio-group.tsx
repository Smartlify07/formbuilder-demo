import React from 'react';
import { ElementsProps } from '@/lib/types';
import { Control, useController } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { FormControl, FormItem, FormLabel } from '../ui/form';
import { cn } from '@/lib/utils';

export const FormRadioGroup = React.forwardRef<HTMLDivElement, {
  element: ElementsProps;
  control: Control<Record<string, unknown>, unknown, unknown>;
}>(({ element, control }, ref) => {
  const { field } = useController({
    control,
    name: element.name,
  });

  return (
    <RadioGroup
      ref={ref}
      className={`${cn(element?.slots?.groupContainer)}`}
      defaultValue={field.value as string}
      onValueChange={(value) => {
        field.onChange(value);
      }}
    >
      {element.options?.map((option, index) => (
        <div key={index} className="flex flex-col">
          <FormItem
            className={`${cn(
              'flex items-center',
              element?.slots?.radioContainer
            )}`}
          >
            <FormControl>
              <RadioGroupItem
                className={element?.slots?.radio}
                value={option.value as string}
              />
            </FormControl>
            <FormLabel className={element?.slots?.label}>
              {option.label}
            </FormLabel>
          </FormItem>
        </div>
      ))}
    </RadioGroup>
  );
});

FormRadioGroup.displayName = 'FormRadioGroup';
