import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles, colors, spacing, borderRadius, shadows } from '../styles/commonStyles';
import Navigation from '../components/Navigation';

export default function GalleryScreen() {
  const galleryItems = [
    {
      id: 1,
      title: 'Balcony Bird Netting',
      description: 'Professional bird netting installation for residential balcony',
      beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      category: 'Bird Netting',
    },
    {
      id: 2,
      title: 'Industrial Warehouse Protection',
      description: 'Large-scale industrial netting for warehouse bird control',
      beforeImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      category: 'Industrial Netting',
    },
    {
      id: 3,
      title: 'Invisible Grills Installation',
      description: 'Modern invisible grills for apartment balcony safety',
      beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      category: 'Invisible Grills',
    },
    {
      id: 4,
      title: 'Bird Spikes Installation',
      description: 'Effective bird deterrent spikes on building ledges',
      beforeImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'Bird Spikes',
    },
    {
      id: 5,
      title: 'Custom Fabrication Work',
      description: 'Tailored netting solution for unique architectural requirements',
      beforeImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      category: 'Custom Fabrication',
    },
    {
      id: 6,
      title: 'Residential Complex',
      description: 'Complete bird netting solution for residential complex',
      beforeImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      category: 'Bird Netting',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Excellent service! The bird netting was installed professionally and has completely solved our bird problem.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Very satisfied with the invisible grills. Great quality and the view is completely unobstructed.',
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'Professional team, quality materials, and reasonable pricing. Highly recommended!',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Ionicons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color={colors.warning}
      />
    ));
  };

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="gallery" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Our Work Gallery</Text>
          <Text style={commonStyles.tagline}>
            See our professional installations and satisfied customers
          </Text>
        </View>

        {/* Gallery Grid */}
        <View style={styles.gallerySection}>
          <Text style={styles.sectionTitle}>Before & After</Text>
          {galleryItems.map((item) => (
            <View key={item.id} style={styles.galleryItem}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              
              <Text style={styles.galleryTitle}>{item.title}</Text>
              <Text style={styles.galleryDescription}>{item.description}</Text>
              
              <View style={styles.imageContainer}>
                <View style={styles.imageWrapper}>
                  <Text style={styles.imageLabel}>Before</Text>
                  <Image
                    source={{ uri: item.beforeImage }}
                    style={styles.galleryImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.imageWrapper}>
                  <Text style={styles.imageLabel}>After</Text>
                  <Image
                    source={{ uri: item.afterImage }}
                    style={styles.galleryImage}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Testimonials */}
        <View style={styles.testimonialsSection}>
          <Text style={styles.sectionTitle}>Customer Reviews</Text>
          {testimonials.map((testimonial) => (
            <View key={testimonial.id} style={styles.testimonialCard}>
              <View style={styles.testimonialHeader}>
                <View>
                  <Text style={styles.customerName}>{testimonial.name}</Text>
                  <Text style={styles.customerLocation}>{testimonial.location}</Text>
                </View>
                <View style={styles.ratingContainer}>
                  {renderStars(testimonial.rating)}
                </View>
              </View>
              <Text style={styles.testimonialText}>{testimonial.comment}</Text>
            </View>
          ))}
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Ionicons name="camera" size={48} color={colors.primary} />
          <Text style={styles.ctaTitle}>Want to see your project here?</Text>
          <Text style={styles.ctaText}>
            Contact us today to get started on your bird netting or safety grill installation
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>
        </View>

        <View style={{ height: spacing.xxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingTop: spacing.lg,
  },
  gallerySection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  galleryItem: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
    ...shadows.medium,
  },
  categoryBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  galleryDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  imageWrapper: {
    flex: 1,
  },
  imageLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  galleryImage: {
    width: '100%',
    height: 120,
    borderRadius: borderRadius.md,
  },
  testimonialsSection: {
    marginBottom: spacing.xl,
  },
  testimonialCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.small,
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  customerLocation: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  testimonialText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  ctaSection: {
    backgroundColor: colors.primaryLight,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  ctaText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
    marginRight: spacing.sm,
  },
});