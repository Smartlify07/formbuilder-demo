import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { toast } from 'sonner';
import FormBuilder from '../FormBuilder/FormBuilder';
import { z } from 'zod';
import { formElements } from '@/lib/demo/formElement';

export function DemoSection() {
  const formSchema = z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .min(1, 'Name is required'),

    email: z
      .string({
        required_error: 'Email address is required',
        invalid_type_error: 'Email must be a string',
      })
      .email('Enter a valid email'),

    company: z
      .string({
        invalid_type_error: 'Company must be a string',
      })
      .optional(),

    role: z
      .string({
        required_error: 'Role is required',
      })
      .min(1, 'Please select a role'),

    message: z
      .string({
        invalid_type_error: 'Message must be a string',
      })
      .optional(),

    newsletter: z.boolean().optional(),
  });

  const [formState, setFormState] = useState<z.infer<typeof formSchema>>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    newsletter: false,
  });

  const handleSubmit = () => {
    toast('You submitted the following values', {
      classNames: {
        title: 'text-base',
        description: 'w-full w-[300px]',
      },
      description: (
        <pre className="mt-2 w-[300px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(formState, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <section
      id="demo"
      className="py-20 flex items-center justify-center bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Live Demo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See it in action
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Try out this interactive demo to see how the form builder works in
              practice.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border shadow-md">
            <CardHeader>
              <CardTitle>Live Form Preview</CardTitle>
              <CardDescription>
                Fill out this form to see the FormBuilder in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormBuilder
                formSchema={formSchema}
                formData={formState}
                setFormData={setFormState}
                onSubmit={handleSubmit}
                elements={formElements}
              />
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">How it works</h3>
              <p className="text-muted-foreground">
                The form you see is built using our FormBuilder component. In
                your actual implementation, you would:
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Define your form schema</h4>
                  <p className="text-sm text-muted-foreground">
                    Create a Zod schema for validation and type safety
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Configure form elements</h4>
                  <p className="text-sm text-muted-foreground">
                    Define your fields, their types, validation, and appearance
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Implement form submission</h4>
                  <p className="text-sm text-muted-foreground">
                    Handle form data with your business logic
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Style to match your brand</h4>
                  <p className="text-sm text-muted-foreground">
                    Customize the look and feel to match your design system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
