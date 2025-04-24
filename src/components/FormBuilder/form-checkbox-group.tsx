import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { cn } from '@/lib/utils';
import { ElementsProps } from '@/lib/types';

export const MultiCheckbox = React.forwardRef<
  HTMLButtonElement,
  {
    element: ElementsProps;
    control: Control<Record<string, unknown>, unknown, unknown>;
  }
>(({ element, control }, ref) => {
  const { field } = useController({
    control,
    name: element.name,
  });

  const [value, setValue] = React.useState<(string | number | null)[]>(
    (field.value as string[]) || []
  );

  const handleChange = (
    checked: boolean | string,
    index: number,
    checkValue: string | number
  ) => {
    const valueCopy = [...value];
    valueCopy[index] = checked ? checkValue : null;
    const filteredCopy = valueCopy.filter((val) => val !== null);
    field.onChange(filteredCopy);
    setValue(filteredCopy);
  };

  return (
    <>
      {element.options?.map((option, index) => (
        <div
          className={cn('flex flex-col', element?.slots?.container)}
          key={index}
        >
          <Label className={cn(element?.slots?.label)}>{option.label}</Label>

          <Checkbox
            className={cn(element?.slots?.checkbox)}
            value={option.value}
            onCheckedChange={(checked) => {
              handleChange(checked, index, option.value as string);
            }}
            ref={ref}
          />
        </div>
      ))}
    </>
  );
});

MultiCheckbox.displayName = 'MultiCheckbox';
