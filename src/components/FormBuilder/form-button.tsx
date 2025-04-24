import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { forwardRef } from 'react';

type FormButtonProps = {
  className?: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  buttonText: string;
};

export const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ className, type, buttonText }, ref) => {
    return (
      <Button ref={ref} type={type} className={`${cn(className)}`}>
        {buttonText}
      </Button>
    );
  }
);

FormButton.displayName = 'FormButton';
