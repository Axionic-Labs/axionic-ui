export const keyframes = {
	'fade-up': {
		from: { opacity: '0', transform: 'translateY(8px)' },
		to: { opacity: '1', transform: 'translateY(0)' },
	},
	'fade-in': {
		from: { opacity: '0' },
		to: { opacity: '1' },
	},
	'fade-out': {
		from: { opacity: '1' },
		to: { opacity: '0' },
	},
	'scale-in': {
		from: { opacity: '0', transform: 'scale(0.95)' },
		to: { opacity: '1', transform: 'scale(1)' },
	},
	'slide-up': {
		from: { transform: 'translateY(100%)' },
		to: { transform: 'translateY(0)' },
	},
	'slide-down': {
		from: { transform: 'translateY(-100%)' },
		to: { transform: 'translateY(0)' },
	},
	'slide-in-right': {
		from: { transform: 'translateX(100%)', opacity: '0' },
		to: { transform: 'translateX(0)', opacity: '1' },
	},
	'slide-in-left': {
		from: { transform: 'translateX(-100%)', opacity: '0' },
		to: { transform: 'translateX(0)', opacity: '1' },
	},
	'fade-slide-up': {
		from: { opacity: '0', transform: 'translateY(12px)' },
		to: { opacity: '1', transform: 'translateY(0)' },
	},
	pulse: {
		'0%, 100%': { opacity: '1' },
		'50%': { opacity: '0.5' },
	},
	spin: {
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(360deg)' },
	},
};
