export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy / Adventure",
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance / Self-Help",
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History / Anthropology",
    rating: 4.7,
    total_copies: 50,
    available_copies: 25,
    description:
      "A groundbreaking narrative of humanity’s creation and evolution, exploring the ways in which biology and history have defined us.",
    color: "#6d6875",
    cover:
      "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A narrative exploring humanity's evolution, blending biology, history, and anthropology into a compelling story.",
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business / Startup",
    rating: 4.6,
    total_copies: 45,
    available_copies: 30,
    description:
      "A guide to creating a successful startup through continuous innovation and adaptive learning.",
    color: "#f3f3f3",
    cover:
      "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An insightful guide to building sustainable startups through innovation and customer feedback.",
  },
  {
    "id": 11,
    "title": "Cracking the Coding Interview",
    "author": "Gayle Laakmann McDowell",
    "genre": "Computer Science / Career",
    "rating": 4.9,
    "total_copies": 18,
    "available_copies": 12,
    "description": "A comprehensive guide to coding interviews, featuring 189 programming questions and solutions.",
    "color": "#2E8B57",
    "cover": "https://m.media-amazon.com/images/I/81ZQgWwuVzL.jpg",
    "video": "/sample-video.mp4?updatedAt=1722593504152",
    "summary": "A comprehensive guide to coding interviews, featuring 189 programming questions and solutions."
  },
  {
    id: 12,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    genre: "Finance / Self-Help",
    rating: 4.8,
    total_copies: 80,
    available_copies: 70,
    description:
      "Lessons on wealth, personal finance, and the mindset required to achieve financial independence.",
    color: "#420c69",
    cover:
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A financial guide emphasizing mindset shifts and practical advice for achieving wealth.",
  },
  {
    id: 13,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help / Personal Development",
    rating: 4.6,
    total_copies: 90,
    available_copies: 65,
    description:
      "A counterintuitive approach to living a good life, focusing on accepting and embracing struggles.",
    color: "#ff5733",
    cover:
      "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A bold guide to living authentically by embracing struggles and redefining priorities.",
  },
  {
    id: 14,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian / Political Fiction",
    rating: 4.8,
    total_copies: 70,
    available_copies: 50,
    description:
      "A dystopian novel depicting a totalitarian society under constant surveillance.",
    color: "#2a2b2c",
    cover:
      "https://m.media-amazon.com/images/I/91SZSW8qSsL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A chilling portrayal of a dystopian society dominated by surveillance and authoritarianism.",
  },
  {
    id: 15,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    genre: "Self-Help / Leadership",
    rating: 4.9,
    total_copies: 100,
    available_copies: 75,
    description:
      "A guide to developing habits for personal and professional success.",
    color: "#0055a5",
    cover:
      "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A timeless framework for personal and professional growth through effective habits.",
  },
];
