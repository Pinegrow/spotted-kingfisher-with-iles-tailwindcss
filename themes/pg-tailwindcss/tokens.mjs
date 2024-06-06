/* Pinegrow generated Design Panel Begin */
/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */

const pg_colors = {gray: {'50': '#f9fafb',
'100': '#f3f4f6',
'200': '#e5e7eb',
'300': '#d1d5db',
'400': '#9ca3af',
'500': '#6b7280',
'600': '#4b5563',
'700': '#374151',
'800': '#1f2937',
'900': '#111827',
},
red: {'50': '#fef2f2',
'100': '#fee2e2',
'200': '#fecaca',
'300': '#fca5a5',
'400': '#f87171',
'500': '#ef4444',
'600': '#dc2626',
'700': '#b91c1c',
'800': '#991b1b',
'900': '#7f1d1d',
},
yellow: {'50': '#fffbeb',
'100': '#fef3c7',
'200': '#fde68a',
'300': '#fcd34d',
'400': '#fbbf24',
'500': '#f59e0b',
'600': '#d97706',
'700': '#b45309',
'800': '#92400e',
'900': '#78350f',
},
green: {'50': '#ecfdf5',
'100': '#d1fae5',
'200': '#a7f3d0',
'300': '#6ee7b7',
'400': '#34d399',
'500': '#10b981',
'600': '#059669',
'700': '#047857',
'800': '#065f46',
'900': '#064e3b',
},
blue: {'50': '#eff6ff',
'100': '#dbeafe',
'200': '#bfdbfe',
'300': '#93c5fd',
'400': '#60a5fa',
'500': '#3b82f6',
'600': '#2563eb',
'700': '#1d4ed8',
'800': '#1e40af',
'900': '#1e3a8a',
},
indigo: {'50': '#eef2ff',
'100': '#e0e7ff',
'200': '#c7d2fe',
'300': '#a5b4fc',
'400': '#818cf8',
'500': '#6366f1',
'600': '#4f46e5',
'700': '#4338ca',
'800': '#3730a3',
'900': '#312e81',
},
purple: {'50': '#f5f3ff',
'100': '#ede9fe',
'200': '#ddd6fe',
'300': '#c4b5fd',
'400': '#a78bfa',
'500': '#8b5cf6',
'600': '#7c3aed',
'700': '#6d28d9',
'800': '#5b21b6',
'900': '#4c1d95',
},
pink: {'50': '#fdf2f8',
'100': '#fce7f3',
'200': '#fbcfe8',
'300': '#f9a8d4',
'400': '#f472b6',
'500': '#ec4899',
'600': '#db2777',
'700': '#be185d',
'800': '#9d174d',
'900': '#831843',
},
primary: {'50': '#ecf6fa',
'100': '#d4edf4',
'200': '#bbe4ee',
'300': '#a0dae9',
'400': '#84d1e3',
'500': '#63c7de',
'600': '#34bed8',
'700': '#30aec6',
'800': '#2b9eb4',
'900': '#278fa2',
'950': '#237f91',
DEFAULT: '#1f7080',
},
secondary: {'50': '#eeeceb',
'100': '#d7ccc3',
'200': '#bfae9c',
'300': '#a79077',
'400': '#8f7354',
'500': '#765732',
'600': '#5d3d10',
'700': '#55380f',
'800': '#4d330e',
'900': '#462e0d',
'950': '#3e290c',
DEFAULT: '#372409',
},
tertiary: {'50': '#f7f2ef',
'100': '#efe3d9',
'200': '#e7d3c3',
'300': '#dfc4ad',
'400': '#d6b598',
'500': '#cda683',
'600': '#c3976f',
'700': '#b28a66',
'800': '#a27e5c',
'900': '#927153',
'950': '#83654a',
DEFAULT: '#735942',
},
neutral: {'50': '#ebebeb',
'100': '#c4c4c4',
'200': '#9f9f9f',
'300': '#7b7b7b',
'400': '#585858',
'500': '#383838',
'600': '#1b1b1b',
'700': '#191919',
'800': '#171717',
'900': '#151515',
'950': '#131313',
DEFAULT: '#101010',
},
success: {'50': '#ecf0ec',
'100': '#cdddcb',
'200': '#aec9ab',
'300': '#90b68c',
'400': '#71a36d',
'500': '#519050',
'600': '#2e7d32',
'700': '#2a722e',
'800': '#26682a',
'900': '#235e26',
'950': '#1f5422',
DEFAULT: '#519050',
},
warning: {'50': '#fcefeb',
'100': '#ffd9c7',
'200': '#ffc4a4',
'300': '#ffae7f',
'400': '#fb985c',
'500': '#f58238',
'600': '#ed6c02',
'700': '#d96302',
'800': '#c55a02',
'900': '#b25102',
'950': '#9f4801',
DEFAULT: '#f58238',
},
error: {'50': '#f9ecec',
'100': '#f9cfca',
'200': '#f6b2a9',
'300': '#f19488',
'400': '#e97669',
'500': '#df564c',
'600': '#d32f2f',
'700': '#c12b2b',
'800': '#b02727',
'900': '#9e2323',
'950': '#8d2020',
DEFAULT: '#df564c',
},
info: {'50': '#ebf1f9',
'100': '#d0dff2',
'200': '#b4ccec',
'300': '#96bbe5',
'400': '#76a9df',
'500': '#5098d8',
'600': '#0288d1',
'700': '#027cbf',
'800': '#0271ae',
'900': '#02669d',
'950': '#015b8c',
DEFAULT: '#5098d8',
},
}

const pg_fonts = {sans: ["'Kalam', sans-serif",
],
serif: ["'Ruda', sans-serif",
],
}   

const pg_font_urls = ['https://fonts.googleapis.com/css?family=Kalam:300,400,700|Ruda:400,500,600,700,800,900&display=swap',
]

const pg_backgrounds = {'design-image': "url('https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80')",
'design-image-large': "url('https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
}    

const pg_background_urls = {'design-image': 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
'design-image-large': 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
}

                
export  {
  pg_colors,
  pg_fonts,
  pg_font_urls,
  pg_backgrounds,
  pg_background_urls,
}

/* Pinegrow generated Design Panel End */