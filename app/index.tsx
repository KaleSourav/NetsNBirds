import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, spacing, borderRadius, shadows, commonStyles } from '../styles/commonStyles';
import Navigation from '../components/Navigation';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { BIRD_NET_IMG, INDUSTRIAL_NET_IMG, BIRD_SPIKES_IMG, INVISIBLE_GRILLS_IMG, FABRICATION_IMG, HERO_IMG } from '../assets/images/images';

export default function HomeScreen() {
  const services = [
    {
      id: 'bird-netting',
      title: 'Bird Netting',
      description: 'Professional bird netting installation for balconies, windows, and open areas. Protect your space from birds while maintaining aesthetics.',
      price: '₹15/sq. ft.',
      icon: 'shield-outline',
      image: BIRD_NET_IMG,

      
          
      
    },
    {
      id: 'industrial-netting',
      title: 'Industrial Netting',
      description: 'Heavy-duty netting solutions for industrial spaces, warehouses, and commercial buildings.',
      price: '₹10/sq. ft.',
      icon: 'business-outline',
      image: INDUSTRIAL_NET_IMG,
    },
    {
      id: 'bird-spikes',
      title: 'Bird Spikes',
      description: 'Effective bird deterrent spikes available in PVC and Stainless Steel variants.',
      price: 'PVC: ₹120, S.S: ₹150',
      icon: 'triangle-outline',
      image: BIRD_SPIKES_IMG,
    },
    {
      id: 'invisible-grills',
      title: 'Invisible Grills',
      description: 'Modern invisible grills for safety without compromising views. Available in 2mm, 2.5mm, and 3mm sizes.',
      price: '₹120/sq. ft.',
      icon: 'grid-outline',
      image: INVISIBLE_GRILLS_IMG,
    },
    {
      id: 'fabrication',
      title: 'Custom Fabrication',
      description: 'Tailored fabrication services for unique requirements. Contact us for custom quotations.',
      price: 'Custom Quote',
      icon: 'construct-outline',
      image: FABRICATION_IMG,
    },
  ];

  const handleBookService = (serviceId: string) => {
    console.log('Booking service:', serviceId);
    router.push(`/booking?service=${serviceId}`);
  };

  const handleGetQuote = () => {
    console.log('Get quote clicked');
    router.push('/booking');
  };

  const handleViewServices = () => {
    console.log('View services clicked');
    router.push('/services');
  };

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="home" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={HERO_IMG}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Protect Your Space</Text>
            <Text style={styles.heroSubtitle}>
              Professional Bird Netting & Grills Installation at Affordable Prices!
            </Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.primaryButton} onPress={handleGetQuote}>
                <Text style={styles.primaryButtonText}>Get Free Quote</Text>
                <Ionicons name="arrow-forward" size={20} color={colors.textLight} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={handleViewServices}>
                <Text style={styles.secondaryButtonText}>View Services</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={commonStyles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={32} color={colors.primary} />
              <Text style={styles.featureTitle}>Professional</Text>
              <Text style={styles.featureText}>Expert installation team</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="time" size={32} color={colors.primary} />
              <Text style={styles.featureTitle}>Fast Service</Text>
              <Text style={styles.featureText}>Quick installation</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="shield-checkmark" size={32} color={colors.primary} />
              <Text style={styles.featureTitle}>Quality</Text>
              <Text style={styles.featureText}>Premium materials</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="cash" size={32} color={colors.primary} />
              <Text style={styles.featureTitle}>Affordable</Text>
              <Text style={styles.featureText}>Best prices guaranteed</Text>
            </View>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={commonStyles.sectionTitle}>Our Services</Text>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={service.icon}
              // imageUrl={service.imageUrl}
              image={service as any && (service as any).image}
              onBookNow={() => handleBookService(service.id)}
            />
          ))}
        </View>

        {/* Contact CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaText}>
            Contact us today for a free consultation and quote
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/contact')}>
            <Ionicons name="call" size={20} color={colors.textLight} />
            <Text style={styles.ctaButtonText}>Contact Us Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: spacing.xxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    position: 'relative',
    marginBottom: spacing.xl,
  },
  heroImage: {
    width: '100%',
    height: 300,
    borderRadius: borderRadius.lg,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
    marginRight: spacing.sm,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: colors.textLight,
    borderWidth: 2,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
  },
  featuresSection: {
    marginBottom: spacing.xl,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.small,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  featureText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  servicesSection: {
    marginBottom: spacing.xl,
  },
  ctaSection: {
    backgroundColor: colors.primaryLight,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  ctaText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
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
    marginLeft: spacing.sm,
  },
});
