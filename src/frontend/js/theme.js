class ThemeService {
    constructor() {
        this.themes = {
            slate: {
                light: {
                    background: 'hsl(0 0% 100%)',
                    foreground: 'hsl(222.2 84% 4.9%)',
                    card: 'hsl(0 0% 100%)',
                    cardForeground: 'hsl(222.2 84% 4.9%)',
                    popover: 'hsl(0 0% 100%)',
                    popoverForeground: 'hsl(222.2 84% 4.9%)',
                    primary: 'hsl(222.2 47.4% 11.2%)',
                    primaryForeground: 'hsl(210 40% 98%)',
                    secondary: 'hsl(210 40% 96.1%)',
                    secondaryForeground: 'hsl(222.2 47.4% 11.2%)',
                    muted: 'hsl(210 40% 96.1%)',
                    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
                    accent: 'hsl(210 40% 96.1%)',
                    accentForeground: 'hsl(222.2 47.4% 11.2%)',
                    border: 'hsl(214.3 31.8% 91.4%)',
                    input: 'hsl(214.3 31.8% 91.4%)',
                    ring: 'hsl(222.2 84% 4.9%)'
                },
                dark: {
                    background: 'hsl(222.2 84% 4.9%)',
                    foreground: 'hsl(210 40% 98%)',
                    card: 'hsl(222.2 84% 4.9%)',
                    cardForeground: 'hsl(210 40% 98%)',
                    popover: 'hsl(222.2 84% 4.9%)',
                    popoverForeground: 'hsl(210 40% 98%)',
                    primary: 'hsl(210 40% 98%)',
                    primaryForeground: 'hsl(222.2 47.4% 11.2%)',
                    secondary: 'hsl(217.2 32.6% 17.5%)',
                    secondaryForeground: 'hsl(210 40% 98%)',
                    muted: 'hsl(217.2 32.6% 17.5%)',
                    mutedForeground: 'hsl(215 20.2% 65.1%)',
                    accent: 'hsl(217.2 32.6% 17.5%)',
                    accentForeground: 'hsl(210 40% 98%)',
                    border: 'hsl(217.2 32.6% 17.5%)',
                    input: 'hsl(217.2 32.6% 17.5%)',
                    ring: 'hsl(212.7 26.8% 83.9%)'
                }
            },
            red: {
                light: {
                    background: 'hsl(0 0% 100%)',
                    foreground: 'hsl(0 0% 3.9%)',
                    card: 'hsl(0 0% 100%)',
                    cardForeground: 'hsl(0 0% 3.9%)',
                    popover: 'hsl(0 0% 100%)',
                    popoverForeground: 'hsl(0 0% 3.9%)',
                    primary: 'hsl(0 72.2% 50.6%)',
                    primaryForeground: 'hsl(0 85.7% 97.3%)',
                    secondary: 'hsl(0 0% 96.1%)',
                    secondaryForeground: 'hsl(0 0% 9%)',
                    muted: 'hsl(0 0% 96.1%)',
                    mutedForeground: 'hsl(0 0% 45.1%)',
                    accent: 'hsl(0 0% 96.1%)',
                    accentForeground: 'hsl(0 0% 9%)',
                    border: 'hsl(0 0% 89.8%)',
                    input: 'hsl(0 0% 89.8%)',
                    ring: 'hsl(0 72.2% 50.6%)'
                },
                dark: {
                    background: 'hsl(0 0% 3.9%)',
                    foreground: 'hsl(0 0% 98%)',
                    card: 'hsl(0 0% 3.9%)',
                    cardForeground: 'hsl(0 0% 98%)',
                    popover: 'hsl(0 0% 3.9%)',
                    popoverForeground: 'hsl(0 0% 98%)',
                    primary: 'hsl(0 72.2% 50.6%)',
                    primaryForeground: 'hsl(0 85.7% 97.3%)',
                    secondary: 'hsl(0 0% 14.9%)',
                    secondaryForeground: 'hsl(0 0% 98%)',
                    muted: 'hsl(0 0% 14.9%)',
                    mutedForeground: 'hsl(0 0% 63.9%)',
                    accent: 'hsl(0 0% 14.9%)',
                    accentForeground: 'hsl(0 0% 98%)',
                    border: 'hsl(0 0% 14.9%)',
                    input: 'hsl(0 0% 14.9%)',
                    ring: 'hsl(0 72.2% 50.6%)'
                }
            },
            zinc: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(240 10% 3.9%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(240 10% 3.9%)",
                    primary: "hsl(240 5.9% 10%)",
                    primaryForeground: "hsl(0 0% 98%)",
                    secondary: "hsl(240 4.8% 95.9%)",
                    secondaryForeground: "hsl(240 5.9% 10%)",
                    muted: "hsl(240 4.8% 95.9%)",
                    mutedForeground: "hsl(240 3.8% 46.1%)",
                    accent: "hsl(240 4.8% 95.9%)",
                    accentForeground: "hsl(240 5.9% 10%)",
                    border: "hsl(240 5.9% 90%)",
                    input: "hsl(240 5.9% 90%)",
                    ring: "hsl(240 5.9% 10%)"
                },
                dark: {
                    background: "hsl(240 10% 3.9%)",
                    foreground: "hsl(0 0% 98%)",
                    card: "hsl(240 10% 3.9%)",
                    cardForeground: "hsl(0 0% 98%)",
                    popover: "hsl(240 10% 3.9%)",
                    popoverForeground: "hsl(0 0% 98%)",
                    primary: "hsl(0 0% 98%)",
                    primaryForeground: "hsl(240 5.9% 10%)",
                    secondary: "hsl(240 3.7% 15.9%)",
                    secondaryForeground: "hsl(0 0% 98%)",
                    muted: "hsl(240 3.7% 15.9%)",
                    mutedForeground: "hsl(240 5% 64.9%)",
                    accent: "hsl(240 3.7% 15.9%)",
                    accentForeground: "hsl(0 0% 98%)",
                    border: "hsl(240 3.7% 15.9%)",
                    input: "hsl(240 3.7% 15.9%)",
                    ring: "hsl(240 4.9% 83.9%)"
                }
            },
            neutral: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(0 0% 3.9%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(0 0% 3.9%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(0 0% 3.9%)",
                    primary: "hsl(0 0% 9%)",
                    primaryForeground: "hsl(0 0% 98%)",
                    secondary: "hsl(0 0% 96.1%)",
                    secondaryForeground: "hsl(0 0% 9%)",
                    muted: "hsl(0 0% 96.1%)",
                    mutedForeground: "hsl(0 0% 45.1%)",
                    accent: "hsl(0 0% 96.1%)",
                    accentForeground: "hsl(0 0% 9%)",
                    border: "hsl(0 0% 89.8%)",
                    input: "hsl(0 0% 89.8%)",
                    ring: "hsl(0 0% 3.9%)"
                },
                dark: {
                    background: "hsl(0 0% 3.9%)",
                    foreground: "hsl(0 0% 98%)",
                    card: "hsl(0 0% 3.9%)",
                    cardForeground: "hsl(0 0% 98%)",
                    popover: "hsl(0 0% 3.9%)",
                    popoverForeground: "hsl(0 0% 98%)",
                    primary: "hsl(0 0% 98%)",
                    primaryForeground: "hsl(0 0% 9%)",
                    secondary: "hsl(0 0% 14.9%)",
                    secondaryForeground: "hsl(0 0% 98%)",
                    muted: "hsl(0 0% 14.9%)",
                    mutedForeground: "hsl(0 0% 63.9%)",
                    accent: "hsl(0 0% 14.9%)",
                    accentForeground: "hsl(0 0% 98%)",
                    border: "hsl(0 0% 14.9%)",
                    input: "hsl(0 0% 14.9%)",
                    ring: "hsl(0 0% 83.9%)"
                }
            },
            stone: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(20 14.3% 4.1%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(20 14.3% 4.1%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(20 14.3% 4.1%)",
                    primary: "hsl(20 14.3% 4.1%)",
                    primaryForeground: "hsl(60 9.1% 97.8%)",
                    secondary: "hsl(60 4.8% 95.9%)",
                    secondaryForeground: "hsl(20 14.3% 4.1%)",
                    muted: "hsl(60 4.8% 95.9%)",
                    mutedForeground: "hsl(25 5.3% 44.7%)",
                    accent: "hsl(60 4.8% 95.9%)",
                    accentForeground: "hsl(20 14.3% 4.1%)",
                    border: "hsl(20 5.9% 90%)",
                    input: "hsl(20 5.9% 90%)",
                    ring: "hsl(20 14.3% 4.1%)"
                },
                dark: {
                    background: "hsl(20 14.3% 4.1%)",
                    foreground: "hsl(60 9.1% 97.8%)",
                    card: "hsl(20 14.3% 4.1%)",
                    cardForeground: "hsl(60 9.1% 97.8%)",
                    popover: "hsl(20 14.3% 4.1%)",
                    popoverForeground: "hsl(60 9.1% 97.8%)",
                    primary: "hsl(60 9.1% 97.8%)",
                    primaryForeground: "hsl(20 14.3% 4.1%)",
                    secondary: "hsl(12 6.5% 15.1%)",
                    secondaryForeground: "hsl(60 9.1% 97.8%)",
                    muted: "hsl(12 6.5% 15.1%)",
                    mutedForeground: "hsl(24 5.4% 63.9%)",
                    accent: "hsl(12 6.5% 15.1%)",
                    accentForeground: "hsl(60 9.1% 97.8%)",
                    border: "hsl(12 6.5% 15.1%)",
                    input: "hsl(12 6.5% 15.1%)",
                    ring: "hsl(24 9.8% 83.9%)"
                }
            },
            gray: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(224 71.4% 4.1%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(224 71.4% 4.1%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(224 71.4% 4.1%)",
                    primary: "hsl(220.9 39.3% 11%)",
                    primaryForeground: "hsl(210 20% 98%)",
                    secondary: "hsl(220 14.3% 95.9%)",
                    secondaryForeground: "hsl(220.9 39.3% 11%)",
                    muted: "hsl(220 14.3% 95.9%)",
                    mutedForeground: "hsl(220 8.9% 46.1%)",
                    accent: "hsl(220 14.3% 95.9%)",
                    accentForeground: "hsl(220.9 39.3% 11%)",
                    border: "hsl(220 13% 91%)",
                    input: "hsl(220 13% 91%)",
                    ring: "hsl(224 71.4% 4.1%)"
                },
                dark: {
                    background: "hsl(224 71.4% 4.1%)",
                    foreground: "hsl(210 20% 98%)",
                    card: "hsl(224 71.4% 4.1%)",
                    cardForeground: "hsl(210 20% 98%)",
                    popover: "hsl(224 71.4% 4.1%)",
                    popoverForeground: "hsl(210 20% 98%)",
                    primary: "hsl(210 20% 98%)",
                    primaryForeground: "hsl(220.9 39.3% 11%)",
                    secondary: "hsl(215 27.9% 16.9%)",
                    secondaryForeground: "hsl(210 20% 98%)",
                    muted: "hsl(215 27.9% 16.9%)",
                    mutedForeground: "hsl(217.9 10.6% 64.9%)",
                    accent: "hsl(215 27.9% 16.9%)",
                    accentForeground: "hsl(210 20% 98%)",
                    border: "hsl(215 27.9% 16.9%)",
                    input: "hsl(215 27.9% 16.9%)",
                    ring: "hsl(216 12.2% 83.9%)"
                }
            },
            rose: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(240 10% 3.9%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(240 10% 3.9%)",
                    primary: "hsl(346.8 77.2% 49.8%)",
                    primaryForeground: "hsl(355.7 100% 97.3%)",
                    secondary: "hsl(240 4.8% 95.9%)",
                    secondaryForeground: "hsl(240 5.9% 10%)",
                    muted: "hsl(240 4.8% 95.9%)",
                    mutedForeground: "hsl(240 3.8% 46.1%)",
                    accent: "hsl(240 4.8% 95.9%)",
                    accentForeground: "hsl(240 5.9% 10%)",
                    border: "hsl(240 5.9% 90%)",
                    input: "hsl(240 5.9% 90%)",
                    ring: "hsl(346.8 77.2% 49.8%)"
                },
                dark: {
                    background: "hsl(240 10% 3.9%)",
                    foreground: "hsl(0 0% 98%)",
                    card: "hsl(240 10% 3.9%)",
                    cardForeground: "hsl(0 0% 98%)",
                    popover: "hsl(240 10% 3.9%)",
                    popoverForeground: "hsl(0 0% 98%)",
                    primary: "hsl(346.8 77.2% 49.8%)",
                    primaryForeground: "hsl(355.7 100% 97.3%)",
                    secondary: "hsl(240 3.7% 15.9%)",
                    secondaryForeground: "hsl(0 0% 98%)",
                    muted: "hsl(240 3.7% 15.9%)",
                    mutedForeground: "hsl(240 5% 64.9%)",
                    accent: "hsl(240 3.7% 15.9%)",
                    accentForeground: "hsl(0 0% 98%)",
                    border: "hsl(240 3.7% 15.9%)",
                    input: "hsl(240 3.7% 15.9%)",
                    ring: "hsl(346.8 77.2% 49.8%)"
                }
            },
            orange: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(20 14.3% 4.1%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(20 14.3% 4.1%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(20 14.3% 4.1%)",
                    primary: "hsl(24.6 95% 53.1%)",
                    primaryForeground: "hsl(60 9.1% 97.8%)",
                    secondary: "hsl(60 4.8% 95.9%)",
                    secondaryForeground: "hsl(24 9.8% 10%)",
                    muted: "hsl(60 4.8% 95.9%)",
                    mutedForeground: "hsl(25 5.3% 44.7%)",
                    accent: "hsl(60 4.8% 95.9%)",
                    accentForeground: "hsl(24 9.8% 10%)",
                    border: "hsl(20 5.9% 90%)",
                    input: "hsl(20 5.9% 90%)",
                    ring: "hsl(24.6 95% 53.1%)"
                },
                dark: {
                    background: "hsl(20 14.3% 4.1%)",
                    foreground: "hsl(60 9.1% 97.8%)",
                    card: "hsl(20 14.3% 4.1%)",
                    cardForeground: "hsl(60 9.1% 97.8%)",
                    popover: "hsl(20 14.3% 4.1%)",
                    popoverForeground: "hsl(60 9.1% 97.8%)",
                    primary: "hsl(20.5 90.2% 48.2%)",
                    primaryForeground: "hsl(60 9.1% 97.8%)",
                    secondary: "hsl(12 6.5% 15.1%)",
                    secondaryForeground: "hsl(60 9.1% 97.8%)",
                    muted: "hsl(12 6.5% 15.1%)",
                    mutedForeground: "hsl(24 5.4% 63.9%)",
                    accent: "hsl(12 6.5% 15.1%)",
                    accentForeground: "hsl(60 9.1% 97.8%)",
                    border: "hsl(12 6.5% 15.1%)",
                    input: "hsl(12 6.5% 15.1%)",
                    ring: "hsl(20.5 90.2% 48.2%)"
                }
            },
            green: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(240 10% 3.9%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(240 10% 3.9%)",
                    primary: "hsl(142.1 76.2% 36.3%)",
                    primaryForeground: "hsl(355.7 100% 97.3%)",
                    secondary: "hsl(240 4.8% 95.9%)",
                    secondaryForeground: "hsl(240 5.9% 10%)",
                    muted: "hsl(240 4.8% 95.9%)",
                    mutedForeground: "hsl(240 3.8% 46.1%)",
                    accent: "hsl(240 4.8% 95.9%)",
                    accentForeground: "hsl(240 5.9% 10%)",
                    border: "hsl(240 5.9% 90%)",
                    input: "hsl(240 5.9% 90%)",
                    ring: "hsl(142.1 76.2% 36.3%)"
                },
                dark: {
                    background: "hsl(240 10% 3.9%)",
                    foreground: "hsl(0 0% 98%)",
                    card: "hsl(240 10% 3.9%)",
                    cardForeground: "hsl(0 0% 98%)",
                    popover: "hsl(240 10% 3.9%)",
                    popoverForeground: "hsl(0 0% 98%)",
                    primary: "hsl(142.1 70.6% 45.3%)",
                    primaryForeground: "hsl(144.9 80.4% 10%)",
                    secondary: "hsl(240 3.7% 15.9%)",
                    secondaryForeground: "hsl(0 0% 98%)",
                    muted: "hsl(240 3.7% 15.9%)",
                    mutedForeground: "hsl(240 5% 64.9%)",
                    accent: "hsl(240 3.7% 15.9%)",
                    accentForeground: "hsl(0 0% 98%)",
                    border: "hsl(240 3.7% 15.9%)",
                    input: "hsl(240 3.7% 15.9%)",
                    ring: "hsl(142.1 70.6% 45.3%)"
                }
            },
            blue: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(222.2 84% 4.9%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(222.2 84% 4.9%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(222.2 84% 4.9%)",
                    primary: "hsl(221.2 83.2% 53.3%)",
                    primaryForeground: "hsl(210 40% 98%)",
                    secondary: "hsl(210 40% 96.1%)",
                    secondaryForeground: "hsl(222.2 47.4% 11.2%)",
                    muted: "hsl(210 40% 96.1%)",
                    mutedForeground: "hsl(215.4 16.3% 46.9%)",
                    accent: "hsl(210 40% 96.1%)",
                    accentForeground: "hsl(222.2 47.4% 11.2%)",
                    border: "hsl(214.3 31.8% 91.4%)",
                    input: "hsl(214.3 31.8% 91.4%)",
                    ring: "hsl(221.2 83.2% 53.3%)"
                },
                dark: {
                    background: "hsl(222.2 84% 4.9%)",
                    foreground: "hsl(210 40% 98%)",
                    card: "hsl(222.2 84% 4.9%)",
                    cardForeground: "hsl(210 40% 98%)",
                    popover: "hsl(222.2 84% 4.9%)",
                    popoverForeground: "hsl(210 40% 98%)",
                    primary: "hsl(217.2 91.2% 59.8%)",
                    primaryForeground: "hsl(222.2 47.4% 11.2%)",
                    secondary: "hsl(217.2 32.6% 17.5%)",
                    secondaryForeground: "hsl(210 40% 98%)",
                    muted: "hsl(217.2 32.6% 17.5%)",
                    mutedForeground: "hsl(215 20.2% 65.1%)",
                    accent: "hsl(217.2 32.6% 17.5%)",
                    accentForeground: "hsl(210 40% 98%)",
                    border: "hsl(217.2 32.6% 17.5%)",
                    input: "hsl(217.2 32.6% 17.5%)",
                    ring: "hsl(224.3 76.3% 48%)"
                }
            },
            yellow: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(20 14.3% 4.1%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(20 14.3% 4.1%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(20 14.3% 4.1%)",
                    primary: "hsl(47.9 95.8% 53.1%)",
                    primaryForeground: "hsl(26 83.3% 14.1%)",
                    secondary: "hsl(60 4.8% 95.9%)",
                    secondaryForeground: "hsl(24 9.8% 10%)",
                    muted: "hsl(60 4.8% 95.9%)",
                    mutedForeground: "hsl(25 5.3% 44.7%)",
                    accent: "hsl(60 4.8% 95.9%)",
                    accentForeground: "hsl(24 9.8% 10%)",
                    border: "hsl(20 5.9% 90%)",
                    input: "hsl(20 5.9% 90%)",
                    ring: "hsl(35.5 91.7% 32.9%)"
                },
                dark: {
                    background: "hsl(20 14.3% 4.1%)",
                    foreground: "hsl(60 9.1% 97.8%)",
                    card: "hsl(20 14.3% 4.1%)",
                    cardForeground: "hsl(60 9.1% 97.8%)",
                    popover: "hsl(20 14.3% 4.1%)",
                    popoverForeground: "hsl(60 9.1% 97.8%)",
                    primary: "hsl(47.9 95.8% 53.1%)",
                    primaryForeground: "hsl(26 83.3% 14.1%)",
                    secondary: "hsl(12 6.5% 15.1%)",
                    secondaryForeground: "hsl(60 9.1% 97.8%)",
                    muted: "hsl(12 6.5% 15.1%)",
                    mutedForeground: "hsl(24 5.4% 63.9%)",
                    accent: "hsl(12 6.5% 15.1%)",
                    accentForeground: "hsl(60 9.1% 97.8%)",
                    border: "hsl(12 6.5% 15.1%)",
                    input: "hsl(12 6.5% 15.1%)",
                    ring: "hsl(35.5 91.7% 32.9%)"
                }
            },
            violet: {
                light: {
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(224 71.4% 4.1%)",
                    card: "hsl(0 0% 100%)",
                    cardForeground: "hsl(224 71.4% 4.1%)",
                    popover: "hsl(0 0% 100%)",
                    popoverForeground: "hsl(224 71.4% 4.1%)",
                    primary: "hsl(262.1 83.3% 57.8%)",
                    primaryForeground: "hsl(210 20% 98%)",
                    secondary: "hsl(220 14.3% 95.9%)",
                    secondaryForeground: "hsl(220.9 39.3% 11%)",
                    muted: "hsl(220 14.3% 95.9%)",
                    mutedForeground: "hsl(220 8.9% 46.1%)",
                    accent: "hsl(220 14.3% 95.9%)",
                    accentForeground: "hsl(220.9 39.3% 11%)",
                    border: "hsl(220 13% 91%)",
                    input: "hsl(220 13% 91%)",
                    ring: "hsl(262.1 83.3% 57.8%)"
                },
                dark: {
                    background: "hsl(224 71.4% 4.1%)",
                    foreground: "hsl(210 20% 98%)",
                    card: "hsl(224 71.4% 4.1%)",
                    cardForeground: "hsl(210 20% 98%)",
                    popover: "hsl(224 71.4% 4.1%)",
                    popoverForeground: "hsl(210 20% 98%)",
                    primary: "hsl(263.4 70% 50.4%)",
                    primaryForeground: "hsl(210 20% 98%)",
                    secondary: "hsl(215 27.9% 16.9%)",
                    secondaryForeground: "hsl(210 20% 98%)",
                    muted: "hsl(215 27.9% 16.9%)",
                    mutedForeground: "hsl(217.9 10.6% 64.9%)",
                    accent: "hsl(215 27.9% 16.9%)",
                    accentForeground: "hsl(210 20% 98%)",
                    border: "hsl(215 27.9% 16.9%)",
                    input: "hsl(215 27.9% 16.9%)",
                    ring: "hsl(263.4 70% 50.4%)"
                }
            }
        };

        this.init();
    }

    init() {
        // Load saved theme or use default
        const savedTheme = localStorage.getItem('theme-name') || 'slate';
        const isDark = localStorage.getItem('theme-mode') === 'dark';
        
        // Apply initial theme
        this.setTheme(savedTheme, isDark);
    }

    setTheme(themeName, isDark = false) {
        if (!this.themes[themeName]) {
            console.warn(`Theme "${themeName}" not found, using slate`);
            themeName = 'slate';
        }

        const mode = isDark ? 'dark' : 'light';
        const theme = this.themes[themeName][mode];

        // Apply theme colors
        Object.entries(theme).forEach(([key, value]) => {
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            document.documentElement.style.setProperty(cssVar, value);
        });

        // Update body class for dark/light mode
        document.body.classList.toggle('dark', isDark);

        // Store theme preference
        localStorage.setItem('theme-name', themeName);
        localStorage.setItem('theme-mode', mode);
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme-name') || 'slate';
        const isDark = localStorage.getItem('theme-mode') === 'light'; // Toggle the current state
        this.setTheme(currentTheme, isDark);
    }

    // Get available theme names
    getAvailableThemes() {
        return Object.keys(this.themes);
    }

    // Get current theme name
    getCurrentTheme() {
        return {
            name: localStorage.getItem('theme-name') || 'slate',
            mode: localStorage.getItem('theme-mode') || 'light'
        };
    }
}

// Create and export Theme instance
const theme = new ThemeService();
window.theme = theme; // Make it accessible globally