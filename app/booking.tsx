import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { commonStyles, colors, spacing, borderRadius, shadows } from '../styles/commonStyles';
import Navigation from '../components/Navigation';

export default function BookingScreen() {
  const { service } = useLocalSearchParams();
  const [selectedService, setSelectedService] = useState(service as string || '');
  const [area, setArea] = useState('');
  const [size, setSize] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const services = [
    { id: 'bird-netting', name: 'Bird Netting', price: 15 },
    { id: 'industrial-netting', name: 'Industrial Netting', price: 10 },
    { id: 'bird-spikes', name: 'Bird Spikes', price: 120 },
    { id: 'invisible-grills', name: 'Invisible Grills', price: 120 },
    { id: 'fabrication', name: 'Custom Fabrication', price: 0 },
  ];

  const grillSizes = ['2mm', '2.5mm', '3mm'];
  const spikeTypes = ['PVC (₹120)', 'Stainless Steel (₹150)'];

  const calculateEstimate = () => {
    const selectedServiceData = services.find(s => s.id === selectedService);
    if (!selectedServiceData || !area) return 0;
    
    if (selectedService === 'bird-spikes') {
      return size === 'PVC (₹120)' ? 120 : 150;
    }
    
    if (selectedService === 'fabrication') {
      return 'Custom Quote';
    }
    
    return selectedServiceData.price * parseFloat(area);
  };

  const handleSubmit = () => {
    if (!selectedService || !area || !address || !phone) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    const estimate = calculateEstimate();
    console.log('Booking submitted:', {
      service: selectedService,
      area,
      size,
      address,
      pincode,
      phone,
      email,
      preferredDate,
      notes,
      estimate,
    });

    Alert.alert(
      'Booking Submitted!',
      `Thank you for your request. We'll contact you soon at ${phone} to confirm your booking.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={commonStyles.container}>
      <Navigation currentRoute="booking" />
      
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Book a Service</Text>
          <Text style={commonStyles.tagline}>
            Fill in the details below and we'll get back to you with a quote
          </Text>
        </View>

        <View style={styles.form}>
          {/* Service Selection */}
          <View style={styles.section}>
            <Text style={styles.label}>Select Service *</Text>
            <View style={styles.serviceGrid}>
              {services.map((serviceItem) => (
                <TouchableOpacity
                  key={serviceItem.id}
                  style={[
                    styles.serviceOption,
                    selectedService === serviceItem.id && styles.selectedService
                  ]}
                  onPress={() => setSelectedService(serviceItem.id)}
                >
                  <Text style={[
                    styles.serviceOptionText,
                    selectedService === serviceItem.id && styles.selectedServiceText
                  ]}>
                    {serviceItem.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Area Input */}
          <View style={styles.section}>
            <Text style={styles.label}>Area (sq. ft.) *</Text>
            <TextInput
              style={styles.input}
              value={area}
              onChangeText={setArea}
              placeholder="Enter area in square feet"
              keyboardType="numeric"
            />
          </View>

          {/* Size/Type Selection for specific services */}
          {selectedService === 'invisible-grills' && (
            <View style={styles.section}>
              <Text style={styles.label}>Grill Size</Text>
              <View style={styles.optionsRow}>
                {grillSizes.map((grillSize) => (
                  <TouchableOpacity
                    key={grillSize}
                    style={[
                      styles.optionButton,
                      size === grillSize && styles.selectedOption
                    ]}
                    onPress={() => setSize(grillSize)}
                  >
                    <Text style={[
                      styles.optionText,
                      size === grillSize && styles.selectedOptionText
                    ]}>
                      {grillSize}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {selectedService === 'bird-spikes' && (
            <View style={styles.section}>
              <Text style={styles.label}>Spike Type</Text>
              <View style={styles.optionsColumn}>
                {spikeTypes.map((spikeType) => (
                  <TouchableOpacity
                    key={spikeType}
                    style={[
                      styles.optionButton,
                      size === spikeType && styles.selectedOption
                    ]}
                    onPress={() => setSize(spikeType)}
                  >
                    <Text style={[
                      styles.optionText,
                      size === spikeType && styles.selectedOptionText
                    ]}>
                      {spikeType}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email address"
              keyboardType="email-address"
            />
          </View>

          {/* Address */}
          <View style={styles.section}>
            <Text style={styles.label}>Address *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter your complete address"
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Pin Code *</Text>
            <TextInput
              style={styles.input}
              value={pincode}
              onChangeText={setPincode}
              placeholder="Enter pin code"
              keyboardType="numeric"
            />
          </View>

          {/* Preferred Date */}
          <View style={styles.section}>
            <Text style={styles.label}>Preferred Installation Date</Text>
            <TextInput
              style={styles.input}
              value={preferredDate}
              onChangeText={setPreferredDate}
              placeholder="DD/MM/YYYY"
            />
          </View>

          {/* Additional Notes */}
          <View style={styles.section}>
            <Text style={styles.label}>Additional Notes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Any specific requirements or notes"
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Estimate */}
          {selectedService && area && (
            <View style={styles.estimateContainer}>
              <Text style={styles.estimateTitle}>Estimated Cost</Text>
              <Text style={styles.estimateAmount}>
                {typeof calculateEstimate() === 'number' 
                  ? `₹${calculateEstimate().toLocaleString()}`
                  : calculateEstimate()
                }
              </Text>
              <Text style={styles.estimateNote}>
                *Final price may vary based on site inspection
              </Text>
            </View>
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Ionicons name="checkmark-circle" size={24} color={colors.textLight} />
            <Text style={styles.submitButtonText}>Submit Request</Text>
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
  form: {
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: 16,
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
    height: 80,
    textAlignVertical: 'top',
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  serviceOption: {
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  selectedService: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  serviceOptionText: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
  },
  selectedServiceText: {
    color: colors.textLight,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  optionsColumn: {
    gap: spacing.sm,
  },
  optionButton: {
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flex: 1,
  },
  selectedOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
  },
  selectedOptionText: {
    color: colors.textLight,
  },
  estimateContainer: {
    backgroundColor: colors.primaryLight,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  estimateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  estimateAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  estimateNote: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textLight,
    marginLeft: spacing.sm,
  },
});