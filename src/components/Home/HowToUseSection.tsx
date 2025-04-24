import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const configModeSteps = [
  {
    title: 'Install the package',
    code: 'npm install @acme/form-builder',
  },
  {
    title: 'Create a form configuration',
    code: `const formElements = [
  {
    type: "text",
    name: "fullName",
    label: "Full Name",
    required: true
  },
  {
    type: "email",
    name: "email",
    label: "Email Address",
    required: true
  }
];`,
  },
  {
    title: 'Define a Zod schema for validation',
    code: `import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email")
});`,
  },
  {
    title: 'Render the form',
    code: `import { FormBuilder } from "@acme/form-builder";
import {formElements} from "formElements";       

function ContactForm() {

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
}`,
  },
];

export function HowToUseSection() {
  return (
    <section id="usage" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Implementation
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How to use
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get started with our form builder in just a few minutes.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-5xl">
          <Tabs defaultValue="config-mode" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-6">
              <TabsTrigger value="config-mode" className="text-sm sm:text-base">
                Config Mode
              </TabsTrigger>
              <TabsTrigger value="layout-mode" className="text-sm sm:text-base">
                Layout Mode
              </TabsTrigger>
            </TabsList>
            <TabsContent value="config-mode" className="mt-6 w-full">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-6 sm:space-y-8">
                    {configModeSteps.map((step, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                            {index + 1}
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold">
                            {step.title}
                          </h3>
                        </div>
                        <div className="rounded-md bg-muted p-3 sm:p-4">
                          <pre className="text-xs sm:text-sm overflow-x-auto">
                            <code className="language-typescript whitespace-pre-wrap break-words">
                              {step.code}
                            </code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="layout-mode" className="mt-6 w-full">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-6 sm:space-y-8">
                    <h1 className="text-2xl font-medium">
                      Layout Mode is currently being shipped as we speak 👷🏾‍♀️
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
