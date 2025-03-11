'use client'
import { Container, Title, Text, Card, Group, Box, Stack, Button, Badge, Grid, List, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCheck, IconArrowRight, IconDeviceLaptop, IconBrandReact, IconDatabase, IconCloud, IconShield, IconRocket } from '@tabler/icons-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    title: "WebFlow CMS",
    category: "Content Management",
    description: "A powerful and flexible content management system built for modern web applications.",
    longDescription: "Our WebFlow CMS is designed to empower content creators and developers alike. With its intuitive interface and powerful features, you can create, manage, and publish content effortlessly while maintaining complete control over your digital experience.",
    features: [
      "Intuitive drag-and-drop interface",
      "Custom workflows and permissions",
      "Advanced content modeling",
      "Real-time collaboration",
      "Version control and rollback",
      "API-first architecture"
    ],
    benefits: [
      "Reduce development time by 50%",
      "Improve content team productivity",
      "Scale your content operations",
      "Maintain brand consistency",
      "Enhance security and compliance",
      "Future-proof your content strategy"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940",
    icon: IconDeviceLaptop,
    gradient: { from: '#FF6B6B', to: '#FFA07A' },
    pricing: {
      monthly: 49,
      yearly: 490,
      features: [
        "Unlimited users",
        "Custom workflows",
        "API access",
        "Premium support",
        "Advanced analytics",
        "Custom integrations"
      ]
    }
  },
  // ... other products with similar structure
];

export default function ProductPage() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const params = useParams();
  const router = useRouter();
  
  const product = products.find(p => p.id === Number(params.id)) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

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
          <Grid gutter={60}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  variant="gradient"
                  gradient={{ from: product.gradient.from, to: product.gradient.to }}
                  size="lg"
                  mb="xl"
                >
                  {product.category}
                </Badge>
                
                <Title
                  order={1}
                  size={56}
                  style={{
                    fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                    letterSpacing: '-1px',
                  }}
                  mb="xl"
                >
                  {product.title}
                </Title>

                <Text
                  size="xl"
                  c="dimmed"
                  mb={40}
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    lineHeight: 1.8,
                  }}
                >
                  {product.longDescription}
                </Text>

                <Group gap="md">
                  <Button
                    size="lg"
                    variant="gradient"
                    gradient={{ from: product.gradient.from, to: product.gradient.to }}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="light"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    View Demo
                  </Button>
                </Group>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box style={{ position: 'relative', height: 400 }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: '20px',
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
                      borderRadius: '20px',
                      mixBlendMode: 'overlay',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Features Section */}
          <Box mt={120}>
            <Grid gutter={60}>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Title
                    order={2}
                    size={36}
                    mb="xl"
                    style={{
                      fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    Key Features
                  </Title>
                  <List
                    spacing="md"
                    size="lg"
                    icon={
                      <Box
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: `linear-gradient(45deg, ${product.gradient.from}, ${product.gradient.to})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconCheck size={14} color="white" />
                      </Box>
                    }
                  >
                    {product.features.map((feature, index) => (
                      <List.Item
                        key={index}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {feature}
                      </List.Item>
                    ))}
                  </List>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Title
                    order={2}
                    size={36}
                    mb="xl"
                    style={{
                      fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    Benefits
                  </Title>
                  <List
                    spacing="md"
                    size="lg"
                    icon={
                      <Box
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: `linear-gradient(45deg, ${product.gradient.from}, ${product.gradient.to})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconCheck size={14} color="white" />
                      </Box>
                    }
                  >
                    {product.benefits.map((benefit, index) => (
                      <List.Item
                        key={index}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {benefit}
                      </List.Item>
                    ))}
                  </List>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Pricing Section */}
          <Box mt={120}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                padding="xl"
                radius="lg"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Grid gutter={60}>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title
                      order={2}
                      size={36}
                      mb="xl"
                      style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      Pricing
                    </Title>
                    <Text
                      size="xl"
                      mb="xl"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      Choose the plan that works best for your business
                    </Text>
                    <Group align="flex-end" mb="xl">
                      <Text
                        fz={48}
                        fw={700}
                        variant="gradient"
                        gradient={{ from: product.gradient.from, to: product.gradient.to }}
                        style={{
                          fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        ${product.pricing.monthly}
                      </Text>
                      <Text
                        size="lg"
                        c="dimmed"
                        mb={8}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        /month
                      </Text>
                    </Group>
                    <Button
                      fullWidth
                      size="lg"
                      variant="gradient"
                      gradient={{ from: product.gradient.from, to: product.gradient.to }}
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      Get Started
                    </Button>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <List
                      spacing="md"
                      size="lg"
                      icon={
                        <Box
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: `linear-gradient(45deg, ${product.gradient.from}, ${product.gradient.to})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconCheck size={14} color="white" />
                        </Box>
                      }
                    >
                      {product.pricing.features.map((feature, index) => (
                        <List.Item
                          key={index}
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          {feature}
                        </List.Item>
                      ))}
                    </List>
                  </Grid.Col>
                </Grid>
              </Card>
            </motion.div>
          </Box>

          {/* Related Products */}
          <Box mt={120}>
            <Title
              order={2}
              size={36}
              ta="center"
              mb={60}
              style={{
                fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
              }}
            >
              Related Products
            </Title>
            <Grid>
              {relatedProducts.map((relatedProduct, index) => (
                <Grid.Col key={relatedProduct.id} span={{ base: 12, sm: 6, md: 4 }}>
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
                        cursor: 'pointer',
                      }}
                      component={motion.div}
                      whileHover={{ 
                        translateY: -5,
                        boxShadow: isDark 
                          ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                          : '0 20px 40px rgba(0, 0, 0, 0.1)',
                      }}
                      onClick={() => router.push(`/products/${relatedProduct.id}`)}
                    >
                      <Group mb="md">
                        <Box
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `linear-gradient(45deg, ${relatedProduct.gradient.from}, ${relatedProduct.gradient.to})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <relatedProduct.icon size={24} color="white" />
                        </Box>
                        <Badge
                          variant="gradient"
                          gradient={{ from: relatedProduct.gradient.from, to: relatedProduct.gradient.to }}
                        >
                          {relatedProduct.category}
                        </Badge>
                      </Group>

                      <Title
                        order={3}
                        mb="sm"
                        style={{
                          fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                          fontSize: '1.5rem',
                        }}
                      >
                        {relatedProduct.title}
                      </Title>

                      <Text
                        size="sm"
                        c="dimmed"
                        mb="xl"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          lineHeight: 1.6,
                        }}
                      >
                        {relatedProduct.description}
                      </Text>

                      <Button
                        variant="light"
                        color="gray"
                        fullWidth
                        rightSection={<IconArrowRight size={16} />}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Learn More
                      </Button>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 