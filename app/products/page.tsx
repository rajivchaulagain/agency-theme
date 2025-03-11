'use client'
import { Container, Title, Text, Card, Group, Box, Stack, Button, Badge, Grid, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight, IconDeviceLaptop, IconBrandReact, IconDatabase, IconCloud, IconShield, IconRocket } from '@tabler/icons-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    title: "WebFlow CMS",
    category: "Content Management",
    description: "A powerful and flexible content management system built for modern web applications.",
    features: [
      "Intuitive drag-and-drop interface",
      "Custom workflows and permissions",
      "Advanced content modeling",
      "Real-time collaboration",
      "Version control and rollback",
      "API-first architecture"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940",
    icon: IconDeviceLaptop,
    gradient: { from: '#FF6B6B', to: '#FFA07A' }
  },
  {
    id: 2,
    title: "React Framework",
    category: "Development",
    description: "Enterprise-grade React framework with built-in optimization and developer tools.",
    features: [
      "Server-side rendering",
      "Automatic code splitting",
      "Static site generation",
      "Developer tooling",
      "Performance optimization",
      "Component library"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940",
    icon: IconBrandReact,
    gradient: { from: '#4ECDC4', to: '#45B7AF' }
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    category: "Infrastructure",
    description: "Scalable cloud infrastructure solutions designed for modern applications.",
    features: [
      "Auto-scaling capabilities",
      "Load balancing",
      "Disaster recovery",
      "Multi-region deployment",
      "Performance monitoring",
      "Cost optimization"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940",
    icon: IconCloud,
    gradient: { from: '#A78BFA', to: '#8B5CF6' }
  },
  {
    id: 4,
    title: "Database Solutions",
    category: "Data Management",
    description: "High-performance database solutions for enterprise applications.",
    features: [
      "Distributed architecture",
      "Real-time replication",
      "Automated backups",
      "Data encryption",
      "Query optimization",
      "Scalable storage"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2940",
    icon: IconDatabase,
    gradient: { from: '#3B82F6', to: '#2563EB' }
  },
  {
    id: 5,
    title: "Security Suite",
    category: "Security",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: [
      "Threat detection",
      "Access control",
      "Data encryption",
      "Security auditing",
      "Compliance management",
      "Incident response"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940",
    icon: IconShield,
    gradient: { from: '#F59E0B', to: '#D97706' }
  },
  {
    id: 6,
    title: "DevOps Platform",
    category: "Development",
    description: "Streamline your development workflow with our integrated DevOps platform.",
    features: [
      "CI/CD pipelines",
      "Container orchestration",
      "Infrastructure as code",
      "Monitoring and logging",
      "Release management",
      "Team collaboration"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940",
    icon: IconRocket,
    gradient: { from: '#EC4899', to: '#BE185D' }
  }
];

export default function ProductsPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();

  return (
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
      <Box py={100} style={{ position: 'relative', overflow: 'hidden' }}>
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

        <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" mb={60}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                Our Products
              </Text>
              <Title
                order={1}
                size={48}
                ta="center"
                mt="md"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                  maxWidth: '800px',
                }}
              >
                Innovative Solutions for
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
                  Modern Businesses
                </Text>
              </Title>
              <Text
                size="xl"
                c="dimmed"
                ta="center"
                mt="md"
                maw={600}
                mx="auto"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                Discover our suite of powerful products designed to transform your digital presence
                and streamline your operations.
              </Text>
            </motion.div>
          </Stack>

          <Grid gutter={40}>
            {products.map((product, index) => (
              <Grid.Col key={product.id} span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    padding="xl"
                    radius="lg"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                    component={motion.div}
                    whileHover={{ 
                      translateY: -5,
                      boxShadow: isDark 
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Group mb="md">
                      <Box
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `linear-gradient(45deg, ${product.gradient.from}, ${product.gradient.to})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <product.icon size={24} color="white" />
                      </Box>
                      <Badge
                        variant="gradient"
                        gradient={{ from: product.gradient.from, to: product.gradient.to }}
                      >
                        {product.category}
                      </Badge>
                    </Group>

                    <Title
                      order={3}
                      mb="sm"
                      style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        fontSize: '1.75rem',
                      }}
                    >
                      {product.title}
                    </Title>

                    <Text
                      size="lg"
                      c="dimmed"
                      mb="xl"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      {product.description}
                    </Text>

                    <Box mb="xl" style={{ position: 'relative', height: 200 }}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{ 
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      />
                      <Box
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${product.gradient.from}40, ${product.gradient.to}40)`,
                          borderRadius: '12px',
                          mixBlendMode: 'overlay',
                        }}
                      />
                    </Box>

                    <Stack gap="sm">
                      {product.features.map((feature, idx) => (
                        <Group key={idx} gap="xs">
                          <Box
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: `linear-gradient(45deg, ${product.gradient.from}, ${product.gradient.to})`,
                            }}
                          />
                          <Text size="sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {feature}
                          </Text>
                        </Group>
                      ))}
                    </Stack>

                    <Button
                      variant="light"
                      color="gray"
                      fullWidth
                      mt="xl"
                      rightSection={<IconArrowRight size={16} />}
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 