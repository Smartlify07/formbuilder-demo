import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const ConfigExample = `// Basic form configuration
const formElements: ElementsProps[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    placeholder: 'Jane Doe',
    elementType: 'text',
    dataType: 'string',
    helperText: 'Enter your full name.',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'jane@example.com',
    elementType: 'email',
    dataType: 'string',
    helperText: 'We’ll never share your email.',
  },
  {
    id: 'company',
    name: 'company',
    label: 'Company',
    placeholder: 'Acme Inc.',
    elementType: 'text',
    dataType: 'string',
  },
  {
    id: 'role',
    name: 'role',
    label: 'Role',
    elementType: 'select',
    dataType: 'string',
    placeholder: 'Select role',
    options: [
      { label: 'Frontend', value: 'frontend' },
      { label: 'Backend', value: 'backend' },
    ],
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    placeholder: 'Type your message...',
    elementType: 'textarea',
    dataType: 'string',
    rows: 4,
  },
  {
    id: 'newsletter',
    name: 'newsletter',
    label: 'Subscribe',
    elementType: 'checkbox',
    dataType: 'boolean',
  },
  {
    id: 'submit',
    name: 'submit',
    label: 'Submit',
    elementType: 'button',
    dataType: 'string',
    buttonType: 'submit',
    className: 'bg-black text-white w-full py-2',
  },
];


// Create a Zod schema for validation
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




// Use the FormBuilder component
function UserForm() {
  const [formState, setFormState] = useState<z.infer<typeof formSchema>>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    newsletter: false,
  });

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormBuilder
        formSchema={formSchema}
        formData={formState}
        setFormData={setFormState}
        onSubmit={handleSubmit}
        elements={formElements}
    />
  );
}`;

export function CodeExamplesSection() {
  const [activeTab, setActiveTab] = useState('config');

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast('Code copied to clipboard', {
      description: 'You can now paste the code into your project',
      classNames: {
        description: '!text-neutral-600',
      },
    });
  };

  return (
    <section id="code" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Code Examples
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple to implement
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our form builder offers multiple ways to create forms, from simple
              configuration to custom layouts.
            </p>
          </div>
        </div>

        <div className="mt-10 w-full mx-auto">
          <Tabs defaultValue="config" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="config">Config Mode</TabsTrigger>
              <TabsTrigger value="layout">Layout Mode</TabsTrigger>
            </TabsList>
            <div className="relative mt-6">
              <Button
                variant="default"
                size="sm"
                className="absolute right-4 top-4 z-10"
                onClick={() =>
                  copyCode(activeTab === 'config' ? ConfigExample : ``)
                }
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <TabsContent value="config" className="mt-0 ">
                <div className="relative rounded-md max-w-full overflow-hidden bg-neutral-100">
                  <pre className="text-xs md:text-sm overflow-x-auto p-6">
                    <code className="language-typescript whitespace-pre-wrap break-words">
                      {ConfigExample}
                    </code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="layout" className="mt-0">
                <div className="relative rounded-xl w-full h-[300px] flex items-center justify-center overflow-hidden bg-card">
                  <h1 className="text-3xl">
                    The layout mode is being shipped as we speak ⚒️👷🏾‍♀️
                  </h1>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
