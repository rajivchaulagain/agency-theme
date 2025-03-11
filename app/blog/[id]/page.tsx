'use client'
import { Container, Title, Text, Grid, Card, Badge, Box, useMantineColorScheme, Group, Stack, Avatar, Button, List, Divider } from '@mantine/core';
import { IconCalendar, IconClock, IconShare, IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Image from 'next/image';

// This would typically come from an API or database
const post = {
  id: 1,
  title: "The Future of Web Development: Trends to Watch in 2024",
  excerpt: "Explore the latest trends shaping the future of web development, from AI-powered tools to WebAssembly and edge computing.",
  content: `
    <h2>Introduction</h2>
    <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move further into 2024, several key trends are shaping the future of how we build and deploy web applications.</p>

    <h2>1. AI-Powered Development Tools</h2>
    <p>Artificial Intelligence is revolutionizing the way developers work. From code completion to automated testing, AI tools are becoming an integral part of the development workflow. These tools not only increase productivity but also help maintain code quality and reduce errors.</p>

    <h2>2. WebAssembly and Edge Computing</h2>
    <p>WebAssembly continues to gain traction, enabling high-performance applications to run directly in the browser. Combined with edge computing, this technology is pushing the boundaries of what's possible in web applications.</p>

    <h2>3. Serverless Architecture</h2>
    <p>The adoption of serverless architecture is growing, offering developers a way to build and run applications without managing infrastructure. This approach provides better scalability and cost-effectiveness.</p>

    <h2>4. Progressive Web Apps (PWAs)</h2>
    <p>PWAs are becoming the standard for delivering app-like experiences through the web browser. They offer offline functionality, push notifications, and native-like performance while maintaining the accessibility of web applications.</p>

    <h2>Conclusion</h2>
    <p>As these trends continue to evolve, developers need to stay informed and adapt their skills accordingly. The future of web development looks promising, with new technologies making it possible to create more powerful and user-friendly applications.</p>
  `,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940",
  category: "Development",
  author: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    bio: "Senior Web Developer with 10+ years of experience in building scalable web applications."
  },
  date: "Feb 15, 2024",
  readTime: "5 min read"
};

const relatedPosts = [
  {
    id: 2,
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
    id: 3,
    title: "The Impact of AI on Web Development",
    excerpt: "Explore how artificial intelligence is transforming the web development process and what it means for developers.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2940",
    category: "Technology",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    date: "Feb 5, 2024",
    readTime: "6 min read"
  }
];

export default function BlogPostPage() {
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
            <Stack align="center" mb={40}>
              <Badge
                variant="gradient"
                gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                size="lg"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {post.category}
              </Badge>
              <Title 
                order={1}
                size={64}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-2px',
                  lineHeight: 1.1,
                  maxWidth: '900px',
                }}
              >
                {post.title}
              </Title>

              <Group mt="xl">
                <Group gap="xs">
                  <Avatar src={post.author.avatar} radius="xl" size={40} />
                  <Box>
                    <Text fw={500} size="sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {post.author.name}
                    </Text>
                    <Text size="xs" c="dimmed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {post.author.bio}
                    </Text>
                  </Box>
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
            </Stack>

            <Box mt={60} style={{ position: 'relative', height: '500px' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '1rem',
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
                  borderRadius: '1rem',
                  mixBlendMode: 'overlay',
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Content Section */}
        <Box py={60}>
          <Container size="xl">
            <Grid gutter={60}>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Card
                  padding="xl"
                  radius="lg"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="blog-content"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      lineHeight: 1.8,
                    }}
                  />

                  <style jsx global>{`
                    .blog-content h2 {
                      font-family: Cal Sans, Plus Jakarta Sans, sans-serif;
                      font-size: 2rem;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    .blog-content p {
                      margin-bottom: 1.5rem;
                    }
                  `}</style>

                  <Divider my="xl" />

                  <Group justify="space-between">
                    <Text fw={500} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Share this article
                    </Text>
                    <Group gap="md">
                      <IconBrandTwitter style={{ cursor: 'pointer' }} />
                      <IconBrandFacebook style={{ cursor: 'pointer' }} />
                      <IconBrandLinkedin style={{ cursor: 'pointer' }} />
                      <IconShare style={{ cursor: 'pointer' }} />
                    </Group>
                  </Group>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack>
                  <Card
                    padding="xl"
                    radius="lg"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Title order={4} mb="md" style={{ fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif' }}>
                      About the Author
                    </Title>
                    <Group>
                      <Avatar src={post.author.avatar} size="xl" radius="xl" />
                      <Box>
                        <Text fw={500} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {post.author.name}
                        </Text>
                        <Text size="sm" c="dimmed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {post.author.bio}
                        </Text>
                      </Box>
                    </Group>
                  </Card>

                  <Card
                    padding="xl"
                    radius="lg"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Title order={4} mb="xl" style={{ fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif' }}>
                      Related Articles
                    </Title>
                    <Stack gap="lg">
                      {relatedPosts.map((relatedPost) => (
                        <Card
                          key={relatedPost.id}
                          padding={0}
                          radius="md"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                          }}
                        >
                          <Group gap="md" align="flex-start">
                            <Box style={{ position: 'relative', width: '80px', height: '80px' }}>
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                style={{ 
                                  objectFit: 'cover',
                                  borderRadius: '0.5rem',
                                }}
                              />
                            </Box>
                            <Box>
                              <Text 
                                fw={500} 
                                size="sm"
                                style={{ 
                                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                                  lineHeight: 1.4,
                                }}
                              >
                                {relatedPost.title}
                              </Text>
                              <Text 
                                size="xs" 
                                c="dimmed"
                                mt="xs"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                {relatedPost.date}
                              </Text>
                            </Box>
                          </Group>
                        </Card>
                      ))}
                    </Stack>
                  </Card>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
} 