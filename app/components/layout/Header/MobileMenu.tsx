'use client'
import { useState } from 'react';
import { Drawer, ScrollArea, Box, Text, Group, ActionIcon, Button } from '@mantine/core';
import { IconSun, IconMoon, IconMessage } from '@tabler/icons-react';
import Link from 'next/link';
import { ContactForm } from '../ContactForm';

interface MobileMenuProps {
  opened: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleColorScheme: () => void;
}

const mainLinks = [
  {
    link: '#',
    label: 'Pages',
    links: [
      { link: '/landing1', label: 'Landing 1' },
      { link: '/landing2', label: 'Landing 2' },
    ],
  },
  { link: '/products', label: 'Products' },
  { link: '/services', label: 'Services' },
  { link: '/blog', label: 'Blog' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
];

export function MobileMenu({ opened, onClose, isDark, toggleColorScheme }: MobileMenuProps) {
  const [contactFormOpened, setContactFormOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        size="100%"
        padding="md"
        hiddenFrom="xs"
        zIndex={1000000}
        styles={{
          body: {
            background: isDark ? '#1a1b1e' : '#ffffff',
          }
        }}
      >
        <ScrollArea h={`calc(100vh - 60px)`} mx="-md">
          <Box py="sm">
            {mainLinks.map((item) => (
              <Box key={item.label}>
                {item.links ? (
                  <>
                    <Box py="sm" px="md">
                      <Text 
                        size="sm" 
                        fw={600} 
                        c={isDark ? "gray.0" : "dark"}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.label}
                      </Text>
                    </Box>
                    {item.links.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.link}
                        style={{ textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        <Box py="sm" px="md" pl={32}>
                          <Text 
                            size="sm" 
                            c="dimmed"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {subItem.label}
                          </Text>
                        </Box>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.link}
                    style={{ textDecoration: 'none' }}
                    onClick={onClose}
                  >
                    <Box py="sm" px="md">
                      <Text 
                        size="sm" 
                        fw={600} 
                        c={isDark ? "gray.0" : "dark"}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.label}
                      </Text>
                    </Box>
                  </Link>
                )}
              </Box>
            ))}
            <Box py="sm" px="md">
              <Group mb="md">
                <ActionIcon
                  variant="light"
                  size="lg"
                  radius="xl"
                  aria-label="Toggle color scheme"
                  onClick={() => toggleColorScheme()}
                  style={{
                    width: '42px',
                    height: '42px',
                  }}
                >
                  {isDark ? <IconSun size="1.2rem" /> : <IconMoon size="1.2rem" />}
                </ActionIcon>
              </Group>
              <Button 
                fullWidth 
                variant="gradient" 
                gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                radius="xl"
                leftSection={<IconMessage size="1.2rem" />}
                onClick={() => {
                  setContactFormOpened(true);
                  onClose();
                }}
                style={{
                  height: '42px',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </ScrollArea>
      </Drawer>

      <ContactForm
        opened={contactFormOpened}
        onClose={() => setContactFormOpened(false)}
        isDark={isDark}
      />
    </>
  );
} 