
export const products = [
  {
    id: 'clear-float',
    name: 'Clear Float Glass',
    category: 'Glass',
    grade: 'Standard',
    price: 980,
    unit: 'per sqm',
    rating: 4.8,
    badge: 'Everyday essential',
    image: '/images/clear-glass.png',
    description:
      'Clear architectural glass for windows, cabinet fronts, and interior partitions.',
    specs: [
      '4–10 mm thickness options',
      'Cut-to-size service',
      'Polished edges available'
    ]
  },
  {
    id: 'dark-green-glass',
    name: 'Dark Green Tinted Glass',
    category: 'Glass',
    grade: 'Tinted',
    price: 400,
    unit: 'per sqm',
    rating: 4.8,
    badge: 'Color collection',
    image: '/images/green-glass.png',
    description:
      'Deep green tinted glass for a distinctive facade, partition, or modern window design.',
    specs: [
      'Tinted green finish',
      'Multiple thicknesses',
      'Confirm shade before ordering'
    ]
  },
  {
    id: 'dark-blue-glass',
    name: 'Dark Blue Tinted Glass',
    category: 'Glass',
    grade: 'Tinted',
    price: 480,
    unit: 'per sqm',
    rating: 4.7,
    badge: 'Color collection',
    image: '/images/blue-glass.png',
    description:
      'Blue tinted glass with a cool architectural tone for contemporary spaces.',
    specs: [
      'Blue tinted finish',
      'Custom dimensions',
      'Suitable for selected window applications'
    ]
  },
  {
    id: 'dark-grey-glass',
    name: 'Dark Gray Tinted Glass',
    category: 'Glass',
    grade: 'Tinted',
    price: 680,
    unit: 'per sqm',
    rating: 4.8,
    badge: 'Modern finish',
    image: '/images/gray-glass.png',
    description:
      'Dark gray glass for a refined, modern look with added visual privacy.',
    specs: [
      'Gray tinted finish',
      'Made to measure',
      'Confirm application and thickness'
    ]
  },
  {
    id: 'reflective-bronze',
    name: 'Reflective Bronze Glass',
    category: 'Glass',
    grade: 'Reflective',
    price: 850,
    unit: 'per sqm',
    rating: 4.9,
    badge: 'Premium finish',
    image: '/images/bronze-glass.png',
    description:
      'Bronze reflective glass that adds warmth and a contemporary exterior finish.',
    specs: [
      'Reflective bronze coating',
      'Exterior appearance varies with light',
      'Professional installation advised'
    ]
  },
  {
    id: 'frosted-glass',
    name: 'Frosted Glass',
    category: 'Glass',
    grade: 'Privacy',
    price: 1650,
    unit: 'per sqm',
    rating: 4.8,
    badge: 'Privacy choice',
    image: '/images/frosted-glass.png',
    description:
      'Soft translucent glass for privacy in offices, bathrooms, and interior partitions.',
    specs: [
      'Diffused light transmission',
      'Custom sizes available',
      'Ideal for selected privacy applications'
    ]
  },
  {
    id: 'tempered-glass',
    name: 'Tempered Safety Glass',
    category: 'Glass',
    grade: 'Safety',
    price: 250,
    unit: 'per sqm',
    rating: 4.9,
    badge: 'Best seller',
    image: '/images/tempered-glass.png',
    description:
      'Heat-treated safety glass for doors, partitions, and modern interior projects.',
    specs: [
      '8–12 mm options subject to availability',
      'Polished edges available',
      'Made to order'
    ]
  },
  {
    id: 'aluminum-jalousie',
    name: 'Aluminum Jalousie Window',
    category: 'Windows',
    grade: 'Aluminum frame',
    price: 800,
    unit: 'per unit',
    rating: 4.8,
    badge: 'Ventilation pick',
    image: '/images/jalousie.png',
    description:
      'Classic aluminum-framed jalousie window with angled glass blades for adjustable airflow.',
    specs: [
      'Blade count and dimensions vary',
      'Aluminum frame options',
      'Confirm measurements before quotation'
    ]
  },
  {
    id: 'sliding-window',
    name: 'Aluminum Sliding Window',
    category: 'Windows',
    grade: 'Aluminum frame',
    price: 2500,
    unit: 'per unit',
    rating: 4.9,
    badge: 'Space saver',
    image: '/images/sliding-window.png',
    description:
      'Clean-lined aluminum sliding window with glass panels for homes and commercial spaces.',
    specs: [
      'Custom dimensions available',
      'Frame color options by request',
      'Screen options subject to availability'
    ]
  },
  {
    id: 'steel-bar',
    name: 'Steel Bar',
    category: 'Steel',
    grade: 'Fabrication',
    price: 380,
    unit: 'per length',
    rating: 4.7,
    badge: 'Workshop essential',
    image: '/images/steel-bar.png',
    description:
      'Straight steel bar for general fabrication, supports, and workshop projects.',
    specs: [
      'Confirm profile and dimensions',
      'Cutting may be requested',
      'Final price depends on size and stock'
    ]
  }
]

export const formatPrice = value =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0
  }).format(value)