'use client'
import { Container, Group, ActionIcon, Text, Stack, Grid, Box } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
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

export function Footer() {
  return (
    <Box component="footer" bg="dark.7" py={50}>
      <Container size="lg">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <Stack>
                <Text size="xl" fw={700} c="gray.0">
                  Agency
                </Text>
                <Text size="sm" c="dimmed" maw={200}>
                  Creating digital experiences that transform businesses and inspire innovation.
                </Text>
                <Group gap="xs" mt="md">
                  {[IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin].map(
                    (Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ActionIcon size="lg" variant="subtle" color="gray">
                          <Icon size={18} />
                        </ActionIcon>
                      </motion.div>
                    )
                  )}
                </Group>
              </Stack>
            </Grid.Col>

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
          </Grid>

          <Text c="dimmed" size="sm" ta="center" mt={50}>
            © 2024 Agency. All rights reserved.
          </Text>
        </motion.div>
      </Container>
    </Box>
  );
} 