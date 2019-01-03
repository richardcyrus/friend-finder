# Friend Finder

A compatibility-based 'Friend Finder' application -- basically like a dating application.

This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Try out [Friend Finder!](https://friend-finder-rgc.herokuapp.com/)

## How This Works

1. The survey should have 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user disagrees or agrees with a question.
2. Determine the user's most compatible friend using the following as a guide:
    - Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    - Compare the difference between the current user's scores against those from other users, question by question.
    - Add the scores to calculate the total difference between users.
      - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
      - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
      - **Total Difference**: `2 + 1 + 2 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 5`
    - The closest match is the user with the least amount of difference.
        - When determining this, use the absolute value of the differences. The final number should not be a negative number.
3. Once the most compatible match has been found, display the result as a modal pop-up. The modal should display both the name and picture of the closest match.

## Instructions

* Node.js and Express will be used in this assignment, and the final application will be deployed to Heroku.
* The Express application should have two route management files; one for managing the HTML files, and the other for handling the API that drives this application.
* The HTML route manager will handle:
  - A `GET: /survey` route to display the survey page
  - A default catch-all route that leaders to the home page.
* The API route manager will handle:
  - `GET: /api/friends` that will return the JSON data of all possible friends.
  - `POST: /api/friends` that will handle incoming survey results. This route will also handle the compatibility logic.
* The data collected from the survey should be stored in `app/data/friends.json` as an array of objects. Each object should roughly follow the format below:

```json
[{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}]
```  
