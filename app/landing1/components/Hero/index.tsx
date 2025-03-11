'use client'
import { Container, Title, Text, Button, Group, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <Box py={180} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 50%)',
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
        <Stack align="center" gap="xl" mb={50}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title
              order={1}
              size={64}
              ta="center"
              style={{
                fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                letterSpacing: '-2px',
                lineHeight: 1.1,
                maxWidth: '800px',
              }}
            >
              Transform Your Digital
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
                Presence with Us
              </Text>
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text
              size="xl"
              ta="center"
              c="dimmed"
              maw={600}
              mx="auto"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                lineHeight: 1.6,
              }}
            >
              We help businesses grow by crafting amazing web experiences. Our team of experts combines creativity and technology to deliver outstanding results.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Group gap="md">
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
                Get Started
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
                Learn More
              </Button>
            </Group>
          </motion.div>
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Box style={{ position: 'relative', height: 400 }}>
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940"
              alt="Modern office workspace"
              fill
              style={{ 
                objectFit: 'cover',
                borderRadius: '24px',
              }}
            />
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.2), rgba(14, 165, 233, 0.2))',
                borderRadius: '24px',
                mixBlendMode: 'overlay',
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 