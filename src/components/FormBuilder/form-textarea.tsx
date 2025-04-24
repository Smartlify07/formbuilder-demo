import React from 'react';
import { ElementsProps } from '@/lib/types';
import { Textarea } from '../ui/textarea';
import { ControllerRenderProps } from 'react-hook-form';
import { FormLabel } from '../ui/form';
import { cn } from '@/lib/utils';

type FormTextAreaProps = {
  element: ElementsProps;
  field: ControllerRenderProps;
};

export const FormTextArea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextAreaProps
>(({ element, field }, ref) => {
  return (
    <div className={cn('grid gap-2', element?.slots?.container)}>
      {element?.label && (
        <FormLabel className={cn(element?.slots?.label)}>
          {element?.label}
        </FormLabel>
      )}

      <Textarea
        {...field}
        ref={ref}
        placeholder={element.placeholder}
        rows={element?.rows}
        cols={element?.cols}
        className={element.className}
      />
    </div>
  );
});

FormTextArea.displayName = 'FormTextArea';
