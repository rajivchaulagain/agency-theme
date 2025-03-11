'use client'
import { useState } from 'react';
import { Group, ActionIcon, Button } from '@mantine/core';
import { IconSun, IconMoon, IconMessage } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { ContactForm } from '../ContactForm';

interface UserMenuProps {
  isDark: boolean;
  toggleColorScheme: () => void;
}

export function UserMenu({ isDark, toggleColorScheme }: UserMenuProps) {
  const [contactFormOpened, setContactFormOpened] = useState(false);

  return (
    <>
      <Group ml="xl" gap="xs">
        <ActionIcon
          variant="light"
          size="lg"
          radius="xl"
          aria-label="Toggle color scheme"
          onClick={() => toggleColorScheme()}
          style={{
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            width: '42px',
            height: '42px',
          }}
        >
          {isDark ? <IconSun size="1.2rem" /> : <IconMoon size="1.2rem" />}
        </ActionIcon>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            variant="gradient" 
            gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
            radius="xl"
            leftSection={<IconMessage size="1.2rem" />}
            onClick={() => setContactFormOpened(true)}
            style={{
              height: '42px',
              padding: '0 24px',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </Group>

      <ContactForm
        opened={contactFormOpened}
        onClose={() => setContactFormOpened(false)}
        isDark={isDark}
      />
    </>
  );
} 