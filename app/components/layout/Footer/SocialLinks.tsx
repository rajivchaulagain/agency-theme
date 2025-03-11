'use client'
import { Group, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function SocialLinks() {
  return (
    <Group gap="xs" mt="md">
      {[IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin].map(
        (Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ActionIcon size="lg" variant="subtle" color="gray">
              <Icon size={18} />
            </ActionIcon>
          </motion.div>
        )
      )}
    </Group>
  );
} 