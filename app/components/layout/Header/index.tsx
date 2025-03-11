'use client'
import { useState, useEffect } from 'react';
import { Container, Group, Box, Burger, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Box component="header" style={{ 
      borderBottom: scrolled 
        ? `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}` 
        : 'none',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      backgroundColor: scrolled
        ? isDark 
          ? 'rgba(26, 27, 30, 0.9)' 
          : 'rgba(255, 255, 255, 0.9)'
        : 'transparent',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
    }}>
      <Container size="xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Group justify="space-between" h={90}>
            <Logo isDark={isDark} />

            <Group gap={5} visibleFrom="xs">
              <Navigation 
                isDark={isDark}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <UserMenu isDark={isDark} toggleColorScheme={toggleColorScheme} />
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={() => setDrawerOpened(true)}
              hiddenFrom="xs"
              color={isDark ? "white" : "black"}
            />
          </Group>
        </motion.div>
      </Container>

      <MobileMenu 
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        isDark={isDark}
        toggleColorScheme={toggleColorScheme}
      />
    </Box>
  );
} 