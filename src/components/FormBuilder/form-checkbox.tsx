import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';
import { ElementsProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

export const FormCheckbox = React.forwardRef<HTMLDivElement, {
  field: ControllerRenderProps;
  element: ElementsProps;
}>(({ field, element }, ref) => {
  return (
    <div
      ref={ref}
      className={`${cn('flex items-center gap-3', element.slots?.container)}`}
    >
      {element.label && (
        <Label className={`${cn(element.slots?.label)}`}>{element.label}</Label>
      )}
      <Checkbox
        className={`${cn(element?.slots?.checkbox)}`}
        onCheckedChange={(checked) => {
          field.onChange(checked);
        }}
      />
    </div>
  );
});

FormCheckbox.displayName = 'FormCheckbox';
