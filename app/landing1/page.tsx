'use client'
import { Container, Title, Text, Button, Group, Stack, Grid, Card, ThemeIcon, rem, Image, Box, Avatar, useMantineColorScheme } from '@mantine/core';
import {  IconCheck, IconArrowRight, IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

export default function ModernAgencyLanding() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const testimonials = [
    {
      content: "Working with this agency has transformed our digital presence. Their team's expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
    {
      content: "The level of creativity and technical excellence they bring to every project is remarkable. Highly recommended!",
      author: "Michael Chen",
      position: "CTO, InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
      content: "Their team's attention to detail and commitment to delivering exceptional results has helped us achieve our goals.",
      author: "Emily Davis",
      position: "Marketing Director, GrowthLabs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: 99,
      features: [
        "Basic website design",
        "5 pages included",
        "Basic SEO optimization",
        "Mobile responsive",
        "1 month support",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: 199,
      features: [
        "Advanced website design",
        "10 pages included",
        "Advanced SEO optimization",
        "Mobile responsive",
        "Custom animations",
        "3 months support",
        "Analytics integration",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: 399,
      features: [
        "Premium website design",
        "Unlimited pages",
        "Advanced SEO optimization",
        "Mobile responsive",
        "Custom animations",
        "Priority support",
        "Analytics integration",
        "Custom features",
        "API integration",
      ],
      popular: false,
    },
  ];

  const logos = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
    '/logos/logo5.svg',
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
    '/logos/logo5.svg',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <Box style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #1a1b1e 0%, #25262b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header />
        
        {/* Hero Section */}
        <Box py={180} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Enhanced Animated Background Elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-5%',
              width: '120%',
              height: '120%',
              background: isDark
                ? 'radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 50%)'
                : 'radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 50%)',
              filter: 'blur(60px)',
              zIndex: 0,
              willChange: 'transform',
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

          {/* Secondary gradient */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '70%',
              height: '70%',
              background: isDark
                ? 'radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0) 60%)'
                : 'radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 60%)',
              filter: 'blur(60px)',
              zIndex: 0,
              willChange: 'transform',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Noise texture overlay */}
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
              opacity: 0.3,
              mixBlendMode: 'overlay',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
            <Grid gutter={60} align="center">
              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Stack gap="xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                      <Group gap="xs" mb="md">
                        <Box
                          style={{
                            width: '30px',
                            height: '2px',
                            background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                            marginTop: '12px',
                          }}
                        />
                        <Text 
                          size="lg" 
                          tt="uppercase" 
                          fw={800}
                          variant="gradient"
                          gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                          style={{ 
                            letterSpacing: '3px',
                            background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          Next Generation Agency
                        </Text>
                      </Group>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                      <Title order={1} size={rem(72)} c={isDark ? "white" : "#1a1b1e"} lh={1.1} mb="xl" style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        letterSpacing: '-2px',
                      }}>
                        Crafting{' '}
                        <Text
                          component="span"
                          variant="gradient"
                          gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                          inherit
                          style={{ 
                            backgroundSize: '200%',
                            animation: 'gradient 8s linear infinite',
                            textShadow: isDark ? '0 0 40px rgba(37, 99, 235, 0.3)' : '0 0 40px rgba(37, 99, 235, 0.15)',
                          }}
                        >
                          Digital Excellence
                        </Text>{' '}
                        for Modern Brands
                      </Title>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                      <Text size="xl" c={isDark ? "gray.3" : "gray.7"} maw={500} style={{ 
                        fontSize: '1.25rem', 
                        lineHeight: 1.8,
                        letterSpacing: '0.3px',
                        fontWeight: isDark ? 400 : 500,
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}>
                        Transform your brand with our cutting-edge digital solutions. 
                        We combine innovation, strategy, and expertise to create exceptional 
                        experiences that drive growth and inspire success.
                      </Text>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    >
                      <Group mt={40} gap="md">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            size="xl" 
                            variant="gradient" 
                            gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                            radius="xl"
                            px={40}
                            leftSection={<IconArrowUpRight size={20} />}
                            style={{ 
                              backgroundSize: '200%',
                              transition: 'all 0.3s ease',
                              height: '56px',
                              fontSize: '16px',
                              fontWeight: 600,
                              boxShadow: isDark 
                                ? '0 8px 20px rgba(37, 99, 235, 0.3)'
                                : '0 8px 20px rgba(37, 99, 235, 0.25)',
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            Start Your Project
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            size="xl" 
                            variant="outline" 
                            c={isDark ? "gray.0" : "#1a1b1e"}
                            radius="xl"
                            px={40}
                            style={{
                              borderWidth: '2px',
                              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(37, 99, 235, 0.3)',
                              transition: 'all 0.3s ease',
                              height: '56px',
                              fontSize: '16px',
                              fontWeight: 600,
                              backdropFilter: 'blur(10px)',
                              background: isDark 
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(255, 255, 255, 0.8)',
                              boxShadow: isDark 
                                ? 'none'
                                : '0 4px 15px rgba(37, 99, 235, 0.1)',
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            View Our Work
                          </Button>
                        </motion.div>
                      </Group>
                      <Group mt={60} gap={60}>
                        {[
                          { number: '250+', label: 'Projects Completed' },
                          { number: '15+', label: 'Years Experience' },
                          { number: '95%', label: 'Client Satisfaction' }
                        ].map((stat, index) => (
                          <Box key={index}>
                            <Text 
                              size="xl" 
                              fw={800} 
                              variant="gradient"
                              gradient={{ from: '#2563eb', to: '#0ea5e9', deg: 45 }}
                              style={{ 
                                fontSize: '2.5rem',
                                background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: isDark ? 'none' : '0 2px 10px rgba(37, 99, 235, 0.2)',
                                fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                                letterSpacing: '-1px',
                              }}
                            >
                              {stat.number}
                            </Text>
                            <Text 
                              size="sm" 
                              c={isDark ? "gray.4" : "gray.7"} 
                              fw={500} 
                              mt={4}
                              style={{ 
                                fontSize: '1rem',
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                              }}
                            >
                              {stat.label}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    </motion.div>
                  </Stack>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ 
                    position: 'relative',
                    willChange: 'transform',
                  }}
                >
                  {/* Decorative frames */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      right: -20,
                      bottom: -20,
                      border: isDark 
                        ? '2px solid rgba(37, 99, 235, 0.2)'
                        : '2px solid rgba(37, 99, 235, 0.2)',
                      borderRadius: '30px',
                      transform: 'rotate(-3deg)',
                      willChange: 'transform',
                    }}
                    animate={{
                      rotate: [-3, 0, -3],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Box
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '30px',
                      boxShadow: isDark 
                        ? '0 25px 50px rgba(0,0,0,0.5)'
                        : '0 25px 50px rgba(37, 99, 235, 0.15)',
                      willChange: 'transform',
                    }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                      alt="Digital Innovation"
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(1.02)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    {/* Gradient overlay */}
                    <Box
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: isDark
                          ? 'linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(14, 165, 233, 0.3))'
                          : 'linear-gradient(45deg, rgba(37, 99, 235, 0.2), rgba(14, 165, 233, 0.2))',
                        mixBlendMode: 'overlay',
                      }}
                    />
                    {/* Noise texture overlay */}
                    <Box
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
                        opacity: 0.3,
                        mixBlendMode: 'overlay',
                      }}
                    />
                  </Box>

                  {/* Floating elements */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '20%',
                      left: '-10%',
                      background: 'linear-gradient(45deg, #2563eb, #0ea5e9)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)',
                      willChange: 'transform',
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '10%',
                      right: '-5%',
                      background: 'linear-gradient(45deg, #0ea5e9, #2563eb)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      boxShadow: '0 8px 20px rgba(14, 165, 233, 0.2)',
                      willChange: 'transform',
                    }}
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Additional decorative elements */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-15%',
                      width: '120px',
                      height: '120px',
                      borderRadius: '30px',
                      background: 'rgba(37, 99, 235, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      willChange: 'transform',
                    }}
                    animate={{
                      rotate: [0, 180, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* What We Do Section */}
        <Box py={150} style={{ 
          background: isDark 
            ? 'linear-gradient(135deg, rgba(3, 165, 252, 0.08) 0%, rgba(0, 255, 255, 0.08) 100%)'
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Enhanced floating background elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '70%',
              height: '90%',
              background: isDark
                ? 'radial-gradient(circle, rgba(3, 165, 252, 0.1) 0%, rgba(3, 165, 252, 0) 70%)'
                : 'radial-gradient(circle, rgba(3, 165, 252, 0.15) 0%, rgba(3, 165, 252, 0) 70%)',
              filter: 'blur(100px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
            <Stack align="center" mb={80}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Text 
                  size="sm" 
                  tt="uppercase" 
                  fw={700}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="xs"
                  style={{ 
                    letterSpacing: '3px',
                    background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  What We Do
                </Text>
                <Title 
                  order={2} 
                  ta="center" 
                  c={isDark ? "white" : "dark"} 
                  size={rem(56)}
                  style={{ 
                    maxWidth: 800,
                    lineHeight: 1.2,
                    marginBottom: '2rem',
                  }}
                >
                  Transforming Ideas into{' '}
                  <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                    inherit
                    style={{ 
                      backgroundSize: '200%',
                      animation: 'gradient 8s linear infinite',
                      textShadow: isDark ? '0 0 40px rgba(3, 165, 252, 0.3)' : 'none',
                    }}
                  >
                    Digital Excellence
                  </Text>
                </Title>
                <Text 
                  size="xl" 
                  c={isDark ? "gray.3" : "gray.7"} 
                  maw={600} 
                  ta="center"
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.3px'
                  }}
                >
                  We specialize in creating innovative digital solutions that help businesses thrive in the modern world
                </Text>
              </motion.div>
            </Stack>

            <Grid gutter={40}>
              {[
                {
                  title: "Digital Strategy",
                  description: "We craft comprehensive digital strategies that align with your business goals and drive measurable results.",
                  icon: "💡",
                  gradient: { from: '#FF6B6B', to: '#FFA07A' }
                },
                {
                  title: "Web Development",
                  description: "Building scalable, secure, and high-performance web applications using cutting-edge technologies.",
                  icon: "🚀",
                  gradient: { from: '#4ECDC4', to: '#45B7AF' }
                },
                {
                  title: "UI/UX Design",
                  description: "Creating intuitive and engaging user experiences that delight your customers and drive conversions.",
                  icon: "✨",
                  gradient: { from: '#A78BFA', to: '#8B5CF6' }
                },
                {
                  title: "Digital Marketing",
                  description: "Data-driven marketing strategies that increase visibility and generate qualified leads for your business.",
                  icon: "📈",
                  gradient: { from: '#3B82F6', to: '#2563EB' }
                }
              ].map((service, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      padding={40}
                      radius="lg"
                      style={{
                        height: '100%',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(20px)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      component={motion.div}
                      whileHover={{ 
                        translateY: -8,
                        boxShadow: isDark 
                          ? '0 20px 40px rgba(0,0,0,0.3), 0 0 100px rgba(3, 165, 252, 0.1)'
                          : '0 20px 40px rgba(0,0,0,0.1), 0 0 100px rgba(3, 165, 252, 0.05)',
                      }}
                    >
                      {/* Decorative background */}
                      <Box
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '200px',
                          height: '200px',
                          background: `linear-gradient(45deg, ${service.gradient.from}15, ${service.gradient.to}15)`,
                          filter: 'blur(40px)',
                          borderRadius: '50%',
                          transform: 'translate(30%, -30%)',
                          zIndex: 0,
                        }}
                      />

                      <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
                        <Box
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '20px',
                            background: `linear-gradient(45deg, ${service.gradient.from}, ${service.gradient.to})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.5rem',
                            boxShadow: `0 8px 20px ${service.gradient.from}30`,
                            transform: 'rotate(-5deg)',
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Box>
                          <Title 
                            order={3} 
                            mb="sm" 
                            c={isDark ? "white" : "dark"}
                            style={{ 
                              fontSize: '1.5rem',
                              letterSpacing: '-0.5px',
                            }}
                          >
                            {service.title}
                          </Title>
                          <Text 
                            size="md" 
                            c={isDark ? "gray.4" : "gray.7"}
                            style={{ 
                              lineHeight: 1.7,
                              fontSize: '1.1rem',
                            }}
                          >
                            {service.description}
                          </Text>
                        </Box>
                        <Group>
                          <Button
                            variant="subtle"
                            color="blue"
                            rightSection={<IconArrowRight size={16} />}
                            styles={{
                              root: {
                                padding: 0,
                                height: 'auto',
                                '&:hover': {
                                  background: 'none',
                                  transform: 'translateX(5px)',
                                },
                              },
                            }}
                          >
                            Learn More
                          </Button>
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Group justify="center" mt={80}>
                <Button
                  size="md"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                  radius="md"
                  px={40}
                  leftSection={<IconArrowRight size={18} />}
                  style={{ 
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 600,
                    boxShadow: '0 8px 20px rgba(3, 165, 252, 0.3)',
                  }}
                >
                  Explore All Services
                </Button>
              </Group>
            </motion.div>
          </Container>
        </Box>


        {/* Logos Section */}
        <Box py={100}>
          <Container size="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text ta="center" c="dimmed" mb={50} size="xl" fw={500}>
                Trusted by industry leaders
              </Text>
              <Carousel
                slideSize={{ base: '100%', sm: '50%', md: '20%' }}
                slideGap="lg"
                align="start"
                slidesToScroll={1}
                withControls
                loop
                styles={{
                  control: {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    border: 'none',
                    color: isDark ? 'white' : 'dark',
                    '&:hover': {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                    },
                  },
                }}
                nextControlIcon={<IconArrowRight size={16} />}
                previousControlIcon={<IconArrowLeft size={16} />}
              >
                {logos.map((logo, index) => (
                  <Carousel.Slide key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.7 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                      }}
                    >
                      <Image
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        style={{ filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0)' }}
                        w={120}
                      />
                    </motion.div>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </motion.div>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box py={120} style={{ 
          background: isDark 
            ? 'linear-gradient(135deg, rgba(3, 165, 252, 0.05) 0%, rgba(0, 255, 255, 0.05) 100%)'
            : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Simplified background element */}
          <motion.div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '60%',
              height: '80%',
              background: isDark
                ? 'radial-gradient(circle, rgba(3, 165, 252, 0.08) 0%, rgba(3, 165, 252, 0) 70%)'
                : 'radial-gradient(circle, rgba(3, 165, 252, 0.1) 0%, rgba(3, 165, 252, 0) 70%)',
              filter: 'blur(80px)',
              borderRadius: '50%',
              zIndex: 0,
              willChange: 'transform',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <Container size="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack align="center" mb={80}>
                <Text 
                  size="sm" 
                  tt="uppercase" 
                  fw={700}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="xs"
                  style={{ 
                    letterSpacing: '3px',
                    background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Client Testimonials
                </Text>
                <Title 
                  order={2} 
                  ta="center" 
                  c={isDark ? "white" : "dark"} 
                  size={rem(56)}
                  style={{ 
                    maxWidth: 800,
                    lineHeight: 1.2,
                  }}
                >
                  What Our{' '}
                  <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                    inherit
                    style={{ 
                      backgroundSize: '200%',
                      animation: 'gradient 8s linear infinite',
                      textShadow: isDark ? '0 0 40px rgba(3, 165, 252, 0.3)' : 'none',
                    }}
                  >
                    Clients
                  </Text>{' '}
                  Say About Us
                </Title>
                <Text 
                  size="xl" 
                  c={isDark ? "gray.3" : "gray.7"} 
                  maw={600} 
                  ta="center" 
                  mt="md"
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.3px'
                  }}
                >
                  Discover why leading businesses trust us with their digital success stories
                </Text>
              </Stack>

              <Carousel
                slideSize="100%"
                slideGap="lg"
                align="center"
                slidesToScroll={1}
                withControls
                loop
                styles={{
                  root: {
                    maxWidth: '1000px',
                    margin: '0 auto',
                  },
                  control: {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    border: 'none',
                    color: isDark ? 'white' : 'dark',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                    },
                  },
                }}
                nextControlIcon={<IconArrowRight size={20} />}
                previousControlIcon={<IconArrowLeft size={20} />}
              >
                {testimonials.map((testimonial, index) => (
                  <Carousel.Slide key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      style={{ willChange: 'transform' }}
                    >
                      <Card
                        padding={40}
                        radius="lg"
                        style={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                          borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          maxWidth: '900px',
                          margin: '0 auto',
                          backdropFilter: 'blur(10px)',
                          boxShadow: isDark 
                            ? '0 20px 40px rgba(0,0,0,0.3)'
                            : '0 20px 40px rgba(0,0,0,0.1)',
                        }}
                      >
                        <Stack gap={40}>
                          <Box>
                            <Text 
                              size="xl" 
                              c={isDark ? "gray.2" : "gray.8"} 
                              style={{ 
                                lineHeight: 1.8, 
                                fontSize: '1.4rem',
                                fontStyle: 'italic',
                                position: 'relative',
                                paddingLeft: '24px',
                              }}
                            >
                              <Text 
                                component="span" 
                                style={{
                                  position: 'absolute',
                                  left: -10,
                                  top: -20,
                                  fontSize: '4rem',
                                  opacity: 0.1,
                                  fontFamily: 'serif',
                                }}
                              >
                                &ldquo;
                              </Text>
                              {testimonial.content}
                            </Text>
                          </Box>
                          <Group>
                            <Box 
                              style={{ 
                                position: 'relative',
                                width: 80,
                                height: 80,
                              }}
                            >
                              <Avatar 
                                src={testimonial.avatar} 
                                size={80} 
                                radius="50%"
                                style={{ 
                                  border: '3px solid rgba(3, 165, 252, 0.3)',
                                  boxShadow: '0 8px 20px rgba(3, 165, 252, 0.2)',
                                }}
                              />
                              <Box
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  borderRadius: '50%',
                                  background: 'linear-gradient(45deg, rgba(3, 165, 252, 0.2), rgba(0, 255, 255, 0.2))',
                                  filter: 'blur(10px)',
                                  zIndex: -1,
                                }}
                              />
                            </Box>
                            <Stack gap={5}>
                              <Text 
                                size="xl" 
                                fw={700} 
                                c={isDark ? "white" : "dark"}
                                style={{
                                  fontSize: '1.3rem',
                                  letterSpacing: '-0.5px',
                                }}
                              >
                                {testimonial.author}
                              </Text>
                              <Text 
                                size="md" 
                                c="dimmed"
                                style={{ 
                                  opacity: 0.8,
                                  fontSize: '1.1rem',
                                }}
                              >
                                {testimonial.position}
                              </Text>
                            </Stack>
                          </Group>
                        </Stack>
                      </Card>
                    </motion.div>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </motion.div>
          </Container>
        </Box>

        {/* Pricing Section - Optimized */}
        <Box py={120}>
          <Container size="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack align="center" mb={80}>
                <Text 
                  size="sm" 
                  tt="uppercase" 
                  fw={700}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mb="xs"
                  style={{ letterSpacing: '2px' }}
                >
                  Pricing
                </Text>
                <Title order={2} ta="center" c={isDark ? "white" : "dark"} size={40}>
                  Choose Your Plan
                </Title>
                <Text size="xl" c={isDark ? "gray.3" : "gray.7"} maw={600} ta="center" mt="md">
                  Flexible pricing options designed to match your business needs
                </Text>
              </Stack>
              <Grid gutter={40}>
                {pricingPlans.map((plan, index) => (
                  <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ translateY: -5 }}
                      style={{ willChange: 'transform' }}
                    >
                      <Card
                        padding="xl"
                        radius="lg"
                        style={{
                          backgroundColor: plan.popular 
                            ? isDark ? 'rgba(3, 165, 252, 0.15)' : 'rgba(3, 165, 252, 0.05)'
                            : isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                          borderColor: plan.popular
                            ? isDark ? 'rgba(3, 165, 252, 0.5)' : 'rgba(3, 165, 252, 0.3)'
                            : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          height: '100%',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          boxShadow: plan.popular 
                            ? '0 8px 30px rgba(3, 165, 252, 0.2)'
                            : '0 8px 20px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        {plan.popular && (
                          <Text
                            c="blue"
                            fw={700}
                            tt="uppercase"
                            size="xs"
                            mb="md"
                            style={{ letterSpacing: '1px' }}
                          >
                            Most Popular
                          </Text>
                        )}
                        <Text size="xl" fw={700} c={isDark ? "white" : "dark"} mb="xs">
                          {plan.title}
                        </Text>
                        <Text size="sm" c="dimmed" mb="md" style={{ opacity: 0.8 }}>
                          Starting from
                        </Text>
                        <Text size={rem(48)} fw={700} c={isDark ? "white" : "dark"} mb="xl">
                          ${plan.price}
                          <Text span size="sm" c="dimmed" style={{ opacity: 0.8 }}> / month</Text>
                        </Text>
                        <Stack gap="md" mb="xl">
                          {plan.features.map((feature, i) => (
                            <Group key={i} gap="xs">
                              <ThemeIcon
                                size={24}
                                radius="xl"
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                              >
                                <IconCheck size={14} />
                              </ThemeIcon>
                              <Text size="sm" c={isDark ? "gray.3" : "gray.7"} style={{ lineHeight: 1.5 }}>
                                {feature}
                              </Text>
                            </Group>
                          ))}
                        </Stack>
                        <Button
                          fullWidth
                          size="md"
                          variant={plan.popular ? "gradient" : "outline"}
                          gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                          c={plan.popular ? undefined : isDark ? "gray.0" : "dark"}
                          radius="md"
                          style={{
                            transition: 'all 0.3s ease',
                            height: '42px',
                            fontSize: '15px',
                            fontWeight: 600,
                            borderWidth: plan.popular ? 0 : '1.5px',
                          }}
                        >
                          Get Started
                        </Button>
                      </Card>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
} 