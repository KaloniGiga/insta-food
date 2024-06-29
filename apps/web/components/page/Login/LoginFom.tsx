'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const LoginForm = () => {
  const formSchema = z.object({
    phone: z.string().length(10, {
      message: 'Phone must contain 10 numbers',
    }).regex(/^\d{10}$/, { message: 'Phone number only contains numbers'})
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[30%] space-y-8 p-6"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: 'inherit' }} className="text-[24px]">
                    Enter with your mobile number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none rounded-sm bg-[#f0f0f0] h-12 text-md"
                      placeholder="Enter phone number "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-sm font-normal' />
                </FormItem>
              )}
            />
            <Button className="w-full h-10 text-md" type="submit">
              Continue
            </Button>
            <div>
              <span className="text-gray-800 text-xs">
                By proceeding, you conset to get calls, Whatsapp or SMS
                messages, including by automated means from InstaFood
              </span>
            </div>
          </form>
        </Form>
  )
}
