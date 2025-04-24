import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { cn } from '@/lib/utils';
import { renderElement } from '@/lib/renders';
import { FormBuilderProps } from '@/lib/types';
import { useEffect } from 'react';
import { FormButton } from './form-button';

function FormBuilder<SubmissionData, FormSetterProps>({
  elements,
  onSubmit,
  formSchema,
  formData,
  setFormData,
  className,
}: FormBuilderProps<SubmissionData, FormSetterProps>) {
  const elementNames = [...elements.map((element) => element.name)];
  const defaultValues = Object.keys(formData).reduce((previous, current) => {
    if (elementNames.includes(current)) {
      previous[current] = formData[current];
    }
    return previous;
  }, {} as Record<string, unknown>);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    const subscribe = form.watch((values: Record<string, unknown>) => {
      setFormData((prevData) => ({ ...prevData, ...values }));
    });
    return () => subscribe.unsubscribe();
  }, [form, setFormData]);
  console.log(form.formState.isSubmitSuccessful);
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form]);
  return (
    <>
      <Form {...form}>
        <form
          className={`flex flex-col gap-4 ${cn(className)}`}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {elements.map((element, index) => {
            if (element.elementType === 'button') {
              return (
                <FormButton
                  key={'button'}
                  className={element?.className}
                  buttonText={element?.label ?? ''}
                  type={'submit'}
                />
              );
            }
            return (
              <FormField
                key={index}
                control={form.control}
                name={element.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {renderElement(element, field, form.control)}
                    </FormControl>

                    {element.helperText && (
                      <FormDescription>{element.helperText}</FormDescription>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
        </form>
      </Form>
    </>
  );
}

export default FormBuilder;
