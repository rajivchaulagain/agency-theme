'use client'
import { Container, Grid, Title, Text, Stack, Group, ActionIcon, Button, TextInput, Box, List, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconCheck, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', link: '/features' },
      { label: 'Pricing', link: '/pricing' },
      { label: 'Documentation', link: '/docs' },
      { label: 'Changelog', link: '/changelog' },
      { label: 'Integration', link: '/integration' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', link: '/about' },
      { label: 'Careers', link: '/careers' },
      { label: 'Press Kit', link: '/press' },
      { label: 'Contact', link: '/contact' },
      { label: 'Blog', link: '/blog' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Community', link: '/community' },
      { label: 'Help Center', link: '/help' },
      { label: 'Partners', link: '/partners' },
      { label: 'Status', link: '/status' },
      { label: 'Terms of Service', link: '/terms' }
    ]
  }
];

const features = [
  'Free updates',
  '24/7 Support',
  'Premium resources',
  'Team collaboration'
];

export function Footer() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box 
      component="footer"
      style={{
        background: isDark 
          ? 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.98))'
          : 'linear-gradient(to bottom, rgba(248, 250, 252, 0.95), rgba(226, 232, 240, 0.98))',
        backdropFilter: 'blur(24px)',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '50%',
          height: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(192, 132, 252, 0.1) 30%, rgba(99, 102, 241, 0) 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(192, 132, 252, 0.05) 30%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container size="xl" py={100}>
        <Grid>
          {/* Enhanced Company Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box>
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={140}
                    height={45}
                    style={{ marginBottom: '1.5rem' }}
                  />
                  <Text
                    size="sm"
                    c={isDark ? 'gray.4' : 'gray.7'}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      maxWidth: '320px',
                      lineHeight: 1.7,
                      letterSpacing: '0.2px',
                    }}
                  >
                    Transform your digital presence with our innovative solutions. We help businesses thrive in the digital age with cutting-edge technology.
                  </Text>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box>
                  <Text
                    size="sm"
                    fw={700}
                    mb="md"
                    style={{
                      fontFamily: 'Cal Sans, sans-serif',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Why Choose Us
                  </Text>
                  <List
                    spacing={12}
                    size="sm"
                    icon={
                      <ThemeIcon
                        size={24}
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                        style={{ 
                          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                          transform: 'translateY(-1px)',
                        }}
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <List.Item
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontWeight: 500,
                          }}
                        >
                          {feature}
                        </List.Item>
                      </motion.div>
                    ))}
                  </List>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box>
                  <Text
                    size="sm"
                    fw={700}
                    mb="md"
                    style={{
                      fontFamily: 'Cal Sans, sans-serif',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Connect With Us
                  </Text>
                  <Group gap="md">
                    {[
                      { icon: IconBrandTwitter, label: 'Twitter' },
                      { icon: IconBrandYoutube, label: 'YouTube' },
                      { icon: IconBrandInstagram, label: 'Instagram' },
                      { icon: IconBrandLinkedin, label: 'LinkedIn' }
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <ActionIcon
                          size="xl"
                          variant="gradient"
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          aria-label={social.label}
                          style={{
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <social.icon style={{ width: '60%', height: '60%' }} stroke={1.5} />
                        </ActionIcon>
                      </motion.div>
                    ))}
                  </Group>
                </Box>
              </motion.div>
            </Stack>
          </Grid.Col>

          {/* Enhanced Links */}
          {footerLinks.map((group, groupIndex) => (
            <Grid.Col key={group.title} span={{ base: 12, sm: 4, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
              >
                <Stack>
                  <Text
                    size="sm"
                    fw={700}
                    style={{
                      fontFamily: 'Cal Sans, sans-serif',
                      letterSpacing: '0.3px',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {group.title}
                  </Text>
                  <Stack gap="xl">
                    {group.links.map((link, index) => (
                      <motion.div
                        key={link.label}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={link.link}
                          style={{ 
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Text
                            size="sm"
                            c={isDark ? 'gray.4' : 'gray.7'}
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              transition: 'all 0.2s ease',
                              ':hover': {
                                color: isDark ? '#fff' : '#000',
                              },
                            }}
                          >
                            {link.label}
                          </Text>
                          <IconArrowUpRight
                            size={14}
                            style={{
                              opacity: 0,
                              transition: 'all 0.2s ease',
                              transform: 'translateX(-4px)',
                            }}
                            className="link-arrow"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Grid.Col>
          ))}

          {/* Enhanced Newsletter */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Stack>
                <Box>
                  <Text
                    size="sm"
                    fw={700}
                    mb="xs"
                    style={{
                      fontFamily: 'Cal Sans, sans-serif',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Stay in the Loop
                  </Text>
                  <Text
                    size="sm"
                    c={isDark ? 'gray.4' : 'gray.7'}
                    mb="xl"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      lineHeight: 1.7,
                      letterSpacing: '0.2px',
                      maxWidth: '360px',
                    }}
                  >
                    Subscribe to our newsletter for exclusive updates, industry insights, and special offers delivered right to your inbox.
                  </Text>
                </Box>

                <Group>
                  <TextInput
                    placeholder="Enter your email"
                    size="lg"
                    radius="xl"
                    style={{ 
                      flex: 1,
                      '& input': {
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      },
                    }}
                    rightSection={
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="gradient"
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          radius="xl"
                          size="md"
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            padding: '0 24px',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                          }}
                        >
                          Subscribe
                        </Button>
                      </motion.div>
                    }
                    rightSectionWidth={120}
                  />
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Enhanced Bottom Bar */}
        <Box
          mt={100}
          pt={40}
          style={{
            borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Group justify="space-between" align="center">
              <Text
                size="sm"
                c={isDark ? 'gray.4' : 'gray.7'}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.2px',
                }}
              >
                © 2024 Your Company. All rights reserved.
              </Text>
              <Group gap="xl">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, index) => (
                  <motion.div
                    key={text}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Text
                        size="sm"
                        c={isDark ? 'gray.4' : 'gray.7'}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          letterSpacing: '0.2px',
                          transition: 'all 0.2s ease',
                          ':hover': {
                            color: isDark ? '#fff' : '#000',
                          },
                        }}
                      >
                        {text}
                      </Text>
                    </Link>
                  </motion.div>
                ))}
              </Group>
            </Group>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 