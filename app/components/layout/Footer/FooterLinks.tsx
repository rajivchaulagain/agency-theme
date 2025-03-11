'use client'
import { Grid, Stack, Text } from '@mantine/core';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', link: '#' },
      { label: 'Careers', link: '#' },
      { label: 'Contact', link: '#' },
      { label: 'Blog', link: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', link: '#' },
      { label: 'UI/UX Design', link: '#' },
      { label: 'Digital Marketing', link: '#' },
      { label: 'Consulting', link: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', link: '#' },
      { label: 'Terms of Service', link: '#' },
      { label: 'Cookie Policy', link: '#' },
    ],
  },
];

export function FooterLinks() {
  return (
    <>
      {footerLinks.map((group) => (
        <Grid.Col key={group.title} span={{ base: 12, sm: 6, md: 3 }}>
          <Stack>
            <Text size="sm" fw={500} c="gray.0">
              {group.title}
            </Text>
            <Stack gap="xs">
              {group.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.link}
                  style={{ textDecoration: 'none' }}
                  whileHover={{ x: 5 }}
                >
                  <Text size="sm" c="dimmed">
                    {link.label}
                  </Text>
                </motion.a>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      ))}
    </>
  );
} 