import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, commonStyles } from '../styles/commonStyles';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: string;
  imageUrl?: string;
  image?: ImageSourcePropType;
  onBookNow: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  icon,
  imageUrl,
  image,
  onBookNow,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon as any} size={32} color={colors.primary} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      
      {(image || imageUrl) && (
        <Image 
          source={image ?? { uri: imageUrl as string }} 
          style={styles.image}
          resizeMode="cover"
        />
      )}
      
      <Text style={styles.description}>{description}</Text>
      
      <TouchableOpacity style={styles.bookButton} onPress={onBookNow}>
        <Text style={styles.bookButtonText}>Book Now</Text>
        <Ionicons name="arrow-forward" size={20} color={colors.textLight} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.medium,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.round,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  bookButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.small,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
    marginRight: spacing.sm,
  },
});

export default ServiceCard;
