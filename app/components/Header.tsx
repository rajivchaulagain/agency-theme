'use client'
import { useState, useEffect } from 'react';
import { Container, Group, Button, Text, Box, Burger, Drawer, ScrollArea, UnstyledButton, rem, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IconChevronDown, IconSun, IconMoon, IconRocket, IconArrowUpRight } from '@tabler/icons-react';

const mainLinks = [
  {
    link: '#',
    label: 'Pages',
    links: [
      { link: '/landing1', label: 'Landing 1' },
      { link: '/landing2', label: 'Landing 2' },
    ],
  },
  { link: '/services', label: 'Services' },
  { link: '/blog', label: 'Blog' },
  { link: '/about', label: 'About' },
];

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

  const mainItems = mainLinks.map((item) => {
    if (item.links) {
      return (
        <Box
          key={item.label}
          onMouseEnter={() => setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
          style={{ position: 'relative' }}
        >
          <UnstyledButton
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: activeDropdown === item.label
                ? isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)'
                : 'transparent',
            }}
          >
            <Group gap={5}>
              <Text
                size="sm"
                fw={600}
                c={isDark ? "gray.0" : "dark"}
                style={{
                  transition: 'all 0.3s ease',
                  opacity: activeDropdown === item.label ? 1 : 0.8,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {item.label}
              </Text>
              <IconChevronDown
                size={16}
                style={{
                  transition: 'transform 0.3s ease',
                  transform: activeDropdown === item.label ? 'rotate(180deg)' : 'none',
                }}
                opacity={0.5}
              />
            </Group>
          </UnstyledButton>

          <AnimatePresence>
            {activeDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: rem(280),
                  backgroundColor: isDark ? '#25262b' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: '16px',
                  padding: '12px',
                  boxShadow: isDark
                    ? '0 10px 40px rgba(0, 0, 0, 0.4)'
                    : '0 10px 40px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 1000,
                }}
              >
                {item.links.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.link}
                    style={{ textDecoration: 'none' }}
                  >
                    <UnstyledButton
                      style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        ':hover': {
                          backgroundColor: isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.03)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <Text
                        size="sm"
                        c={isDark ? "gray.0" : "dark"}
                        style={{
                          transition: 'opacity 0.2s ease',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {subItem.label}
                      </Text>
                      <IconArrowUpRight size={16} opacity={0.5} />
                    </UnstyledButton>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.link}
        style={{ textDecoration: 'none' }}
      >
        <motion.div whileHover={{ y: -2 }} style={{ position: 'relative' }}>
          <UnstyledButton
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
            }}
          >
            <Text
              size="sm"
              fw={600}
              c={isDark ? "gray.0" : "dark"}
              style={{
                opacity: 0.8,
                transition: 'opacity 0.3s ease',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              {item.label}
            </Text>
          </UnstyledButton>
          <motion.div
            style={{
              position: 'absolute',
              bottom: 4,
              left: '50%',
              width: '0%',
              height: '2px',
              background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
              translateX: '-50%',
            }}
            whileHover={{
              width: '40%',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    );
  });

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
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(45deg, #2563eb15, #0ea5e915)',
                padding: '12px 20px',
                borderRadius: '16px',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
                  opacity: 0.5,
                  mixBlendMode: 'overlay',
                }}
              />
              <Link href="/" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                <Group gap="xs">
                  <Box
                    style={{
                      background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                      padding: '10px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)',
                    }}
                  >
                    <IconRocket size={24} color="white" />
                  </Box>
                  <Text
                    size="xl"
                    fw={800}
                    variant="gradient"
                    gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                    style={{
                      fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Agency
                  </Text>
                </Group>
              </Link>
            </motion.div>

            <Group gap={5} visibleFrom="xs">
              {mainItems}
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
                    component={Link}
                    href='/contact'
                    gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                    radius="xl"
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
                {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="gradient"
                    gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                    radius="xl"
                    style={{
                      height: '42px',
                      padding: '0 24px',
                      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    Sign up
                  </Button>
                </motion.div> */}
              </Group>
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

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
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
                        onClick={() => setDrawerOpened(false)}
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
                    onClick={() => setDrawerOpened(false)}
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
                component={Link}
                href='/contact'
                fullWidth
                variant="light"
                radius="xl"
                mb="sm"
                style={{
                  height: '42px',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                Contact Us
              </Button>
              {/* <Button 
                fullWidth 
                variant="gradient" 
                gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                radius="xl"
                style={{
                  height: '42px',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                Sign up
              </Button> */}
            </Box>
          </Box>
        </ScrollArea>
      </Drawer>
    </Box>
  );
} 