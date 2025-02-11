*Project Title:*

**The Accidental Poetry Generator**

*Project Overview:*

The Accidental Poetry Generator is a web-based application that randomly generates absurd and humorous poetry. By selecting words randomly from different categories (nouns, verbs, adjectives, adverbs), the application constructs lines that lack grammatical structure, rhyme, or meaning. The result is pure absurdity, with occasional random punctuation inserted to enhance the chaos. The application is built with both a frontend and backend component, allowing users to interact with the system via a simple web interface, generating new poems with the click of a button.

The frontend provides the user interface, where poems are displayed and refreshed, while the backend is responsible for managing the word lists and generating the random combinations. Users can enjoy the unpredictability of the poems, which will differ every time they interact with the app. This project aims to combine web development with humor, generating entertaining and nonsensical content, all while offering a hands-on experience in full-stack web development.

*Key Features:*

Random Word Selection: The backend will randomly select words from predefined lists categorized into nouns, verbs, adjectives, adverbs, and punctuation.
Chaotic Line Structure: Each poem will feature random word combinations in varying line lengths, making the output unpredictable and absurd.
Random Punctuation Insertion: Punctuation marks like commas, periods, exclamation points, and question marks are inserted at random points within the generated lines for an added layer of chaos.
Dynamic Poem Generation: The backend API will generate a unique poem every time the user interacts with the app (e.g., by clicking the "Generate Poem" button or refreshing the page).
Simple User Interface: A playful and minimalist frontend allows users to easily interact with the app, generating poems with a simple click and viewing them in a clear, humorous format.
Backend Word Management: The backend will store and manage the word lists in a way that allows easy updating and expansion.

*Tech Stack:*

*Frontend:*

1. HTML: Provides the basic structure of the webpage. The page will contain a button to generate new poems and a designated area to display the generated poetry.

2. CSS: Used to create a whimsical and engaging design that matches the humorous nature of the project. The style will focus on readability and making the page visually appealing with fun fonts and colors.

3. JavaScript: Handles the logic for interacting with the backend. It sends requests to the backend API to fetch newly generated poems and displays them dynamically on the webpage. It also handles any client-side interactions, like button clicks.

*Backend:*

1. Node.js with Express.js: These technologies will handle the server-side logic. Express.js will be used to build a RESTful API that provides the random poems upon request. The API will process the random word selection and punctuation insertion on the server side, ensuring efficient poem generation.

2. API: The backend will expose a single endpoint that the frontend can call to request a new poem. This ensures the poem generation process remains abstracted from the client-side code.
