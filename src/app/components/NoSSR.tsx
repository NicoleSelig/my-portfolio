"use client";

import { useEffect, useState, ReactNode } from 'react';

interface NoSSRProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that prevents server-side rendering of its children
 * Useful for components that rely on browser APIs or need to avoid hydration errors
 */
export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
}
