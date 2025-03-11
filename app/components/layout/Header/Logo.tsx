'use client'
import { Group, Box, Text } from '@mantine/core';
import { IconRocket } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Logo({ isDark }: { isDark: boolean }) {
  return (
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
  );
} 