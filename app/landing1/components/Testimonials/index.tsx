'use client'
import { Container, Title, Text, Card, Avatar, Group, Box, Stack } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Working with this agency has been transformative for our business. Their attention to detail and innovative approach helped us achieve remarkable results.",
    author: {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    }
  },
  {
    content: "The team's expertise in digital solutions and their commitment to excellence made our project a huge success. Highly recommended!",
    author: {
      name: "Michael Chen",
      position: "CTO, InnovateCo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    }
  },
  {
    content: "Their creative approach and technical skills helped us achieve our goals faster than expected. A truly reliable partner for digital transformation.",
    author: {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthLabs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
    }
  }
];

export function Testimonials() {
  return (
    <Box py={100} style={{ 
      background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.03), rgba(14, 165, 233, 0.03))',
      borderTop: '1px solid rgba(37, 99, 235, 0.1)',
      borderBottom: '1px solid rgba(37, 99, 235, 0.1)',
    }}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Stack align="center" mb={50}>
            <Text
              tt="uppercase"
              fw={700}
              variant="gradient"
              gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
              style={{ 
                letterSpacing: '3px',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              Testimonials
            </Text>
            <Title
              order={2}
              size={48}
              ta="center"
              style={{
                fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                letterSpacing: '-1px',
                maxWidth: '600px',
              }}
            >
              What Our Clients Say About Us
            </Title>
          </Stack>
        </motion.div>

        <Group justify="center" gap={30}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ maxWidth: 400 }}
            >
              <Card
                padding="xl"
                radius="lg"
                style={{
                  background: 'white',
                  border: '1px solid rgba(37, 99, 235, 0.1)',
                }}
              >
                <Stack>
                  <IconQuote 
                    size={32}
                    style={{ 
                      color: '#2563eb',
                      opacity: 0.3,
                    }}
                  />
                  <Text
                    size="lg"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    {testimonial.content}
                  </Text>
                  <Group mt="md">
                    <Avatar src={testimonial.author.avatar} radius="xl" size={48} />
                    <Box>
                      <Text
                        size="sm"
                        fw={600}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {testimonial.author.name}
                      </Text>
                      <Text
                        size="sm"
                        c="dimmed"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {testimonial.author.position}
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Group>
      </Container>
    </Box>
  );
} 