'use client'
import { Container, Title, Text, SimpleGrid, Card, Group, Box, Stack, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconTrophy, IconUsers, IconStar, IconBuildingSkyscraper, IconCertificate, IconWorld } from '@tabler/icons-react';

const achievements = [
  {
    icon: IconTrophy,
    number: '250+',
    title: 'Projects Completed',
    description: 'Successfully delivered projects across various industries',
    gradient: { from: '#FF6B6B', to: '#FFA07A' }
  },
  {
    icon: IconUsers,
    number: '120+',
    title: 'Happy Clients',
    description: 'Trusted by businesses worldwide',
    gradient: { from: '#4ECDC4', to: '#45B7AF' }
  },
  {
    icon: IconStar,
    number: '15+',
    title: 'Years Experience',
    description: 'Deep industry expertise and knowledge',
    gradient: { from: '#A78BFA', to: '#8B5CF6' }
  },
  {
    icon: IconBuildingSkyscraper,
    number: '10+',
    title: 'Global Offices',
    description: 'Present across major tech hubs',
    gradient: { from: '#3B82F6', to: '#2563EB' }
  },
  {
    icon: IconCertificate,
    number: '50+',
    title: 'Industry Awards',
    description: 'Recognition for excellence in digital innovation',
    gradient: { from: '#F59E0B', to: '#D97706' }
  },
  {
    icon: IconWorld,
    number: '30+',
    title: 'Countries Served',
    description: 'Global reach with local expertise',
    gradient: { from: '#EC4899', to: '#BE185D' }
  }
];

export function Achievements() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box py={100} style={{ 
      background: isDark 
        ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)'
        : 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '50%',
          height: '70%',
          background: isDark
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text
              tt="uppercase"
              fw={700}
              variant="gradient"
              gradient={{ from: '#2563eb', to: '#6366f1', deg: 45 }}
              style={{ 
                letterSpacing: '3px',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              Our Achievements
            </Text>
            <Title
              order={2}
              size={48}
              ta="center"
              mt="md"
              style={{
                fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                letterSpacing: '-1px',
                maxWidth: '800px',
              }}
            >
              Milestones That Define
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: '#2563eb', to: '#6366f1', deg: 45 }}
                inherit
                style={{ 
                  fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                  display: 'block',
                }}
              >
                Our Success Story
              </Text>
            </Title>
          </motion.div>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                  position: 'relative',
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
                {/* Gradient background */}
                <Box
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    background: `linear-gradient(45deg, ${achievement.gradient.from}15, ${achievement.gradient.to}15)`,
                    filter: 'blur(40px)',
                    borderRadius: '50%',
                    transform: 'translate(30%, -30%)',
                    zIndex: 0,
                  }}
                />

                <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
                  <Box
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: `linear-gradient(45deg, ${achievement.gradient.from}, ${achievement.gradient.to})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${achievement.gradient.from}30`,
                    }}
                  >
                    <achievement.icon size={32} color="white" />
                  </Box>

                  <Stack gap="xs">
                    <Text
                      size="xl"
                      fw={700}
                      variant="gradient"
                      gradient={{ from: achievement.gradient.from, to: achievement.gradient.to, deg: 45 }}
                      style={{ 
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        fontSize: '2.25rem',
                      }}
                    >
                      {achievement.number}
                    </Text>
                    <Title
                      order={3}
                      style={{
                        fontFamily: 'Cal Sans, Plus Jakarta Sans, sans-serif',
                        fontSize: '1.5rem',
                      }}
                    >
                      {achievement.title}
                    </Title>
                    <Text
                      size="lg"
                      c="dimmed"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      {achievement.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 