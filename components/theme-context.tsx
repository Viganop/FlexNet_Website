'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ColorTheme = 'blue' | 'green' | 'purple' | 'orange' | 'red';
export type DarkMode  = 'dark' | 'light';

interface ThemeContextValue {
  darkMode:    DarkMode;
  colorTheme:  ColorTheme;
  toggleDark:  () => void;
  setColor:    (c: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  darkMode:   'dark',
  colorTheme: 'blue',
  toggleDark: () => {},
  setColor:   () => {},
});

export const useTheme = () => useContext(ThemeContext);

// oklch values for each accent color
const COLOR_TOKENS: Record<ColorTheme, { primary: string; accent: string; ring: string }> = {
  blue:   { primary: 'oklch(0.82 0.12 205)', accent: 'oklch(0.75 0.15 205)', ring: 'oklch(0.75 0.15 205)' },
  green:  { primary: 'oklch(0.80 0.17 145)', accent: 'oklch(0.72 0.18 145)', ring: 'oklch(0.72 0.18 145)' },
  purple: { primary: 'oklch(0.78 0.18 295)', accent: 'oklch(0.70 0.20 295)', ring: 'oklch(0.70 0.20 295)' },
  orange: { primary: 'oklch(0.80 0.18  55)', accent: 'oklch(0.72 0.20  55)', ring: 'oklch(0.72 0.20  55)' },
  red:    { primary: 'oklch(0.70 0.22  25)', accent: 'oklch(0.63 0.24  25)', ring: 'oklch(0.63 0.24  25)' },
};

const applyTokens = (dark: DarkMode, color: ColorTheme) => {
  const root = document.documentElement;
  const { primary, accent, ring } = COLOR_TOKENS[color];

  root.setAttribute('data-theme', dark);
  root.style.setProperty('--primary', primary);
  root.style.setProperty('--accent',  accent);
  root.style.setProperty('--ring',    ring);
  // sidebar mirrors
  root.style.setProperty('--sidebar-primary', primary);
  root.style.setProperty('--sidebar-ring',    ring);

  if (dark === 'light') {
    root.style.setProperty('--background',        'oklch(0.97 0.005 250)');
    root.style.setProperty('--foreground',        'oklch(0.10 0.02  250)');
    root.style.setProperty('--card',              'oklch(0.93 0.005 250)');
    root.style.setProperty('--card-foreground',   'oklch(0.10 0.02  250)');
    root.style.setProperty('--secondary',         'oklch(0.88 0.005 250)');
    root.style.setProperty('--muted',             'oklch(0.90 0.005 250)');
    root.style.setProperty('--muted-foreground',  'oklch(0.45 0.01  250)');
    root.style.setProperty('--border',            'oklch(0.80 0.01  250)');
    root.style.setProperty('--primary-foreground','oklch(0.97 0     0  )');
    root.style.setProperty('--popover',           'oklch(0.95 0.005 250)');
    root.style.setProperty('--popover-foreground','oklch(0.10 0.02  250)');
  } else {
    root.style.setProperty('--background',        'oklch(0.12 0.02 250)');
    root.style.setProperty('--foreground',        'oklch(0.98 0    0  )');
    root.style.setProperty('--card',              'oklch(0.16 0.02 250)');
    root.style.setProperty('--card-foreground',   'oklch(0.98 0    0  )');
    root.style.setProperty('--secondary',         'oklch(0.20 0.02 250)');
    root.style.setProperty('--muted',             'oklch(0.18 0.02 250)');
    root.style.setProperty('--muted-foreground',  'oklch(0.65 0    0  )');
    root.style.setProperty('--border',            'oklch(0.25 0.02 250)');
    root.style.setProperty('--primary-foreground','oklch(0.12 0.02 250)');
    root.style.setProperty('--popover',           'oklch(0.14 0.02 250)');
    root.style.setProperty('--popover-foreground','oklch(0.98 0    0  )');
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode,   setDarkMode]   = useState<DarkMode>('dark');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');

  // on mount: read saved prefs
  useEffect(() => {
    const savedDark  = (localStorage.getItem('darkMode')   as DarkMode  ) || 'dark';
    const savedColor = (localStorage.getItem('colorTheme') as ColorTheme) || 'blue';
    setDarkMode(savedDark);
    setColorTheme(savedColor);
    applyTokens(savedDark, savedColor);
  }, []);

  const toggleDark = () => {
    const next = darkMode === 'dark' ? 'light' : 'dark';
    setDarkMode(next);
    localStorage.setItem('darkMode', next);
    applyTokens(next, colorTheme);
  };

  const setColor = (c: ColorTheme) => {
    setColorTheme(c);
    localStorage.setItem('colorTheme', c);
    applyTokens(darkMode, c);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, colorTheme, toggleDark, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
