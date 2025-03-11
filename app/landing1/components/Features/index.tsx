'use client'
import { Container, Title, Text, SimpleGrid, Card, Group, Box } from '@mantine/core';
import { IconBrush, IconCode, IconChartBar, IconBulb } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: IconBrush,
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive interfaces that users love to interact with.',
  },
  {
    icon: IconCode,
    title: 'Web Development',
    description: 'Build fast, responsive, and scalable web applications using modern technologies.',
  },
  {
    icon: IconChartBar,
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven marketing strategies and campaigns.',
  },
  {
    icon: IconBulb,
    title: 'Innovation',
    description: 'Transform ideas into reality with cutting-edge solutions and approaches.',
  },
];

export function Features() {
  return (
    <Box py={100}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title
            order={2}
            size={48}
            ta="center"
            mb={50}
            style={{
              fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
              letterSpacing: '-1px',
            }}
          >
            What We
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
              inherit
              ml={10}
            >
              Offer
            </Text>
          </Title>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                padding="xl"
                radius="lg"
                style={{
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.03), rgba(14, 165, 233, 0.03))',
                  border: '1px solid rgba(37, 99, 235, 0.1)',
                }}
              >
                <Group mb="md">
                  <Box
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <feature.icon size={24} color="white" />
                  </Box>
                </Group>

                <Title
                  order={3}
                  size="h4"
                  mb="sm"
                  style={{
                    fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  }}
                >
                  {feature.title}
                </Title>

                <Text
                  size="lg"
                  c="dimmed"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 