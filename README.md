# Junior Dev Final Project 🚀

This project is the final project of the JUNIOR Dev professional education organized by Digitalna Dalmacija.
The text of the task and the demonstration images are taken from the materials that are part of the education.

# Volunteer Management Application 🤝

## Project Description 📋

The goal of this project is to create an application for volunteering, where users can view current volunteer activities and browse lists of volunteers and organizations. The application will consist of several sub-pages:

1. **Home Page**
   - Description of the website.
   - Introduction of the author(s).
   - Contact form and links to social media profiles (LinkedIn, GitHub, etc.).

![Home Page](https://edit-react-docs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprimjer24_01.f5eb4b1c.png&w=640&q=75)

2. **Activities Page**

   - Display a list of volunteer activities in the local area (county).
   - Users can view all available activities, see details of each activity, and sign up to participate.
   - Features:
     - Display all current activities.
     - Sort activities by parameters such as creation date and city.
     - View detailed information about each activity.
     - Allow users to sign up for activities.
     - Allow users to add new activities.
     - Admin functionalities: delete participants and delete events.

![Activities Page](https://edit-react-docs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprimjer24_02.1f812eed.png&w=1080&q=75)

3. **Volunteers Page**

   - Display a list of volunteers available for contact and willing to help in specific activities.
   - Features:
     - Display all registered volunteers.
     - Filter volunteers by parameters type of work and sort by city.
     - Allow users to add new volunteers.
     - Admin functionalities: delete volunteers, edit existing data.

![Volunteers Page](https://edit-react-docs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprimjer24_03.b1d7f3bb.png&w=1200&q=75)

4. **Organizations Page**
   - Display existing volunteer organizations and allow users to submit requests to add new ones.
   - Features:
     - Display the name, address, and city of organizations.
     - Sort the list by city.
     - Allow users to submit requests to add new organizations.
     - Admin functionalities: review and approve/reject organization requests.

![Organizations Page](https://edit-react-docs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprimjer24_04.5b2786a3.png&w=1920&q=75)

## Navigation 🧭

React Router ⚛️

Navigation in this application is managed using the React Router library, a popular choice for handling routing in React applications. React Router offers declarative routing, allowing routes to be defined in a straightforward manner, rendering components based on the current URL. With features like nested routing and dynamic route matching, React Router provides a robust solution for managing client-side navigation in single-page applications. Its integration with hooks for navigation state management further enhances the development experience.

## Database and Server 🛢️

Firebase 🔥

This application utilizes Firebase, a comprehensive platform provided by Google, for backend services such as authentication, data storage, and more.

In particular, Firebase Firestore, a NoSQL cloud database, is used for storing and managing data.

## User Roles 👥

Implement two user roles: "admin" and "user." Use a simple "checkbox" element to toggle between roles and adjust the page functionalities accordingly using the "useContext" hook.

# Demo

🚀 Welcome to our interactive application!

🧭 Navigate seamlessly through our pages to explore all the exciting features we have to offer. Click on the various links in the navigation menu to embark on your journey through our application. Whether you're browsing the latest volunteer activities 🏃‍♂️, discovering passionate volunteers ready to lend a helping hand 🤝, or exploring vibrant volunteer organizations making a difference in the community 🌟, our navigation system ensures you have a smooth and enjoyable experience every step of the way.

So fasten your seatbelt 🚦 and get ready to explore the world of volunteering with us! 🌍

👉 Click here and enjoy [VolonteerKo](https://junior-dev-final-project.vercel.app/)
