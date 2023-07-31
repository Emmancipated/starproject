import imageOne from '../images/image2.jpg'
import imageTwo from '../images/image3.jpg'
import imageThree from '../images/image4.jpg'
import imageFour from '../images/image5.jpg'
import imageFive from '../images/image6.jpg'
import imageSix from '../images/image7.jpg'

export const successCardData = [
  {title: "Card number", content: "5531886652142950"},
  {title: "CVV", content: "564"},
  {title: "PIN", content: "3310"},
  {title: "Expiry", content: "09/32"},
  {title: "OTP", content: "12345"},
];

export const failedCardData = [
{ title: "Card number", content: "5258585922666506" },
{ title: "CVV", content: "883" },
{ title: "PIN", content: "3310" },
{ title: "Expiry", content: "09/31" },
{ title: "OTP", content: "12345" },
];

export const tabSelectors = [
  'Overview',
  'Cancellation Policy',
  'Pet Policy',
  'Smoking Policy',
]

export const rooms = [
  {
    name: 'Property One', 
    id: 0, 
    image: imageOne, 
    rating: 4.3,
    houseType: 'Face me I slap you',
    price: 50,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },
  {
    name: 'Property Two', 
    id: 1, 
    image: imageTwo, 
    rating: 8.7,
    houseType: 'Bungalow',
    price: 70,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },
  {
    name: 'Property Three', 
    id: 2, 
    image: imageThree, 
    rating: 9.1,
    houseType: 'Duplex',
    price: 100,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },
  {
    name: 'Property Four', 
    id: 3, 
    image: imageFour, 
    rating: 6.3,
    houseType: 'Self-Contain',
    price: 60,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },
  {
    name: 'Property Five', 
    id: 4, 
    image: imageFive, 
    rating: 3.5,
    houseType: 'Face me I slap you',
    price: 40,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },
  {
    name: 'Property Six', 
    id: 5, 
    image: imageSix, 
    rating: 7.2,
    houseType: 'Mini Flat',
    price: 70,
    description: 'description is   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium hic impedit maiores deserunt nemo praesentium ab odio dolore, autem tempore iste eligendi nesciunt minima perferendis adipisci aspernatur commodi quae.',
    amenities: [
      {name: 'bed', status: '1'},
      {name: 'bathroom', status: '1'},
      {name: 'internet', status: 'yes'},
    ],
    cancellation : [
      {
        caption: 'Cancellable',
        content : ['yes']
      },
      {
        caption: 'Refundable',
        content : ['yes']
      },
      {
        caption: 'Refund policy',
        content : ['plenty talk']
      },
    ],
    pet : [
      {
        caption: 'Pets',
        content: ['pets are allowed'],
      },
      {
        caption: 'Allowed pets',
        content : [1, 6, 9],
      },
    ],
    smoking : [
      {
        caption: 'Smoking',
        content : ['smoking is allowed']
      },
      {
        caption: 'Allowed smokes',
        content : ['goats', 'sheep']
      },
    ],
  },

]
