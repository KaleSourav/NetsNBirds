import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#FF5252',        // Light red primary
  primaryLight: '#FFCDD2',   // Very light red
  primaryDark: '#D32F2F',    // Darker red
  secondary: '#FFFFFF',      // White
  background: '#FFFFFF',     // White background
  backgroundAlt: '#FAFAFA',  // Very light gray
  text: '#212121',           // Dark text for readability
  textSecondary: '#757575',  // Gray text
  textLight: '#FFFFFF',      // White text
  accent: '#FF5252',         // Light red accent
  card: '#FFFFFF',           // White card background
  border: '#E0E0E0',         // Light border
  shadow: 'rgba(255, 82, 82, 0.1)', // Light red shadow
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 50,
};

export const shadows = {
  small: {
    boxShadow: '0px 2px 8px rgba(255, 82, 82, 0.1)',
    elevation: 2,
  },
  medium: {
    boxShadow: '0px 4px 16px rgba(255, 82, 82, 0.15)',
    elevation: 4,
  },
  large: {
    boxShadow: '0px 8px 24px rgba(255, 82, 82, 0.2)',
    elevation: 8,
  },
};

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    ...shadows.medium,
  },
  secondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  text: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: spacing.md,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 24,
  },
  textSecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  textLight: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textLight,
    lineHeight: 24,
  },
  section: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  serviceCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.medium,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.primary,
  },
  iconLarge: {
    width: 48,
    height: 48,
    tintColor: colors.primary,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 26,
  },
});