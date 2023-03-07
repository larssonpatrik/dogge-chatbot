//
const USER_REPLIES = [
  {
    id: 1,
    alternatives: [
      "Lab 1: Basic Python Programming",
      "Lab 2: List & Dictionaries",
      "Lab 3: Graphical User Interfaces",
    ],
  },
  {
    id: 2,
    alternatives: ["Task 1.1", "Task 1.2"],
  },
];

// Queries that Dogge asks
const QUERIES = [
  { id: 1, query: "Hello there! What do you need help with today?" },
  { id: 2, query: "Ok! And what task are you curently stuck on?" },
];

// 3-dimensional array with results responses
const RESULTS = [
  [
    {
      // Alternative: 1 - 1
      id: 1,
      query:
        "All right! So this task handles string manipulation in Python. Here are some helpful links to help you on your way! L1, T1.1",
      links: [
        {
          label: "String Manipulation",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "String Operations",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
    {
      // Alternative: 1 - 2
      id: 2,
      query:
        "Great! This task is about dictionaries in Python! Here are some helpful links to help you on your way! L1, T1.2",
      links: [
        {
          label: "Dictionaries in Python",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "Dictionary commands",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
  ],
  [
    // Alternative: 2 - 1
    {
      id: 3,
      query:
        "Fantastic! This task is quite tricky, it is about file reading and writing. Here are some helpful links to help you on your way! L2, T1.1",
      links: [
        {
          label: "File Writing",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "File Reading",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
    {
      // Alternative: 2 - 2
      id: 4,
      query:
        "Awesome! Let's learn about Quantum Python Programming! Here are some helpful links to help you on your way! L2, T1.2",
      links: [
        {
          label: "Elusive semicolons",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "Alien malware",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
  ],
  [
    {
      // Alternative: 3 - 1
      id: 3,
      query:
        "Fantastic! This task is quite tricky, it is about file reading and writing. Here are some helpful links to help you on your way! L2, T1.1",
      links: [
        {
          label: "File Writing",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "File Reading",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
    {
      // Alternative: 3 - 2
      id: 4,
      query:
        "Awesome! Let's learn about Quantum Python Programming! Here are some helpful links to help you on your way! L2, T1.2",
      links: [
        {
          label: "Elusive semicolons",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-manipulation-in-python",
        },
        {
          label: "Alien malware",
          url: "https://www.pythonforbeginners.com/basics/string-manipulation-in-python#htoc-string-slicing",
        },
      ],
    },
  ],
];

export { USER_REPLIES, QUERIES, RESULTS };
