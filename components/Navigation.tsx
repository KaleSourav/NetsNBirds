
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../styles/commonStyles';
import { router } from 'expo-router';

type RoutePath = '/' | '/services' | '/booking' | '/gallery' | '/about' | '/contact';

interface NavigationProps {
  currentRoute?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentRoute = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { id: string; title: string; icon: string; route: RoutePath }[] = [
    { id: 'home', title: 'Home', icon: 'home-outline', route: '/' },
    { id: 'services', title: 'Services', icon: 'construct-outline', route: '/services' },
    { id: 'booking', title: 'Book Service', icon: 'calendar-outline', route: '/booking' },
    { id: 'gallery', title: 'Gallery', icon: 'images-outline', route: '/gallery' },
    { id: 'about', title: 'About Us', icon: 'information-circle-outline', route: '/about' },
    { id: 'contact', title: 'Contact', icon: 'call-outline', route: '/contact' },
  ];

  const handleNavigation = (route: RoutePath) => {
    console.log('Navigating to:', route);
    setIsMenuOpen(false);
    if (route !== '/') {
      router.push(route);
    } else {
      router.replace('/');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <View style={styles.birdLogo}>
            <Image 
              source={require('../assets/icon.png')}
              style={styles.birdLogoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.logoText}>Nets & Birds</Text>
        </View>
        
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Ionicons 
            name={isMenuOpen ? 'close' : 'menu'} 
            size={28} 
            color={colors.text} 
          />
        </TouchableOpacity>
      </View>

      {/* Slide-down Menu */}
      {isMenuOpen && (
        <View style={styles.menuOverlay}>
          <ScrollView style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.menuItem,
                  currentRoute === item.id && styles.activeMenuItem
                ]}
                onPress={() => handleNavigation(item.route)}
              >
                <Ionicons 
                  name={item.icon as any} 
                  size={24} 
                  color={currentRoute === item.id ? colors.textLight : colors.text} 
                />
                <Text style={[
                  styles.menuItemText,
                  currentRoute === item.id && styles.activeMenuItemText
                ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    ...shadows.small,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  birdLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
    padding: 2,
  },
  birdLogoImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  menuButton: {
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  menuOverlay: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    ...shadows.large,
    borderBottomLeftRadius: borderRadius.lg,
    borderBottomRightRadius: borderRadius.lg,
    maxHeight: 400,
  },
  menuContainer: {
    padding: spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },
  activeMenuItem: {
    backgroundColor: colors.primary,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginLeft: spacing.md,
  },
  activeMenuItemText: {
    color: colors.textLight,
  },
});

export default Navigation;
