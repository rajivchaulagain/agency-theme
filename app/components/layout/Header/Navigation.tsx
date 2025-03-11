'use client'
import { Group, Text, Box, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconArrowUpRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { rem } from '@mantine/core';

interface NavigationProps {
  isDark: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
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

export function Navigation({ isDark, activeDropdown, setActiveDropdown }: NavigationProps) {
  return (
    <Group gap={5}>
      {mainLinks.map((item) => {
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
      })}
    </Group>
  );
} 