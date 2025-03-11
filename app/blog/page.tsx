'use client'
import { Container, Title, Text, Grid, Card, Badge, Input, Box, useMantineColorScheme, SimpleGrid, Group, Stack, Avatar, Button } from '@mantine/core';
import { IconSearch, IconArrowRight, IconCalendar, IconUser, IconClock } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI-powered tools to WebAssembly and edge computing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940",
    category: "Development",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    date: "Feb 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering UI/UX: Essential Principles for Modern Design",
    excerpt: "Learn the fundamental principles of UI/UX design that will help you create more engaging and user-friendly digital experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940",
    category: "Design",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
    date: "Feb 12, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Discover effective digital marketing strategies that will help your business thrive in the ever-evolving digital landscape.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940",
    category: "Marketing",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
    },
    date: "Feb 10, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "A comprehensive guide to building scalable applications using microservices, containers, and cloud-native technologies.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940",
    category: "Development",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    date: "Feb 8, 2024",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "The Impact of AI on Creative Design",
    excerpt: "Explore how artificial intelligence is transforming the creative design process and what it means for designers.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2940",
    category: "Design",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    date: "Feb 5, 2024",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead of the competition with these proven SEO strategies and best practices for better search engine rankings.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940",
    category: "Marketing",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
    },
    date: "Feb 3, 2024",
    readTime: "5 min read"
  }
];

const categories = [
  "All", "Development", "Design", "Marketing", "Technology", "Business"
];

export default function BlogPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Box style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header />

        {/* Hero Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-5%',
              width: '120%',
              height: '120%',
              background: isDark
                ? 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 50%)'
                : 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 50%)',
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

          <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
            <Stack align="center" mb={60}>
              <Text 
                tt="uppercase"
                fw={700}
                variant="gradient"
                gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                style={{ 
                  letterSpacing: '3px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                Our Blog
              </Text>
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
                Insights & Stories from
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                  inherit
                  style={{ 
                    fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                    display: 'block',
                  }}
                >
                  Our Digital Journey
                </Text>
              </Title>
            </Stack>

            {/* Search and Categories */}
            <Stack gap="xl" mb={60}>
              <Input
                placeholder="Search articles..."
                size="lg"
                radius="xl"
                leftSection={<IconSearch size={20} />}
                styles={{
                  input: {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  },
                }}
              />

              <Group justify="center" gap="md">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    size="lg"
                    radius="xl"
                    variant={index === 0 ? "gradient" : "outline"}
                    gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                    style={{
                      cursor: 'pointer',
                      padding: '0 20px',
                      height: '36px',
                      fontSize: '14px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    {category}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Container>
        </Box>

        {/* Blog Posts Grid */}
        <Box py={60}>
          <Container size="xl">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    padding={0}
                    radius="lg"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    <Card.Section>
                      <Box style={{ position: 'relative', height: 240 }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ 
                            objectFit: 'cover',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(192, 132, 252, 0.2))',
                            mixBlendMode: 'overlay',
                          }}
                        />
                        <Badge
                          variant="gradient"
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          {post.category}
                        </Badge>
                      </Box>
                    </Card.Section>

                    <Stack p="xl" gap="md">
                      <Title
                        order={3}
                        style={{
                          fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                          fontSize: '1.5rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {post.title}
                      </Title>

                      <Text
                        size="sm"
                        c="dimmed"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          lineHeight: 1.6,
                        }}
                      >
                        {post.excerpt}
                      </Text>

                      <Group gap="md">
                        <Group gap="xs">
                          <Avatar src={post.author.avatar} radius="xl" size={24} />
                          <Text size="sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {post.author.name}
                          </Text>
                        </Group>
                        <Text size="sm" c="dimmed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>•</Text>
                        <Group gap="xs">
                          <IconCalendar size={16} />
                          <Text size="sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {post.date}
                          </Text>
                        </Group>
                        <Text size="sm" c="dimmed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>•</Text>
                        <Group gap="xs">
                          <IconClock size={16} />
                          <Text size="sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {post.readTime}
                          </Text>
                        </Group>
                      </Group>

                      <Button
                        variant="light"
                        color="gray"
                        fullWidth
                        rightSection={<IconArrowRight size={16} />}
                        style={{
                          marginTop: '1rem',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Read More
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>

            <Group justify="center" mt={60}>
              <Button
                size="xl"
                variant="gradient"
                gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                radius="xl"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                Load More Articles
              </Button>
            </Group>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
} 