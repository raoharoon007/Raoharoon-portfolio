import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').default(''),
  email: yup.string().email('Invalid email address').required('Email is required').default(''),
  message: yup.string().required('Message cannot be empty').min(10, 'Please write a bit more').default(''),
}).required();

type FormData = yup.InferType<typeof schema>;

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('https://formspree.io/f/mvzdkpgl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Section id="contact" subtitle="Get in Touch" title="Let's Build Something Great">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-xl text-on-surface-variant leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Whether you have a specific project in mind or just want to chat about
              the latest in web tech, my inbox is always open.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-surface-container-low border border-white/5 transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Email</p>
                <p className="text-sm sm:text-lg font-headline font-medium truncate">raoharoon007@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-surface-container-low border border-white/5 transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Phone</p>
                <p className="text-sm sm:text-lg font-headline font-medium truncate">(+92) 3330508624</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-surface-container-low border border-white/5 transition-all sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Send className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">LinkedIn</p>
                <p className="text-sm sm:text-lg font-headline font-medium truncate">rao-haroon</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border-white/10"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                    <input
                      {...register('name')}
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full bg-surface-container-highest/50 border ${errors.name ? 'border-error' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p id="contact-name-error" role="alert" className="text-[10px] text-error font-bold uppercase">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                    <input
                      {...register('email')}
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full bg-surface-container-highest/50 border ${errors.email ? 'border-error' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p id="contact-email-error" role="alert" className="text-[10px] text-error font-bold uppercase">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                  <textarea
                    {...register('message')}
                    id="contact-message"
                    rows={4}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full bg-surface-container-highest/50 border ${errors.message ? 'border-error' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none text-sm`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p id="contact-message-error" role="alert" className="text-[10px] text-error font-bold uppercase">{errors.message.message}</p>}
                </div>
                
                {isError && (
                  <p className="text-xs text-error font-bold text-center">Something went wrong. Please try again or email me directly.</p>
                )}

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-bold uppercase tracking-widest group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-12 rounded-3xl border-white/10 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Send className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold text-on-background">Message Sent Successfully!</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsSubmitted(false)}
                  className="cursor-pointer"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
