
// Ensures unhandled errors are surfaced and logged during development

type ErrorHandler = (error: unknown, isFatal?: boolean) => void;

let initialized = false;

export function setupErrorLogging(): void {
  if (initialized) return;
  initialized = true;

  // Global JS errors
  const globalAny = globalThis as unknown as { ErrorUtils?: { setGlobalHandler?: (h: ErrorHandler) => void } };
  const handler: ErrorHandler = (error, isFatal) => {
    // Prefer console.error for visibility in Expo logs
    console.error('[GlobalError]', isFatal ? '(fatal)' : '', error);
  };

  try {
    globalAny?.ErrorUtils?.setGlobalHandler?.(handler);
  } catch (e) { void e; }

  // Unhandled promise rejections
  if (typeof globalThis.addEventListener === 'function') {
    // RN types may not include unhandledrejection
    globalThis.addEventListener('unhandledrejection', (event: any) => {
      console.error('[UnhandledPromiseRejection]', event?.reason ?? event);
    });
  }
}




