'use client'
import { useState } from 'react';
import { Modal, TextInput, Textarea, Button, Group, Text, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { motion } from 'framer-motion';
import { IconSend } from '@tabler/icons-react';

interface ContactFormProps {
  opened: boolean;
  onClose: () => void;
  isDark: boolean;
}

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm({ opened, onClose, isDark }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value: string) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value: string) => (value.length < 2 ? 'Subject must be at least 2 characters' : null),
      message: (value: string) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      notifications.show({
        title: 'Success!',
        message: 'Your message has been sent. We will get back to you soon.',
        color: 'green',
      });
      form.reset();
      onClose();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text 
          size="xl" 
          fw={700}
          style={{
            fontFamily: 'Cal Sans, sans-serif',
            background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get in Touch
        </Text>
      }
      size="lg"
      radius="lg"
      padding="xl"
      styles={{
        body: {
          background: isDark ? '#1a1b1e' : '#ffffff',
        },
        header: {
          background: isDark ? '#1a1b1e' : '#ffffff',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        },
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box mb="xl">
          <Text 
            size="sm" 
            c={isDark ? 'gray.4' : 'gray.7'}
            mb="xl"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              lineHeight: 1.7,
            }}
          >
            Have a question or want to work together? Fill out the form below and we will get back to you shortly.
          </Text>

          <Group grow mb="md">
            <TextInput
              label="Name"
              placeholder="Your name"
              {...form.getInputProps('name')}
              styles={{
                input: {
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  '&:focus': {
                    borderColor: '#2563eb',
                  },
                },
                label: {
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  marginBottom: '8px',
                },
              }}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
              styles={{
                input: {
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  '&:focus': {
                    borderColor: '#2563eb',
                  },
                },
                label: {
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  marginBottom: '8px',
                },
              }}
            />
          </Group>

          <Select
            label="Subject"
            placeholder="Select a subject"
            mb="md"
            data={[
              { value: 'general', label: 'General Inquiry' },
              { value: 'support', label: 'Technical Support' },
              { value: 'business', label: 'Business Opportunity' },
              { value: 'other', label: 'Other' },
            ]}
            {...form.getInputProps('subject')}
            styles={{
              input: {
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                '&:focus': {
                  borderColor: '#2563eb',
                },
              },
              label: {
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                marginBottom: '8px',
              }
            }}
          />

          <Textarea
            label="Message"
            placeholder="Your message"
            minRows={4}
            {...form.getInputProps('message')}
            styles={{
              input: {
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                '&:focus': {
                  borderColor: '#2563eb',
                },
              },
              label: {
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                marginBottom: '8px',
              },
            }}
          />
        </Box>

        <Group justify="flex-end">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
              radius="xl"
              size="md"
              loading={isSubmitting}
              leftSection={<IconSend size={16} />}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                padding: '0 32px',
                height: '42px',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </Group>
      </form>
    </Modal>
  );
} 