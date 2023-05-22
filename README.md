# MealMentor

![MealMentor Logo](https://meal-mentor.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=32&q=75)

MealMentor is a website that provides a wide range of recipes for dieting, bulking up, and maintaining a healthy physique. It offers users the ability to discover delicious recipes, upload their own creations, and manage their recipes through a user-friendly interface. With the integration of OpenAI API and ChatGPT, MealMentor takes recipe searching to the next level by automatically fetching recipes based on user requests.

## Visit my website: [meal-mentor.vercel.app](https://meal-mentor.vercel.app/)

## Features

- **Recipe Discovery:** Users can explore a vast collection of recipes suitable for different dietary needs, including dieting, bulking up, and maintaining a specific physique.

- **Upload and Manage Recipes:** Registered users can upload their own recipes, making them accessible to the MealMentor community. Users have the flexibility to edit or delete their recipes at any time.

- **Profile Page:** Each user has a dedicated profile page where they can view all their uploaded recipes, making it convenient to manage and showcase their culinary creations.

- **Bookmark Favorite Recipes:** Users can mark recipes as favorites, allowing them to easily access and reference them later.

- **Automated Recipe Fetching:** MealMentor's unique feature allows users to request a specific recipe not already available on the platform. By entering the name of the dish, the website utilizes the OpenAI API and ChatGPT to automatically fetch the recipe. Users have the option to upload the fetched recipe if they find it suitable.

## Getting Started

To get started with MealMentor, please follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/code-Raghav/meal-mentor.git
   
2. Install the required dependencies:
    ```bash
    npm install
3. Set up the database:
  - Create a database and configure the necessary credentials in the project.
  - Run the database migrations to set up the required tables.
4. Configure the environment variables:
- Create a .env file in the project root directory.
- Define the following variables in the .env file:
  ```bash
  GOOGLE_ID=yourgoogleid
  GOOGLE_CLIENT_SECRET=yoursecretkey
  MONGODB_URI = yourmongodbconnectid
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_URL_INTERNAL=http://localhost:3000
  NEXTAUTH_SECRET=randomlygenerated(use, openssl rand -base64 32)
5. Start the application: 
   ```bash
   npm start   
6. Access MealMentor:
  Open your web browser and visit http://localhost:3000 to access the MealMentor website.
  
  
  ## Technologies Used

- **Frontend:** HTML, CSS, JavaScript

- **Backend:**  Node.js, Next.js

- **Database:** MongoDB, Mongoose

- **OpenAI API:** Integration for recipe fetching using ChatGPT
  
### Contact
If you have any questions, suggestions, or feedback, please feel free to reach out to me at araghav2003@gmail.com. I'll be happy to hear from you!
