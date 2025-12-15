import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const flashcards = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
  {
    question:
      "What is the difference between 'let' and 'const' in JavaScript?",
    answer:
      "'let' allows you to reassign the variable, while 'const' creates a constant reference that cannot be reassigned. Both are block-scoped.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Geography" },
        create: { name: "Geography" },
      },
    },
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.",
    knownCount: 1,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What does DOM stand for?",
    answer: "Document Object Model",
    knownCount: 3,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
  {
    question: "What is the Pythagorean theorem?",
    answer:
      "In a right triangle, a² + b² = c², where c is the hypotenuse",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Mathematics" },
        create: { name: "Mathematics" },
      },
    },
  },
  {
    question:
      "What is the difference between '==' and '===' in JavaScript?",
    answer:
      "'==' checks for value equality with type coercion, while '===' checks for both value and type equality (strict equality).",
    knownCount: 4,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is Flexbox used for in CSS?",
    answer:
      "Flexbox is a CSS layout model that helps distribute space and align items in a container, making it easier to create responsive layouts.",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Literature" },
        create: { name: "Literature" },
      },
    },
  },
  {
    question:
      "What is the purpose of the 'async' keyword in JavaScript?",
    answer:
      "The 'async' keyword declares an asynchronous function that returns a Promise and allows the use of 'await' inside it.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What are semantic HTML elements?",
    answer:
      "HTML elements that clearly describe their meaning to both the browser and the developer, like <header>, <nav>, <article>, <footer>, etc.",
    knownCount: 1,
    category: {
      connectOrCreate: {
        where: { name: "HTML" },
        create: { name: "HTML" },
      },
    },
  },
  {
    question: "What is the speed of light?",
    answer:
      "Approximately 299,792,458 meters per second (or about 186,282 miles per second)",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "Science" },
        create: { name: "Science" },
      },
    },
  },
  {
    question: "What is event bubbling in JavaScript?",
    answer:
      "Event bubbling is when an event triggered on a child element propagates up through its parent elements in the DOM tree.",
    knownCount: 3,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The CSS box model describes the rectangular boxes generated for elements, consisting of content, padding, border, and margin.",
    knownCount: 4,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "What year did World War II end?",
    answer: "1945",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "History" },
        create: { name: "History" },
      },
    },
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    answer:
      "'undefined' means a variable has been declared but not assigned a value. 'null' is an intentional assignment representing no value or empty object.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a two-dimensional layout system that allows you to create complex responsive layouts using rows and columns.",
    knownCount: 1,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Science" },
        create: { name: "Science" },
      },
    },
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What does the 'viewport' meta tag do?",
    answer:
      "It controls how a webpage is displayed on mobile devices by setting the viewport width and initial scale for responsive design.",
    knownCount: 3,
    category: {
      connectOrCreate: {
        where: { name: "HTML" },
        create: { name: "HTML" },
      },
    },
  },
  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Geography" },
        create: { name: "Geography" },
      },
    },
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    answer:
      "'this' refers to the object that is executing the current function. Its value depends on how the function is called.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "Specificity determines which CSS rule is applied when multiple rules target the same element. It's calculated based on selector types (inline, IDs, classes, elements).",
    knownCount: 1,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "How many continents are there?",
    answer:
      "Seven: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Geography" },
        create: { name: "Geography" },
      },
    },
  },
  {
    question:
      "What is the difference between a for loop and forEach in JavaScript?",
    answer:
      "A for loop can be broken or continued with keywords, while forEach cannot. For loops can iterate over any iterable, forEach is only for arrays.",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is localStorage in the browser?",
    answer:
      "localStorage is a web storage API that allows you to store key-value pairs in the browser with no expiration date, persisting even after the browser is closed.",
    knownCount: 4,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
  {
    question: "What is the chemical formula for water?",
    answer: "H₂O (two hydrogen atoms and one oxygen atom)",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Science" },
        create: { name: "Science" },
      },
    },
  },
  {
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation, with three states: pending, fulfilled, or rejected.",
    knownCount: 3,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question:
      "What is the purpose of the 'alt' attribute in an <img> tag?",
    answer:
      "The 'alt' attribute provides alternative text for an image if it cannot be displayed, and is essential for accessibility and SEO.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "HTML" },
        create: { name: "HTML" },
      },
    },
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Art" },
        create: { name: "Art" },
      },
    },
  },
  {
    question: "What is the spread operator in JavaScript?",
    answer:
      "The spread operator (...) expands an iterable (like an array) into individual elements, useful for copying arrays or passing multiple arguments.",
    knownCount: 1,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is the z-index property in CSS?",
    answer:
      "The z-index property controls the stacking order of positioned elements, with higher values appearing in front of lower values.",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables in a concise way.",
    knownCount: 2,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
    knownCount: 4,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
  {
    question:
      "What is the difference between margin and padding in CSS?",
    answer:
      "Margin is the space outside an element's border, while padding is the space inside an element's border, between the border and content.",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "CSS" },
        create: { name: "CSS" },
      },
    },
  },
  {
    question: "What is an API?",
    answer:
      "Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.",
    knownCount: 3,
    category: {
      connectOrCreate: {
        where: { name: "Programming Concepts" },
        create: { name: "Programming Concepts" },
      },
    },
  },
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    knownCount: 0,
    category: {
      connectOrCreate: {
        where: { name: "Geography" },
        create: { name: "Geography" },
      },
    },
  },
  {
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed as an argument to another function, to be executed after the first function completes.",
    knownCount: 4,
    category: {
      connectOrCreate: {
        where: { name: "JavaScript" },
        create: { name: "JavaScript" },
      },
    },
  },
  {
    question: "What is responsive web design?",
    answer:
      "An approach to web design that makes web pages render well on various devices and screen sizes using flexible layouts, images, and CSS media queries.",
    knownCount: 5,
    category: {
      connectOrCreate: {
        where: { name: "Web Development" },
        create: { name: "Web Development" },
      },
    },
  },
];

export async function main() {
  for (const flashcard of flashcards) {
    await prisma.flashcard.create({ data: flashcard });
  }
}

main();
