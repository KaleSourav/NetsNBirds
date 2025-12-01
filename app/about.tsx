import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles, colors, spacing, borderRadius, shadows } from '../styles/commonStyles';
import Navigation from '../components/Navigation';

export default function AboutScreen() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Gupta',
      role: 'Founder & CEO',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Amit Sharma',
      role: 'Installation Manager',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Customer Relations',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality Management System',
      icon: 'ribbon',
    },
    {
      id: 2,
      title: 'Safety Certified',
      description: 'Workplace Safety Standards',
      icon: 'shield-checkmark',
    },
    {
      id: 3,
      title: 'Licensed Contractor',
      description: 'Government Approved',
      icon: 'document-text',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="about" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>About Nets & Birds</Text>
          <Text style={commonStyles.tagline}>
            Your trusted partner for professional bird netting and safety solutions
          </Text>
        </View>

        {/* Company Story */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <View style={styles.storyCard}>
            <Text style={styles.storyText}>
              Founded in 2008, Nets & Birds has been at the forefront of providing innovative bird control and safety solutions. 
              What started as a small family business has grown into one of the most trusted names in the industry.
            </Text>
            <Text style={styles.storyText}>
              Our commitment to quality, customer satisfaction, and innovative solutions has helped us serve over 500 satisfied customers 
              across residential, commercial, and industrial sectors.
            </Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Achievements</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <View key={index} style={styles.achievementCard}>
                <Text style={styles.achievementNumber}>{achievement.number}</Text>
                <Text style={styles.achievementLabel}>{achievement.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Why Choose Us */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={32} color={colors.primary} />
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Professional Excellence</Text>
                <Text style={styles.featureText}>
                  Our team of experienced professionals ensures top-quality installation and service.
                </Text>
              </View>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="shield-checkmark" size={32} color={colors.primary} />
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Quality Materials</Text>
                <Text style={styles.featureText}>
                  We use only premium, UV-resistant materials that are built to last for years.
                </Text>
              </View>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="time" size={32} color={colors.primary} />
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Timely Service</Text>
                <Text style={styles.featureText}>
                  We respect your time and complete all installations within the promised timeframe.
                </Text>
              </View>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="cash" size={32} color={colors.primary} />
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Competitive Pricing</Text>
                <Text style={styles.featureText}>
                  Get the best value for your money with our transparent and competitive pricing.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Team */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <View style={styles.teamContainer}>
            {teamMembers.map((member) => (
              <View key={member.id} style={styles.teamCard}>
                <Image
                  source={{ uri: member.image }}
                  style={styles.teamImage}
                  resizeMode="cover"
                />
                <Text style={styles.teamName}>{member.name}</Text>
                <Text style={styles.teamRole}>{member.role}</Text>
                <Text style={styles.teamExperience}>{member.experience}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications & Licenses</Text>
          <View style={styles.certificationsContainer}>
            {certifications.map((cert) => (
              <View key={cert.id} style={styles.certificationCard}>
                <Ionicons name={cert.icon as any} size={40} color={colors.primary} />
                <Text style={styles.certificationTitle}>{cert.title}</Text>
                <Text style={styles.certificationDescription}>{cert.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mission & Vision */}
        <View style={styles.section}>
          <View style={styles.missionVisionContainer}>
            <View style={styles.missionCard}>
              <Ionicons name="target" size={32} color={colors.primary} />
              <Text style={styles.missionTitle}>Our Mission</Text>
              <Text style={styles.missionText}>
                To provide innovative, reliable, and cost-effective bird control and safety solutions 
                that protect properties while maintaining aesthetic appeal.
              </Text>
            </View>
            
            <View style={styles.visionCard}>
              <Ionicons name="eye" size={32} color={colors.primary} />
              <Text style={styles.visionTitle}>Our Vision</Text>
              <Text style={styles.visionText}>
                To be the leading provider of bird control solutions, setting industry standards 
                for quality, innovation, and customer satisfaction.
              </Text>
            </View>
          </View>
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
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  storyCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.medium,
  },
  storyText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  achievementCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    width: '48%',
    ...shadows.small,
  },
  achievementNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  achievementLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  featuresContainer: {
    gap: spacing.md,
  },
  featureItem: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.small,
  },
  featureContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  teamContainer: {
    gap: spacing.md,
  },
  teamCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    ...shadows.medium,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: spacing.md,
  },
  teamName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  teamRole: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  teamExperience: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  certificationsContainer: {
    gap: spacing.md,
  },
  certificationCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    ...shadows.small,
  },
  certificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  certificationDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  missionVisionContainer: {
    gap: spacing.md,
  },
  missionCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
  },
  visionCard: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  visionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  missionText: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 20,
  },
  visionText: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 20,
  },
});