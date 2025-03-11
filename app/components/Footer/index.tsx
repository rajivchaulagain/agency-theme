'use client'
import { Container, Grid, Text, Image, Stack, Group, Button, TextInput, Box, ActionIcon, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandDribbble, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
];

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Help Center', href: '/help' },
  { label: 'Community', href: '/community' },
  { label: 'Resources', href: '/resources' },
];

const socialLinks = [
  { icon: IconBrandTwitter, href: 'https://twitter.com' },
  { icon: IconBrandLinkedin, href: 'https://linkedin.com' },
  { icon: IconBrandInstagram, href: 'https://instagram.com' },
  { icon: IconBrandGithub, href: 'https://github.com' },
  { icon: IconBrandDribbble, href: 'https://dribbble.com' },
];

export function Footer() {
  return (
    <Box
      component="footer"
      style={{
        background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
        borderTop: '1px solid #e9ecef',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 0% 0%, rgba(51, 154, 240, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 100% 100%, rgba(51, 154, 240, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container size="lg" py={64}>
        <Grid gutter={64}>
          {/* Company Info & Newsletter */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap={32}>
              <div>
                <Box mb={24}>
                  <Image src="/logo.svg" alt="Logo" style={{ height: '32px' }} />
                </Box>
                <Text
                  size="sm"
                  c="gray.7"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    lineHeight: 1.7,
                    maxWidth: '400px',
                  }}
                >
                  We are on a mission to help developers build amazing products faster. Join our community of over 100,000 developers.
                </Text>
              </div>

              <div>
                <Text
                  fw={600}
                  mb="md"
                  style={{ fontFamily: 'Cal Sans, sans-serif' }}
                >
                  Subscribe to our newsletter
                </Text>
                <Group gap="xs">
                  <TextInput
                    placeholder="Enter your email"
                    size="md"
                    radius="md"
                    style={{ flex: 1 }}
                    styles={{
                      input: {
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        backgroundColor: 'white',
                        border: '1px solid #e9ecef',
                        '&:focus': {
                          borderColor: '#339af0',
                        },
                      },
                    }}
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="md"
                      radius="md"
                      rightSection={<IconArrowRight size={16} />}
                      style={{
                        background: 'linear-gradient(135deg, #228be6 0%, #4dabf7 100%)',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                </Group>
              </div>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Grid gutter={32}>
              <Grid.Col span={4}>
                <Stack gap="sm">
                  <Text
                    size="sm"
                    tt="uppercase"
                    fw={600}
                    c="gray.6"
                    mb={8}
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Company
                  </Text>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{ textDecoration: 'none' }}
                    >
                      <Text
                        component="span"
                        size="sm"
                        c="gray.7"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#339af0',
                          },
                        }}
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={4}>
                <Stack gap="sm">
                  <Text
                    size="sm"
                    tt="uppercase"
                    fw={600}
                    c="gray.6"
                    mb={8}
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Product
                  </Text>
                  {productLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{ textDecoration: 'none' }}
                    >
                      <Text
                        component="span"
                        size="sm"
                        c="gray.7"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#339af0',
                          },
                        }}
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span={4}>
                <Stack gap="sm">
                  <Text
                    size="sm"
                    tt="uppercase"
                    fw={600}
                    c="gray.6"
                    mb={8}
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Resources
                  </Text>
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{ textDecoration: 'none' }}
                    >
                      <Text
                        component="span"
                        size="sm"
                        c="gray.7"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#339af0',
                          },
                        }}
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <Divider my={48} />

        <Group justify="space-between" align="center">
          <Text
            size="sm"
            c="gray.6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            © 2024 Your Company. All rights reserved.
          </Text>

          <Group gap="md">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ActionIcon
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="subtle"
                  color="gray"
                  size="lg"
                  radius="md"
                  style={{
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#339af0',
                    },
                  }}
                >
                  <link.icon size={18} />
                </ActionIcon>
              </motion.div>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
} 