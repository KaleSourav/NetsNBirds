import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { commonStyles, colors, spacing } from '../styles/commonStyles';
import Navigation from '../components/Navigation';
import ServiceCard from '../components/ServiceCard';
import { router } from 'expo-router';

export default function ServicesScreen() {
  const services = [
    {
      id: 'bird-netting',
      title: 'Bird Netting',
      description: 'Professional bird netting installation for balconies, windows, and open areas. Our high-quality nets are UV-resistant and durable, providing long-lasting protection while maintaining the aesthetic appeal of your property.',
      price: '₹15/sq. ft. (with installation)',
      icon: 'shield-outline',
      imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      features: ['UV-resistant material', 'Professional installation', '2-year warranty', 'Transparent design'],
    },
    {
      id: 'industrial-netting',
      title: 'Industrial Netting',
      description: 'Heavy-duty netting solutions designed for industrial spaces, warehouses, and commercial buildings. Perfect for large-scale bird control and debris protection.',
      price: '₹10/sq. ft.',
      icon: 'business-outline',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      features: ['Heavy-duty material', 'Large area coverage', 'Weather resistant', 'Industrial grade'],
    },
    {
      id: 'bird-spikes',
      title: 'Bird Spikes',
      description: 'Effective bird deterrent spikes that prevent birds from landing and nesting. Available in both PVC and Stainless Steel variants for different requirements.',
      price: 'PVC: ₹120, Stainless Steel: ₹150',
      icon: 'triangle-outline',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      features: ['Humane bird deterrent', 'Easy installation', 'Weather resistant', 'Multiple sizes available'],
    },
    {
      id: 'invisible-grills',
      title: 'Invisible Grills',
      description: 'Modern invisible grills that provide safety without compromising your view. Made from high-tensile steel cables, perfect for balconies and windows.',
      price: '₹120/sq. ft.',
      icon: 'grid-outline',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      features: ['2mm, 2.5mm, 3mm sizes', 'Unobstructed view', 'Child safety', 'Corrosion resistant'],
    },
    {
      id: 'fabrication',
      title: 'Custom Fabrication',
      description: 'Tailored fabrication services for unique requirements. We design and manufacture custom solutions based on your specific needs and space requirements.',
      price: 'Custom Quotation',
      icon: 'construct-outline',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      features: ['Custom design', 'Site measurement', 'Quality materials', 'Expert craftsmanship'],
    },
  ];

  const handleBookService = (serviceId: string) => {
    console.log('Booking service:', serviceId);
    router.push(`/booking?service=${serviceId}`);
  };

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="services" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Our Services</Text>
          <Text style={commonStyles.tagline}>
            Professional bird netting and safety solutions for your home and business
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceWrapper}>
              <ServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                imageUrl={service.imageUrl}
                onBookNow={() => handleBookService(service.id)}
              />
              
              {service.features && (
                <View style={styles.featuresContainer}>
                  <Text style={styles.featuresTitle}>Key Features:</Text>
                  {service.features.map((feature, index) => (
                    <Text key={index} style={styles.featureItem}>
                      • {feature}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
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
  servicesContainer: {
    marginBottom: spacing.xl,
  },
  serviceWrapper: {
    marginBottom: spacing.lg,
  },
  featuresContainer: {
    backgroundColor: colors.backgroundAlt,
    padding: spacing.md,
    borderRadius: 8,
    marginTop: -spacing.md,
    marginHorizontal: spacing.xs,
  },
  featuresTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  featureItem: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    lineHeight: 18,
  },
});