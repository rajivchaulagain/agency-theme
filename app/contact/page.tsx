'use client'
import { useState } from 'react';
import { Container, Grid, Title, Text, Box, TextInput, Textarea, Button, Group, Select, Stack, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { motion } from 'framer-motion';
import { IconSend, IconPhone, IconMail, IconMapPin, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: IconPhone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: IconMail,
    title: 'Email',
    content: 'hello@company.com',
    link: 'mailto:hello@company.com'
  },
  {
    icon: IconMapPin,
    title: 'Visit Us',
    content: '123 Business Ave, Suite 100, San Francisco, CA 94107',
    link: 'https://maps.google.com'
  }
];

const socialLinks = [
  { icon: IconBrandTwitter, label: 'Twitter', link: 'https://twitter.com' },
  { icon: IconBrandLinkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
  { icon: IconBrandInstagram, label: 'Instagram', link: 'https://instagram.com' }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => (value.length < 2 ? 'Subject must be at least 2 characters' : null),
      message: (value) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      notifications.show({
        title: 'Success!',
        message: 'Your message has been sent. We will get back to you soon.',
        color: 'green',
      });
      form.reset();
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
    <>
      <Header />
      <Box
        style={{
          minHeight: '100vh',
          paddingTop: '90px',
          paddingBottom: '60px',
          background: isDark ? '#1A1B1E' : '#ffffff',
        }}
      >
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box mb={60}>
              <Title
                order={1}
                size={42}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, sans-serif',
                  marginBottom: '16px',
                }}
              >
                Get in touch
              </Title>
              <Text
                size="lg"
                c={isDark ? 'gray.5' : 'gray.7'}
                ta="center"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  maxWidth: '500px',
                  margin: '0 auto',
                }}
              >
                Have a question or want to work together? Drop us a message below.
              </Text>
            </Box>

            <Grid gutter={48}>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack gap={32}>
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Group wrap="nowrap" gap={16}>
                        <ThemeIcon
                          size={44}
                          radius="md"
                          variant="light"
                          color={isDark ? 'blue.4' : 'blue.6'}
                          style={{ backgroundColor: isDark ? 'rgba(51, 154, 240, 0.1)' : 'rgba(51, 154, 240, 0.1)' }}
                        >
                          <item.icon size={22} />
                        </ThemeIcon>
                        <Box>
                          <Text
                            fw={600}
                            size="sm"
                            tt="uppercase"
                            c={isDark ? 'gray.5' : 'gray.6'}
                            mb={4}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.5px' }}
                          >
                            {item.title}
                          </Text>
                          <Text
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            style={{ 
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              textDecoration: 'none',
                              color: isDark ? 'white' : 'black',
                              '&:hover': {
                                color: '#339AF0'
                              }
                            }}
                          >
                            {item.content}
                          </Text>
                        </Box>
                      </Group>
                    </motion.div>
                  ))}

                  <Box mt={8}>
                    <Text
                      fw={600}
                      size="sm"
                      tt="uppercase"
                      c={isDark ? 'gray.5' : 'gray.6'}
                      mb={16}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.5px' }}
                    >
                      Follow Us
                    </Text>
                    <Group gap="sm">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.label}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            component="a"
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="light"
                            color={isDark ? 'blue.4' : 'blue.6'}
                            style={{ 
                              backgroundColor: isDark ? 'rgba(51, 154, 240, 0.1)' : 'rgba(51, 154, 240, 0.1)',
                              width: '36px',
                              height: '36px',
                              padding: 0,
                            }}
                          >
                            <social.icon size={18} />
                          </Button>
                        </motion.div>
                      ))}
                    </Group>
                  </Box>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    p={32}
                    style={{
                      backgroundColor: isDark ? '#25262B' : '#F8F9FA',
                      borderRadius: '12px',
                    }}
                  >
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                      <Grid gutter="md">
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            label="Name"
                            placeholder="Your name"
                            {...form.getInputProps('name')}
                            styles={{
                              input: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                height: '42px',
                                backgroundColor: isDark ? '#1A1B1E' : 'white',
                                border: 'none',
                              },
                              label: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 600,
                                marginBottom: '8px',
                                fontSize: '0.875rem',
                              },
                            }}
                          />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                            styles={{
                              input: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                height: '42px',
                                backgroundColor: isDark ? '#1A1B1E' : 'white',
                                border: 'none',
                              },
                              label: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 600,
                                marginBottom: '8px',
                                fontSize: '0.875rem',
                              },
                            }}
                          />
                        </Grid.Col>
                        <Grid.Col span={12}>
                          <Select
                            label="Subject"
                            placeholder="Select a subject"
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
                                height: '42px',
                                backgroundColor: isDark ? '#1A1B1E' : 'white',
                                border: 'none',
                              },
                              label: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 600,
                                marginBottom: '8px',
                                fontSize: '0.875rem',
                              },
                              dropdown: {
                                border: 'none',
                                backgroundColor: isDark ? '#1A1B1E' : 'white',
                              },
                              option: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                '&[data-selected]': {
                                  backgroundColor: isDark ? '#339AF0' : '#339AF0',
                                  color: 'white',
                                },
                              },
                            }}
                          />
                        </Grid.Col>
                        <Grid.Col span={12}>
                          <Textarea
                            label="Message"
                            placeholder="Your message"
                            minRows={4}
                            {...form.getInputProps('message')}
                            styles={{
                              input: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                backgroundColor: isDark ? '#1A1B1E' : 'white',
                                border: 'none',
                              },
                              label: {
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 600,
                                marginBottom: '8px',
                                fontSize: '0.875rem',
                              },
                            }}
                          />
                        </Grid.Col>
                      </Grid>

                      <Group justify="flex-end" mt={32}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            color={isDark ? 'blue.4' : 'blue.6'}
                            radius="md"
                            size="md"
                            loading={isSubmitting}
                            leftSection={<IconSend size={16} />}
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              height: '42px',
                              padding: '0 24px',
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Group>
                    </form>
                  </Box>
                </motion.div>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
} 