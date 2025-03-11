'use client'
import { Container, Title, Text, Button, Group, Stack, Grid, Card, ThemeIcon, rem, Image, Box, Avatar, useMantineColorScheme, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconCheck, IconArrowRight, IconArrowLeft, IconStar, IconPalette, IconCode, IconBrandFigma, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

export default function CreativeStudioLanding() {
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
                ? 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 50%)'
                : 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 50%)',
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
                ? 'radial-gradient(circle at 70% 60%, rgba(192, 132, 252, 0.15) 0%, rgba(192, 132, 252, 0) 60%)'
                : 'radial-gradient(circle at 70% 60%, rgba(192, 132, 252, 0.1) 0%, rgba(192, 132, 252, 0) 60%)',
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
                            background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                            marginTop: '12px',
                          }}
                        />
                        <Text 
                          size="lg" 
                          tt="uppercase" 
                          fw={800}
                          variant="gradient"
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          style={{ 
                            letterSpacing: '3px',
                            background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          Creative Studio
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
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          inherit
                          style={{ 
                            backgroundSize: '200%',
                            animation: 'gradient 8s linear infinite',
                            textShadow: isDark ? '0 0 40px rgba(99, 102, 241, 0.3)' : '0 0 40px rgba(99, 102, 241, 0.15)',
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
                        Transform your brand with our cutting-edge creative solutions. 
                        We blend artistry and innovation to create exceptional 
                        experiences that inspire and elevate.
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
                            gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
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
                                ? '0 8px 20px rgba(99, 102, 241, 0.3)'
                                : '0 8px 20px rgba(99, 102, 241, 0.25)',
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
                              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.3)',
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
                                : '0 4px 15px rgba(99, 102, 241, 0.1)',
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
                              gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                              style={{ 
                                fontSize: '2.5rem',
                                background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: isDark ? 'none' : '0 2px 10px rgba(99, 102, 241, 0.2)',
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
                        ? '2px solid rgba(99, 102, 241, 0.2)'
                        : '2px solid rgba(99, 102, 241, 0.2)',
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
                        : '0 25px 50px rgba(99, 102, 241, 0.15)',
                      willChange: 'transform',
                    }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940"
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
                          ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(192, 132, 252, 0.3))'
                          : 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(192, 132, 252, 0.2))',
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
                      background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.2)',
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
                      background: 'linear-gradient(45deg, #c084fc, #6366f1)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      boxShadow: '0 8px 20px rgba(192, 132, 252, 0.2)',
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
                      background: 'rgba(99, 102, 241, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
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

        {/* Features Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background decoration */}
          <motion.div
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '50%',
              height: '70%',
              background: isDark
                ? 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          <Container size="xl">
            <Stack align="center" mb={60}>
              <Group gap="xs">
                <Box
                  style={{
                    width: '30px',
                    height: '2px',
                    background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                  }}
                />
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
                  Our Features
                </Text>
                <Box
                  style={{
                    width: '30px',
                    height: '2px',
                    background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                  }}
                />
              </Group>
              <Title 
                order={2}
                size={48}
                ta="center"
                maw={600}
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                  lineHeight: 1.2,
                }}
              >
                Empowering Your Digital Success with Cutting-Edge Features
              </Title>
              <Text
                c="dimmed"
                ta="center"
                size="lg"
                maw={600}
                mt="md"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  lineHeight: 1.8,
                }}
              >
                Discover our comprehensive suite of features designed to transform your digital presence and drive exceptional results.
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40} mt={60}>
              {[
                {
                  icon: <IconPalette size={30} />,
                  title: "Creative Design",
                  description: "Transform your brand with stunning visuals and innovative design solutions that captivate your audience.",
                  gradient: { from: '#6366f1', to: '#818cf8' },
                },
                {
                  icon: <IconCode size={30} />,
                  title: "Development",
                  description: "Build robust, scalable applications with clean code and cutting-edge technologies.",
                  gradient: { from: '#8b5cf6', to: '#a78bfa' },
                },
                {
                  icon: <IconBrandFigma size={30} />,
                  title: "UI/UX Design",
                  description: "Create intuitive, user-centered experiences that delight and engage your customers.",
                  gradient: { from: '#c084fc', to: '#d8b4fe' },
                },
                {
                  icon: <IconStar size={30} />,
                  title: "Branding",
                  description: "Develop a powerful brand identity that resonates with your target audience and stands out.",
                  gradient: { from: '#6366f1', to: '#818cf8' },
                },
                {
                  icon: <IconBrandGithub size={30} />,
                  title: "Version Control",
                  description: "Maintain full control over your project with advanced version control and collaboration tools.",
                  gradient: { from: '#8b5cf6', to: '#a78bfa' },
                },
                {
                  icon: <IconArrowUpRight size={30} />,
                  title: "Performance",
                  description: "Optimize your digital assets for maximum speed, efficiency, and user satisfaction.",
                  gradient: { from: '#c084fc', to: '#d8b4fe' },
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
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
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      height: '100%',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: isDark 
                          ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                          : '0 20px 40px rgba(99, 102, 241, 0.1)',
                      },
                    }}
                  >
                    <ThemeIcon
                      size={60}
                      radius="md"
                      variant="gradient"
                      gradient={feature.gradient}
                      mb="md"
                      style={{
                        boxShadow: `0 10px 20px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                      }}
                    >
                      {feature.icon}
                    </ThemeIcon>
                    <Text 
                      size="xl" 
                      fw={600} 
                      mb="sm"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {feature.title}
                    </Text>
                    <Text 
                      size="sm" 
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

        {/* Portfolio Showcase */}
        <Box py={120} style={{ position: 'relative' }}>
          <Container size="xl">
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
                Our Portfolio
              </Text>
              <Title 
                order={2}
                size={48}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                }}
              >
                Featured Projects
              </Title>
            </Stack>

            <Carousel
              slideSize="33.333333%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
              controlsOffset="xl"
              style={{ flex: 1 }}
            >
              {[
                {
                  image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2940',
                  title: 'Digital Marketing Platform',
                  category: 'Web Development',
                },
                {
                  image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2940',
                  title: 'Brand Identity Design',
                  category: 'Branding',
                },
                {
                  image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2940',
                  title: 'E-commerce Solution',
                  category: 'UI/UX Design',
                },
                {
                  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940',
                  title: 'Mobile App Design',
                  category: 'App Development',
                },
              ].map((project, index) => (
                <Carousel.Slide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      padding={0}
                      radius="lg"
                      style={{
                        overflow: 'hidden',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      }}
                    >
                      <Box style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          h={300}
                          style={{ 
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                          }}
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            bottom: 20,
                            left: 20,
                            right: 20,
                          }}
                        >
                          <Text 
                            size="xs" 
                            tt="uppercase" 
                            fw={600} 
                            c="gray.3"
                            mb={8}
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              letterSpacing: '1px',
                            }}
                          >
                            {project.category}
                          </Text>
                          <Text 
                            size="xl" 
                            fw={700} 
                            c="white"
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            {project.title}
                          </Text>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '40%',
              height: '60%',
              background: isDark
                ? 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)'
                : 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
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
                Testimonials
              </Text>
              <Title 
                order={2}
                size={48}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                }}
              >
                What Our Clients Say
              </Title>
            </Stack>

            <Carousel
              slideSize="50%"
              slideGap="xl"
              loop
              align="start"
              slidesToScroll={1}
              styles={{
                control: {
                  '&[data-inactive]': {
                    opacity: 0,
                    cursor: 'default',
                  },
                },
              }}
            >
              {[
                {
                  quote: "Working with this creative studio has been transformative for our brand. Their attention to detail and innovative approach exceeded our expectations.",
                  author: "Sarah Johnson",
                  position: "CEO, TechStart",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
                },
                {
                  quote: "The team's ability to understand our vision and translate it into a stunning digital experience was remarkable. They're true partners in our success.",
                  author: "Michael Chen",
                  position: "Marketing Director, InnovateCo",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
                },
                {
                  quote: "Their creative expertise and technical skills helped us achieve a digital presence that truly stands out in our industry.",
                  author: "Emily Rodriguez",
                  position: "Founder, DesignHub",
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                },
              ].map((testimonial, index) => (
                <Carousel.Slide key={index}>
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
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                        height: '100%',
                      }}
                    >
                      <Stack>
                        <Text 
                          size="xl" 
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            lineHeight: 1.8,
                            fontStyle: 'italic',
                          }}
                        >
                          "{testimonial.quote}"
                        </Text>
                        <Group mt="xl">
                          <Avatar
                            src={testimonial.avatar}
                            size={50}
                            radius="xl"
                          />
                          <Box>
                            <Text 
                              fw={600}
                              size="md"
                              style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                              }}
                            >
                              {testimonial.author}
                            </Text>
                            <Text 
                              size="sm" 
                              c="dimmed"
                              style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                              }}
                            >
                              {testimonial.position}
                            </Text>
                          </Box>
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Container>
        </Box>

        {/* Pricing Section */}
        <Box py={120} style={{ position: 'relative' }}>
          <Container size="xl">
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
                Pricing Plans
              </Text>
              <Title 
                order={2}
                size={48}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-1px',
                }}
              >
                Choose Your Package
              </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
              {[
                {
                  title: "Starter",
                  price: "999",
                  description: "Perfect for small businesses starting their digital journey",
                  features: [
                    "Custom Website Design",
                    "Responsive Development",
                    "Basic SEO Setup",
                    "3 Pages",
                    "1 Month Support",
                  ],
                  isPopular: false,
                },
                {
                  title: "Professional",
                  price: "2499",
                  description: "Ideal for growing businesses needing comprehensive solutions",
                  features: [
                    "Advanced Website Design",
                    "E-commerce Integration",
                    "Advanced SEO Package",
                    "10 Pages",
                    "3 Months Support",
                    "Social Media Integration",
                  ],
                  isPopular: true,
                },
                {
                  title: "Enterprise",
                  price: "4999",
                  description: "Full-scale solution for established businesses",
                  features: [
                    "Premium Website Design",
                    "Full E-commerce Suite",
                    "Complete SEO Package",
                    "Unlimited Pages",
                    "12 Months Support",
                    "Custom Features",
                    "Priority Support",
                  ],
                  isPopular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    padding="xl"
                    radius="lg"
                    style={{
                      border: `2px solid ${plan.isPopular ? 'transparent' : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      background: plan.isPopular
                        ? isDark
                          ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(192, 132, 252, 0.3))'
                          : 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(192, 132, 252, 0.1))'
                        : isDark
                          ? 'rgba(255, 255, 255, 0.03)'
                          : 'white',
                      height: '100%',
                      transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                      position: 'relative',
                    }}
                  >
                    {plan.isPopular && (
                      <Box
                        style={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                          padding: '6px 12px',
                          borderRadius: '12px',
                        }}
                      >
                        <Text size="xs" c="white" fw={600}>Most Popular</Text>
                      </Box>
                    )}
                    <Stack>
                      <Text 
                        size="xl" 
                        fw={700}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {plan.title}
                      </Text>
                      <Group align="flex-end" gap={4}>
                        <Text 
                          size="sm" 
                          fw={500}
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          $
                        </Text>
                        <Text 
                          size={'42'} 
                          fw={800}
                          style={{
                            fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </Text>
                      </Group>
                      <Text 
                        size="sm" 
                        c="dimmed"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {plan.description}
                      </Text>
                      <Stack gap="md" mt="xl">
                        {plan.features.map((feature, featureIndex) => (
                          <Group key={featureIndex} gap="xs">
                            <ThemeIcon
                              size={20}
                              radius="xl"
                              variant="gradient"
                              gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                            >
                              <IconCheck size={12} />
                            </ThemeIcon>
                            <Text size="sm">{feature}</Text>
                          </Group>
                        ))}
                      </Stack>
                      <Button
                        variant={plan.isPopular ? "gradient" : "outline"}
                        gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                        size="lg"
                        radius="xl"
                        fullWidth
                        mt="xl"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Get Started
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background decoration */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isDark
                ? 'radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
            <Card
              padding="xl"
              radius="xl"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(192, 132, 252, 0.2) 100%)'
                  : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
              }}
            >
              <Grid gutter={60} align="center">
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap="xl">
                    <Box>
                      <Text
                        tt="uppercase"
                        fw={700}
                        variant="gradient"
                        gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                        mb="md"
                        style={{ 
                          letterSpacing: '3px',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Get Started Today
                      </Text>
                      <Title
                        order={2}
                        size={48}
                        style={{
                          fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                          letterSpacing: '-1px',
                          lineHeight: 1.2,
                        }}
                      >
                        Ready to Transform Your Digital Presence?
                      </Title>
                    </Box>
                    
                    <Text
                      size="lg"
                      c="dimmed"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        lineHeight: 1.8,
                        maxWidth: 600,
                      }}
                    >
                      Join thousands of successful businesses who have already taken their digital presence to the next level. Our team of experts is ready to help you achieve your goals.
                    </Text>

                    <Group gap="md">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="md"
                          variant="gradient"
                          gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                          radius="xl"
                          leftSection={<IconArrowUpRight size={20} />}
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            height: '56px',
                            padding: '0 36px',
                            boxShadow: isDark 
                              ? '0 10px 20px rgba(99, 102, 241, 0.3)'
                              : '0 10px 20px rgba(99, 102, 241, 0.2)',
                          }}
                        >
                          Start Your Project
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="md"
                          variant="default"
                          radius="xl"
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            height: '56px',
                            padding: '0 36px',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          Schedule a Call
                        </Button>
                      </motion.div>
                    </Group>

                    <Group gap="xl" mt="xl">
                      {[
                        { label: 'Satisfied Clients', value: '500+' },
                        { label: 'Projects Completed', value: '1000+' },
                        { label: 'Expert Team', value: '50+' },
                      ].map((stat, index) => (
                        <Box key={index}>
                          <Text
                            size="xl"
                            fw={700}
                            variant="gradient"
                            gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                            style={{
                              fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                              fontSize: '2rem',
                            }}
                          >
                            {stat.value}
                          </Text>
                          <Text
                            size="sm"
                            c="dimmed"
                            mt={4}
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            {stat.label}
                          </Text>
                        </Box>
                      ))}
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Box style={{ position: 'relative' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940"
                      alt="Creative workspace"
                      radius="lg"
                      style={{
                        width: '100%',
                        height: 'auto',
                        boxShadow: isDark 
                          ? '0 30px 60px rgba(0, 0, 0, 0.4)'
                          : '0 30px 60px rgba(99, 102, 241, 0.2)',
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
                        borderRadius: 'lg',
                        mixBlendMode: 'overlay',
                      }}
                    />

                    {/* Decorative elements */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                        background: 'linear-gradient(45deg, #6366f1, #c084fc)',
                        opacity: 0.1,
                        zIndex: -1,
                      }}
                      animate={{
                        rotate: [0, 180],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        width: 150,
                        height: 150,
                        borderRadius: 30,
                        background: 'linear-gradient(45deg, #c084fc, #6366f1)',
                        opacity: 0.1,
                        zIndex: -1,
                      }}
                      animate={{
                        rotate: [180, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </Box>
                </Grid.Col>
              </Grid>
            </Card>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
} 