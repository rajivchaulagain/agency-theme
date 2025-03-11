'use client'
import { Container, Title, Text, Button, Group, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function CTA() {
  return (
    <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle at 70% 50%, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 50%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            style={{
              background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.05), rgba(14, 165, 233, 0.05))',
              border: '1px solid rgba(37, 99, 235, 0.1)',
              borderRadius: '24px',
              padding: '60px',
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

            <Box style={{ position: 'relative', zIndex: 1 }}>
              <Title
                order={2}
                size={48}
                ta="center"
                mb="xl"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                }}
              >
                Ready to Transform Your
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                  inherit
                  style={{ 
                    fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                    display: 'block',
                  }}
                >
                  Digital Presence?
                </Text>
              </Title>

              <Text
                size="xl"
                ta="center"
                c="dimmed"
                maw={600}
                mx="auto"
                mb={40}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                Lets work together to create something extraordinary. Our team is ready to help you achieve your digital goals.
              </Text>

              <Group justify="center" gap="md">
                <Button
                  size="xl"
                  variant="gradient"
                  gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                  radius="xl"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    padding: '0 48px',
                  }}
                >
                  Get Started Now
                </Button>
                <Button
                  size="xl"
                  variant="light"
                  radius="xl"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    padding: '0 48px',
                  }}
                >
                  Schedule a Call
                </Button>
              </Group>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 