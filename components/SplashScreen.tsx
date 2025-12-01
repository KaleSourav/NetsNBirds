
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  withSpring,
  runOnJS,
  interpolate,
  Extrapolate,
  withRepeat,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../styles/commonStyles';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const fadeAnim = useSharedValue(0);
  const birdScale = useSharedValue(0);
  const birdTranslateX = useSharedValue(-width);
  const birdTranslateY = useSharedValue(-50);
  const birdRotate = useSharedValue(0);
  const netScale = useSharedValue(0);
  const netOpacity = useSharedValue(0);
  const netDeployment = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const titleScale = useSharedValue(0.5);
  const backgroundOpacity = useSharedValue(1);
  const wingFlap = useSharedValue(0);

  useEffect(() => {
    console.log('Starting enhanced splash screen animation with bird logo');
    
    // Start the animation sequence
    fadeAnim.value = withTiming(1, { duration: 500 });
    
    // Bird flies in from left side with wing flapping
    birdTranslateX.value = withDelay(
      500,
      withSequence(
        withTiming(width * 0.3, { duration: 1500 }),
        withTiming(width * 0.5, { duration: 500 })
      )
    );
    
    birdTranslateY.value = withDelay(
      500,
      withSequence(
        withTiming(-20, { duration: 800 }),
        withTiming(10, { duration: 400 }),
        withTiming(0, { duration: 300 })
      )
    );
    
    birdScale.value = withDelay(
      500,
      withSpring(1, {
        damping: 12,
        stiffness: 150,
      })
    );

    // Bird rotation for natural flight
    birdRotate.value = withDelay(
      500,
      withSequence(
        withTiming(-10, { duration: 750 }),
        withTiming(5, { duration: 500 }),
        withTiming(0, { duration: 250 })
      )
    );

    // Wing flapping animation
    wingFlap.value = withDelay(
      500,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 150 }),
          withTiming(0, { duration: 150 })
        ),
        8,
        false
      )
    );

    // Net deployment animation - appears after bird settles, positioned to not block title
    netOpacity.value = withDelay(1800, withTiming(1, { duration: 300 }));
    netScale.value = withDelay(
      1800,
      withSpring(1, {
        damping: 8,
        stiffness: 100,
      })
    );

    // Net deployment effect (like unfolding)
    netDeployment.value = withDelay(
      1800,
      withSequence(
        withTiming(0.3, { duration: 200 }),
        withTiming(0.7, { duration: 300 }),
        withTiming(1, { duration: 400 })
      )
    );

    // Title animation - appears before net to avoid blocking
    titleOpacity.value = withDelay(1600, withTiming(1, { duration: 600 }));
    titleScale.value = withDelay(
      1600,
      withSpring(1, {
        damping: 8,
        stiffness: 100,
      })
    );

    // Fade out and complete
    const timer = setTimeout(() => {
      backgroundOpacity.value = withTiming(0, { duration: 800 }, () => {
        runOnJS(onAnimationComplete)();
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: backgroundOpacity.value,
    };
  });

  const birdAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: birdTranslateX.value },
        { translateY: birdTranslateY.value },
        { scale: birdScale.value },
        { rotate: `${birdRotate.value}deg` },
      ],
    };
  });

  const wingAnimatedStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(
      wingFlap.value,
      [0, 1],
      [1, 0.7],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scaleY }],
    };
  });

  const netAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: netOpacity.value,
      transform: [{ scale: netScale.value }],
    };
  });

  const netDeploymentStyle = useAnimatedStyle(() => {
    const clipPath = interpolate(
      netDeployment.value,
      [0, 1],
      [0, 100],
      Extrapolate.CLAMP
    );
    return {
      height: `${clipPath}%`,
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
      transform: [{ scale: titleScale.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, backgroundAnimatedStyle]}>
      <Animated.View style={[styles.content, containerAnimatedStyle]}>
        {/* Background with animated gradient */}
        <View style={styles.backgroundGradient}>
          <View style={styles.cloudLayer} />
        </View>
        
        {/* Bird Animation with the provided logo */}
        <Animated.View style={[styles.birdContainer, birdAnimatedStyle]}>
          <View style={styles.birdWrapper}>
            {/* Bird logo image */}
            <View style={styles.birdBody}>
              <Image 
                source={require('../assets/images/1d1a1abf-fe55-479a-93be-f548118917b8.png')}
                style={styles.birdLogo}
                resizeMode="contain"
              />
            </View>
            
            {/* Animated wings for flight effect */}
            <Animated.View style={[styles.wingLeft, wingAnimatedStyle]}>
              <View style={styles.wing} />
            </Animated.View>
            <Animated.View style={[styles.wingRight, wingAnimatedStyle]}>
              <View style={styles.wing} />
            </Animated.View>
            
            {/* Flight trail */}
            <View style={styles.flightTrail} />
          </View>
        </Animated.View>

        {/* Title Animation - positioned to avoid net blocking */}
        <Animated.View style={[styles.titleContainer, titleAnimatedStyle]}>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Image 
                source={require('../assets/images/1d1a1abf-fe55-479a-93be-f548118917b8.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>Nets & Birds</Text>
          </View>
          <Text style={styles.subtitle}>Professional Bird Protection Solutions</Text>
          <View style={styles.loadingContainer}>
            <View style={styles.loadingBar}>
              <LoadingProgress />
            </View>
            <Text style={styles.loadingText}>Initializing...</Text>
          </View>
        </Animated.View>

        {/* Enhanced Net Animation - positioned to not block title */}
        <Animated.View style={[styles.netContainer, netAnimatedStyle]}>
          <View style={styles.netFrame}>
            <Animated.View style={[styles.netContent, netDeploymentStyle]}>
              <View style={styles.netGrid}>
                {/* Create a more detailed grid pattern */}
                {Array.from({ length: 8 }).map((_, row) => (
                  <View key={row} style={styles.netRow}>
                    {Array.from({ length: 8 }).map((_, col) => (
                      <View key={col} style={styles.netCell}>
                        <View style={styles.netIntersection} />
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </Animated.View>
            <View style={styles.netBorder} />
            
            {/* Net corners */}
            <View style={[styles.netCorner, styles.topLeft]} />
            <View style={[styles.netCorner, styles.topRight]} />
            <View style={[styles.netCorner, styles.bottomLeft]} />
            <View style={[styles.netCorner, styles.bottomRight]} />
          </View>
        </Animated.View>

        {/* Enhanced floating particles */}
        <View style={styles.particlesContainer}>
          {Array.from({ length: 12 }).map((_, index) => (
            <FloatingParticle key={index} delay={index * 150} />
          ))}
        </View>
      </Animated.View>
    </Animated.View>
  );
}

// Enhanced floating particle component
function FloatingParticle({ delay }: { delay: number }) {
  const translateY = useSharedValue(height);
  const translateX = useSharedValue(Math.random() * width);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const animate = () => {
      translateY.value = withSequence(
        withDelay(delay, withTiming(-100, { duration: 3000 })),
        withTiming(height, { duration: 0 })
      );
      opacity.value = withSequence(
        withDelay(delay, withTiming(0.8, { duration: 500 })),
        withDelay(2000, withTiming(0, { duration: 500 })),
        withTiming(0, { duration: 0 })
      );
      scale.value = withSequence(
        withDelay(delay, withSpring(1, { damping: 10 })),
        withDelay(2500, withTiming(0, { duration: 500 })),
        withTiming(0, { duration: 0 })
      );
    };

    animate();
    const interval = setInterval(animate, 4000);
    return () => clearInterval(interval);
  }, [delay]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale: scale.value },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.particle, animatedStyle]}>
      <View style={styles.particleDot} />
    </Animated.View>
  );
}

// Loading progress component
function LoadingProgress() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      1600,
      withTiming(1, { duration: 1200 })
    );
  }, []);

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <Animated.View style={[styles.progressFill, progressStyle]} />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background,
    zIndex: 1000,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primaryLight,
    opacity: 0.3,
  },
  cloudLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  birdContainer: {
    position: 'absolute',
    top: height * 0.25,
    left: 0,
  },
  birdWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 80,
  },
  birdBody: {
    zIndex: 2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  birdLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 5,
  },
  wingLeft: {
    position: 'absolute',
    left: -20,
    top: 10,
    zIndex: 1,
  },
  wingRight: {
    position: 'absolute',
    right: -20,
    top: 10,
    zIndex: 1,
  },
  wing: {
    width: 25,
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 20,
    opacity: 0.7,
  },
  flightTrail: {
    position: 'absolute',
    left: -50,
    top: 25,
    width: 40,
    height: 3,
    backgroundColor: colors.primary,
    opacity: 0.3,
    borderRadius: 2,
  },
  netContainer: {
    position: 'absolute',
    top: height * 0.65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  netFrame: {
    position: 'relative',
    width: 140,
    height: 140,
  },
  netContent: {
    overflow: 'hidden',
    width: '100%',
  },
  netGrid: {
    width: '100%',
    height: 140,
  },
  netRow: {
    flexDirection: 'row',
    height: 17.5,
  },
  netCell: {
    width: 17.5,
    height: 17.5,
    borderWidth: 0.5,
    borderColor: colors.primary,
    opacity: 0.8,
    position: 'relative',
  },
  netIntersection: {
    position: 'absolute',
    top: -1,
    left: -1,
    width: 2,
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: 1,
  },
  netBorder: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: borderRadius.md,
  },
  netCorner: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  topLeft: { top: -7, left: -7 },
  topRight: { top: -7, right: -7 },
  bottomLeft: { bottom: -7, left: -7 },
  bottomRight: { bottom: -7, right: -7 },
  titleContainer: {
    position: 'absolute',
    top: height * 0.4,
    alignItems: 'center',
    width: '80%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  logoIcon: {
    marginRight: spacing.sm,
  },
  logoImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
    textShadowColor: colors.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loadingBar: {
    width: 120,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
  },
  particleDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.primary,
    opacity: 0.6,
  },
});
