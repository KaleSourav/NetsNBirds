
import { Stack, useGlobalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, SafeAreaView } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { useEffect, useState } from 'react';
import { setupErrorLogging } from '../utils/errorLogger';
import SplashScreen from '../components/SplashScreen';

const STORAGE_KEY = 'emulated_device';
let fetchPatched = false;

export default function RootLayout() {
  const { emulate } = useGlobalSearchParams<{ emulate?: string }>();
  return (
    <SafeAreaProvider>
      <LayoutShell emulate={emulate} />
    </SafeAreaProvider>
  );
}

function LayoutShell({ emulate }: { emulate?: string }) {
  const actualInsets = useSafeAreaInsets();
  const [storedEmulate, setStoredEmulate] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setupErrorLogging();
    if (Platform.OS === 'web') {
      if (!fetchPatched && typeof globalThis.fetch === 'function') {
        const originalFetch = globalThis.fetch as any;
        globalThis.fetch = (async (input: any, init?: any) => {
          try {
            return await originalFetch(input, init);
          } catch (e) {
            try {
              const url = typeof input === 'string' ? input : input?.url ?? String(input);
              console.error('[FetchError]', url, e);
            } catch (err) { void err; }
            throw e;
          }
        }) as any;
        fetchPatched = true;
      }
      if (emulate) {
        localStorage.setItem(STORAGE_KEY, emulate);
        setStoredEmulate(emulate);
      } else {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setStoredEmulate(stored);
        }
      }
    }
  }, [emulate]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  let insetsToUse = actualInsets;
  if (Platform.OS === 'web') {
    const simulatedInsets = {
      ios: { top: 47, bottom: 20, left: 0, right: 0 },
      android: { top: 40, bottom: 0, left: 0, right: 0 },
    };
    const deviceToEmulate = storedEmulate || emulate;
    insetsToUse = deviceToEmulate ? simulatedInsets[deviceToEmulate as keyof typeof simulatedInsets] || actualInsets : actualInsets;
  }

  return (
    <SafeAreaView
      style={[
        commonStyles.wrapper,
        {
          paddingTop: insetsToUse.top,
          paddingBottom: insetsToUse.bottom,
          paddingLeft: insetsToUse.left,
          paddingRight: insetsToUse.right,
        },
      ]}
    >
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'default',
        }}
      />
      {showSplash && <SplashScreen onAnimationComplete={handleSplashComplete} />}
    </SafeAreaView>
  );
}
