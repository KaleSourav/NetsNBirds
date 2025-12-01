import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles, colors, spacing, borderRadius, shadows } from '../styles/commonStyles';
import Navigation from '../components/Navigation';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo = [
    {
      id: 1,
      icon: 'call',
      title: 'Phone',
      value: '+91 98765 43210',
      action: () => Linking.openURL('tel:+919876543210'),
    },
    {
      id: 2,
      icon: 'logo-whatsapp',
      title: 'WhatsApp',
      value: '+91 98765 43210',
      action: () => Linking.openURL('https://wa.me/919876543210'),
    },
    {
      id: 3,
      icon: 'mail',
      title: 'Email',
      value: 'info@netsandbirds.com',
      action: () => Linking.openURL('mailto:info@netsandbirds.com'),
    },
    {
      id: 4,
      icon: 'location',
      title: 'Address',
      value: '123 Business Park, Mumbai, Maharashtra 400001',
      action: () => Linking.openURL('https://maps.google.com/?q=123+Business+Park+Mumbai'),
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
  ];

  const handleSubmit = () => {
    if (!name || !phone || !message) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    console.log('Contact form submitted:', {
      name,
      email,
      phone,
      subject,
      message,
    });

    Alert.alert(
      'Message Sent!',
      'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      [{ text: 'OK' }]
    );

    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  const handleQuickContact = (type: string) => {
    switch (type) {
      case 'call':
        Linking.openURL('tel:+919876543210');
        break;
      case 'whatsapp':
        Linking.openURL('https://wa.me/919876543210?text=Hi, I would like to know more about your services.');
        break;
      case 'email':
        Linking.openURL('mailto:info@netsandbirds.com?subject=Service Inquiry');
        break;
    }
  };

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="contact" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Contact Us</Text>
          <Text style={commonStyles.tagline}>
            Get in touch with us for any queries or service requests
          </Text>
        </View>

        {/* Quick Contact Buttons */}
        <View style={styles.quickContactSection}>
          <Text style={styles.sectionTitle}>Quick Contact</Text>
          <View style={styles.quickContactButtons}>
            <TouchableOpacity 
              style={styles.quickContactButton}
              onPress={() => handleQuickContact('call')}
            >
              <Ionicons name="call" size={24} color={colors.textLight} />
              <Text style={styles.quickContactText}>Call Now</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickContactButton, styles.whatsappButton]}
              onPress={() => handleQuickContact('whatsapp')}
            >
              <Ionicons name="logo-whatsapp" size={24} color={colors.textLight} />
              <Text style={styles.quickContactText}>WhatsApp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickContactButton, styles.emailButton]}
              onPress={() => handleQuickContact('email')}
            >
              <Ionicons name="mail" size={24} color={colors.textLight} />
              <Text style={styles.quickContactText}>Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfoSection}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          {contactInfo.map((info) => (
            <TouchableOpacity 
              key={info.id} 
              style={styles.contactInfoCard}
              onPress={info.action}
            >
              <View style={styles.contactInfoIcon}>
                <Ionicons name={info.icon as any} size={24} color={colors.primary} />
              </View>
              <View style={styles.contactInfoContent}>
                <Text style={styles.contactInfoTitle}>{info.title}</Text>
                <Text style={styles.contactInfoValue}>{info.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Business Hours */}
        <View style={styles.businessHoursSection}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <View style={styles.businessHoursCard}>
            {businessHours.map((schedule, index) => (
              <View key={index} style={styles.businessHoursRow}>
                <Text style={styles.businessDay}>{schedule.day}</Text>
                <Text style={styles.businessHours}>{schedule.hours}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.contactFormSection}>
          <Text style={styles.sectionTitle}>Send us a Message</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number *</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email address"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Subject</Text>
              <TextInput
                style={styles.input}
                value={subject}
                onChangeText={setSubject}
                placeholder="Enter message subject"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Message *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={message}
                onChangeText={setMessage}
                placeholder="Enter your message or inquiry"
                multiline
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Ionicons name="send" size={20} color={colors.textLight} />
              <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Note */}
        <View style={styles.mapSection}>
          <View style={styles.mapPlaceholder}>
            <Ionicons name="map" size={48} color={colors.primary} />
            <Text style={styles.mapTitle}>Visit Our Office</Text>
            <Text style={styles.mapText}>
              Maps are not supported on web in Natively. 
              Please use the address above to find our location.
            </Text>
            <TouchableOpacity 
              style={styles.mapButton}
              onPress={() => Linking.openURL('https://maps.google.com/?q=123+Business+Park+Mumbai')}
            >
              <Text style={styles.mapButtonText}>Open in Google Maps</Text>
            </TouchableOpacity>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  quickContactSection: {
    marginBottom: spacing.xl,
  },
  quickContactButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  quickContactButton: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  emailButton: {
    backgroundColor: '#4285F4',
  },
  quickContactText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textLight,
    marginLeft: spacing.sm,
  },
  contactInfoSection: {
    marginBottom: spacing.xl,
  },
  contactInfoCard: {
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  contactInfoIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.round,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  contactInfoContent: {
    flex: 1,
  },
  contactInfoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  contactInfoValue: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  businessHoursSection: {
    marginBottom: spacing.xl,
  },
  businessHoursCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.small,
  },
  businessHoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  businessDay: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  businessHours: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  contactFormSection: {
    marginBottom: spacing.xl,
  },
  form: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.medium,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.background,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
    marginLeft: spacing.sm,
  },
  mapSection: {
    marginBottom: spacing.xl,
  },
  mapPlaceholder: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  mapText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  mapButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
  },
  mapButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textLight,
  },
});