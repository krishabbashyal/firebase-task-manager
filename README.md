# Mosaic Documentation

Mosaic is a powerful software designed to facilitate the systematic deconstruction and management of tasks necessary for successfully completing projects or assignments, whether they are pursued individually or collaboratively within a team.

## Introduction

In the dynamic world of project management, keeping track of tasks, progress, and collaborations can become overwhelming. Mosaic steps in as a solution to this challenge, providing a comprehensive platform to organize, oversee, and streamline the process of achieving project goals.

## Features

### Task Deconstruction

Mosaic excels in breaking down complex projects into manageable tasks. This feature allows users to analyze the entire scope of their project and divide it into smaller, achievable steps. Task deconstruction promotes clarity, making it easier to assign responsibilities and track progress.

### Task Management

Once tasks are identified, Mosaic provides an intuitive interface for managing them. Users can assign tasks to individuals, and prioritize tasks based on their significance. This ensures that everyone involved is aware of their responsibilities and the project's timeline.

### Progress Tracking

Mosaic offers real-time progress tracking for each task. Users can monitor how tasks are advancing, identify bottlenecks, and take corrective actions if necessary. This transparency keeps projects on track and ensures that goals are met within the desired timeframe.

### Customizable Workflows

Every project is unique, and Mosaic recognizes that. The software allows users to tailor workflows to match their project's specific requirements. Customizable statuses, labels, and task categories enhance adaptability and fit seamlessly into existing processes.

## Local Setup Steps:
Make sure you have Node.js installed on your machine. This project uses `v18.17.0`, but any recent version should work.
After verifying Node.js, run the following command to install all required project dependencies:
```
npm install
```
Create a .env file in the project's root folder. Store the credentials for the Supabase server that powers the application's backend in this file, you will have to reach out to someone for this.

Once the above steps are done, you can run the following command to launch the application on your localhost:

Once that has been created, you will have to create a .env file in the root of the project folder. This will be where we store the credentials to the supabase server that is powering the backend of this application. 

Once those two steps are completed you can run:

```
npm run serve
```
You can explore different routes by checking the main.js file in the root directory.
