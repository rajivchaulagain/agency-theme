'use client'
import { Container, Title, Text, Grid, Card, ThemeIcon, rem, Image, Box, Button, useMantineColorScheme, SimpleGrid, Group, Stack, List } from '@mantine/core';
import { IconBrandFigma, IconCode, IconPalette, IconBrush, IconDeviceLaptop, IconRocket, IconBrandGoogle, IconChartBar, IconArrowUpRight, IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ServicesPage() {
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
                Our Services
              </Text>
              <Title 
                order={1}
                size={rem(64)}
                ta="center"
                style={{
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-2px',
                  lineHeight: 1.1,
                  maxWidth: '800px',
                }}
              >
                Transforming Ideas into
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
                  Digital Excellence
                </Text>
              </Title>
              <Text 
                size="xl"
                c={isDark ? "gray.3" : "gray.7"}
                ta="center"
                style={{ 
                  maxWidth: '600px',
                  lineHeight: 1.8,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                We offer comprehensive digital solutions tailored to your unique needs. 
                From design to development, we are here to bring your vision to life.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Main Services Section */}
        <Box py={80} style={{ position: 'relative' }}>
          <Container size="xl">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
              {[
                {
                  icon: <IconPalette size={30} />,
                  title: "UI/UX Design",
                  description: "Create intuitive and engaging user experiences that delight your customers.",
                  features: [
                    "User Research & Analysis",
                    "Wireframing & Prototyping",
                    "Interactive Design",
                    "User Testing",
                    "Design Systems"
                  ],
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940",
                },
                {
                  icon: <IconCode size={30} />,
                  title: "Web Development",
                  description: "Build powerful, scalable web applications using cutting-edge technologies.",
                  features: [
                    "Frontend Development",
                    "Backend Development",
                    "API Integration",
                    "Performance Optimization",
                    "Security Implementation"
                  ],
                  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940",
                },
                {
                  icon: <IconBrandFigma size={30} />,
                  title: "Brand Design",
                  description: "Develop a strong brand identity that sets you apart from competitors.",
                  features: [
                    "Logo Design",
                    "Brand Guidelines",
                    "Visual Identity",
                    "Marketing Materials",
                    "Brand Strategy"
                  ],
                  image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2940",
                },
                {
                  icon: <IconDeviceLaptop size={30} />,
                  title: "App Development",
                  description: "Create native and cross-platform mobile applications that users love.",
                  features: [
                    "iOS Development",
                    "Android Development",
                    "Cross-platform Solutions",
                    "App Store Optimization",
                    "Maintenance & Support"
                  ],
                  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2940",
                },
                {
                  icon: <IconBrandGoogle size={30} />,
                  title: "Digital Marketing",
                  description: "Drive growth with data-driven digital marketing strategies.",
                  features: [
                    "SEO Optimization",
                    "Content Strategy",
                    "Social Media Marketing",
                    "Email Campaigns",
                    "Analytics & Reporting"
                  ],
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940",
                },
                {
                  icon: <IconChartBar size={30} />,
                  title: "Analytics & SEO",
                  description: "Optimize your digital presence with advanced analytics and SEO.",
                  features: [
                    "Performance Tracking",
                    "Keyword Research",
                    "Conversion Optimization",
                    "Traffic Analysis",
                    "ROI Measurement"
                  ],
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940",
                },
              ].map((service, index) => (
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
                      overflow: 'hidden',
                    }}
                  >
                    <Card.Section>
                      <Box style={{ position: 'relative', height: 200 }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          style={{ 
                            height: '100%',
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
                      </Box>
                    </Card.Section>

                    <Stack mt="xl">
                      <ThemeIcon
                        size={60}
                        radius="md"
                        variant="gradient"
                        gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                      >
                        {service.icon}
                      </ThemeIcon>
                      <Text 
                        size="xl" 
                        fw={700}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {service.title}
                      </Text>
                      <Text 
                        size="sm" 
                        c="dimmed"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Text>

                      <List
                        spacing="sm"
                        size="sm"
                        mt="md"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <List.Item
                            key={featureIndex}
                            icon={
                              <ThemeIcon 
                                size={24} 
                                radius="xl"
                                variant="gradient"
                                gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                              >
                                <IconCheck size={14} />
                              </ThemeIcon>
                            }
                          >
                            {feature}
                          </List.Item>
                        ))}
                      </List>

                      <Button
                        variant="light"
                        color="gray"
                        fullWidth
                        mt="xl"
                        rightSection={<IconArrowUpRight size={16} />}
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Learn More
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
            <Card
              padding={0}
              radius="lg"
              style={{
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'white',
                overflow: 'hidden',
              }}
            >
              <Grid gutter={0}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Box
                    style={{
                      padding: '60px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Title
                      order={2}
                      size={42}
                      style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                      }}
                    >
                      Ready to Start Your
                      <br />
                      Digital Journey?
                    </Title>
                    <Text
                      mt="xl"
                      size="lg"
                      c="dimmed"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        lineHeight: 1.8,
                      }}
                    >
                      Lets discuss how we can help transform your business with our comprehensive digital solutions.
                    </Text>
                    <Group mt={40}>
                      <Button
                        size="xl"
                        variant="gradient"
                        gradient={{ from: '#6366f1', to: '#c084fc', deg: 45 }}
                        radius="xl"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        size="xl"
                        variant="outline"
                        radius="xl"
                        style={{
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        View Pricing
                      </Button>
                    </Group>
                  </Box>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Box style={{ position: 'relative', height: '100%', minHeight: 400 }}>
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940"
                      alt="Creative workspace"
                      style={{
                        width: '100%',
                        height: '100%',
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