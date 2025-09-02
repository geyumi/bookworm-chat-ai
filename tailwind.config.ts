import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Primary - Literary Blue */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					muted: 'hsl(var(--primary-muted))',
					glow: 'hsl(var(--primary-glow))'
				},
				
				/* Secondary - Mystical Purple */
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					glow: 'hsl(var(--secondary-glow))'
				},
				
				/* Accent - Golden Cyber */
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					muted: 'hsl(var(--accent-muted))',
					glow: 'hsl(var(--accent-glow))'
				},
				
				/* Tertiary - Emerald Tech */
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					glow: 'hsl(var(--tertiary-glow))'
				},
				
				/* Status Colors */
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				
				/* Surface Elements */
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				/* Chat Interface Colors */
				'user-bubble': 'hsl(var(--user-bubble))',
				'user-bubble-foreground': 'hsl(var(--user-bubble-foreground))',
				'user-bubble-glow': 'hsl(var(--user-bubble-glow))',
				'bot-bubble': 'hsl(var(--bot-bubble))',
				'bot-bubble-foreground': 'hsl(var(--bot-bubble-foreground))',
				'bot-bubble-border': 'hsl(var(--bot-bubble-border))',
				
				/* Book Card Elements */
				'book-card': 'hsl(var(--book-card))',
				'book-card-border': 'hsl(var(--book-card-border))',
				'book-card-hover': 'hsl(var(--book-card-hover))',
				'book-category': 'hsl(var(--book-category))',
				'book-category-foreground': 'hsl(var(--book-category-foreground))',
				
				/* Interactive States */
				'hover-overlay': 'hsl(var(--hover-overlay))',
				'active-overlay': 'hsl(var(--active-overlay))',
				
				/* Sidebar (keeping original) */
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				
				/* Chat Animation Keyframes */
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'typing-dots': {
					'0%, 60%, 100%': {
						transform: 'translateY(0)'
					},
					'30%': {
						transform: 'translateY(-10px)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				/* Chat Animations */
				'fade-in-up': 'fade-in-up 0.4s ease-out',
				'typing-dots': 'typing-dots 1.5s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			},
			
			/* Enhanced Design System */
			boxShadow: {
				'chat': '0 8px 32px hsl(var(--primary) / 0.15)',
				'book-card': '0 4px 16px hsl(var(--primary) / 0.1)',
				'message': '0 2px 12px hsl(var(--primary) / 0.08)',
				'glow': '0 0 32px hsl(var(--primary-glow) / 0.3)',
				'accent-glow': '0 0 24px hsl(var(--accent-glow) / 0.2)',
				'input': '0 0 0 1px hsl(var(--input-focus) / 0.3), 0 0 16px hsl(var(--primary) / 0.1)'
			},
			
			/* Background Patterns */
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
