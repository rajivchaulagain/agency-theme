import { Container, Title, SimpleGrid, Card, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  const landingPages = [
    {
      title: 'Modern Agency',
      description: 'A sleek and professional design for modern digital agencies',
      path: '/landing1'
    },
    {
      title: 'Creative Studio',
      description: 'Artistic and innovative design for creative studios',
      path: '/landing2'
    },
    {
      title: 'Digital Services',
      description: 'Feature-rich layout for digital service providers',
      path: '/landing3'
    }
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb={50}>
        Welcome to Agency Theme
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {landingPages.map((page) => (
          <Card key={page.path} shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} mb="md">{page.title}</Title>
            <Text c="dimmed" size="sm" mb="xl">
              {page.description}
            </Text>
            <Group justify="flex-end">
              <Link href={page.path} passHref>
                <Button component="a" variant="light">
                  View Design
                </Button>
              </Link>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
