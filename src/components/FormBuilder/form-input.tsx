import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { ControllerRenderProps } from 'react-hook-form';
import { ElementsProps } from '@/lib/types';
import { FormLabel } from '../ui/form';

type FormInputProps = {
  placeholder: string;
  field: ControllerRenderProps;
  type?: React.HTMLInputTypeAttribute;
  element: ElementsProps;
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ placeholder, field, type, element }, ref) => {
    return (
      <div className={`${cn('grid gap-2', element.slots?.container)}`}>
        <FormLabel className={`${cn(element.slots?.label)}`}>
          {element.label}
        </FormLabel>
        <Input
          type={type}
          {...field}
          placeholder={placeholder}
          ref={ref}
          className={`autofill:bg-red ${cn(
            element.className,
            element.slots?.field
          )}`}
        />
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
