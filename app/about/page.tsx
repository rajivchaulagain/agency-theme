'use client'
import { Container, Title, Text, Grid, Card, ThemeIcon, rem, Image, Box, Avatar, useMantineColorScheme, SimpleGrid, Group, Stack } from '@mantine/core';
import { IconBrush, IconCode, IconRocket, IconHeart, IconTrophy, IconUsers, IconBulb, IconTarget } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function AboutPage() {
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
            <Grid gutter={60} align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
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
                    Our Story
                  </Text>
                  <Title 
                    order={1}
                    size={rem(56)}
                    style={{
                      fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                      letterSpacing: '-2px',
                      lineHeight: 1.1,
                      marginBottom: '2rem',
                    }}
                  >
                    Crafting Digital
                    <br />
                    <Text
                      component="span"
                      variant="gradient"
                      gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                      inherit
                      style={{ 
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      Excellence Since 2010
                    </Text>
                  </Title>
                  <Text 
                    size="lg"
                    c={isDark ? "gray.3" : "gray.7"}
                    style={{ 
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      maxWidth: '500px',
                    }}
                  >
                    We're a team of passionate creators, innovators, and problem-solvers dedicated to transforming ideas into impactful digital experiences. Our journey began with a simple mission: to help brands thrive in the digital age.
                  </Text>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Box style={{ position: 'relative' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940"
                      alt="Our Team"
                      radius="lg"
                      style={{
                        boxShadow: isDark 
                          ? '0 25px 50px rgba(0,0,0,0.5)'
                          : '0 25px 50px rgba(99, 102, 241, 0.15)',
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
                        borderRadius: '0.5rem',
                        mixBlendMode: 'overlay',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* Values Section */}
        <Box py={100} style={{ position: 'relative' }}>
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
                Our Values
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
                What Drives Us Forward
              </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
              {[
                {
                  icon: <IconBulb size={30} />,
                  title: "Innovation",
                  description: "We embrace new technologies and creative solutions to push boundaries.",
                },
                {
                  icon: <IconHeart size={30} />,
                  title: "Passion",
                  description: "We pour our heart into every project, treating it as our own.",
                },
                {
                  icon: <IconTarget size={30} />,
                  title: "Excellence",
                  description: "We strive for perfection in every pixel and line of code.",
                },
                {
                  icon: <IconUsers size={30} />,
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and open communication.",
                },
              ].map((value, index) => (
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
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      height: '100%',
                    }}
                  >
                    <ThemeIcon
                      size={60}
                      radius="md"
                      variant="gradient"
                      gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                      mb="md"
                    >
                      {value.icon}
                    </ThemeIcon>
                    <Text 
                      size="lg" 
                      fw={600} 
                      mb="sm"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {value.title}
                    </Text>
                    <Text 
                      size="sm" 
                      c="dimmed"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Text>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Team Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
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
                Our Team
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
                Meet the Creators
              </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
              {[
                {
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
                  name: "Sarah Johnson",
                  position: "Creative Director",
                },
                {
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
                  name: "Michael Chen",
                  position: "Technical Lead",
                },
                {
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
                  name: "Emily Rodriguez",
                  position: "UI/UX Designer",
                },
                {
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
                  name: "David Kim",
                  position: "Senior Developer",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
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
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Box style={{ position: 'relative' }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        h={300}
                        style={{ objectFit: 'cover' }}
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
                          size="xl" 
                          fw={700} 
                          c="white"
                          mb={4}
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          {member.name}
                        </Text>
                        <Text 
                          size="sm" 
                          c="gray.3"
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          {member.position}
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Achievements Section */}
        <Box py={120} style={{ position: 'relative', overflow: 'hidden' }}>
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isDark
                ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.15), rgba(192, 132, 252, 0.15))'
                : 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(192, 132, 252, 0.1))',
              zIndex: 0,
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
                Achievements
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
                Our Impact in Numbers
              </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
              {[
                {
                  icon: <IconRocket size={30} />,
                  number: "500+",
                  label: "Projects Launched",
                },
                {
                  icon: <IconTrophy size={30} />,
                  number: "50+",
                  label: "Awards Won",
                },
                {
                  icon: <IconCode size={30} />,
                  number: "1M+",
                  label: "Lines of Code",
                },
                {
                  icon: <IconBrush size={30} />,
                  number: "200+",
                  label: "Happy Clients",
                },
              ].map((achievement, index) => (
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
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      height: '100%',
                    }}
                  >
                    <ThemeIcon
                      size={60}
                      radius="md"
                      variant="gradient"
                      gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                      mb="md"
                    >
                      {achievement.icon}
                    </ThemeIcon>
                    <Text 
                      size="3rem" 
                      fw={800}
                      variant="gradient"
                      gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                      style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {achievement.number}
                    </Text>
                    <Text 
                      size="lg" 
                      c="dimmed"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {achievement.label}
                    </Text>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
} 