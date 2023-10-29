<h1  align="center">Cool the Earth</h1>

## Project Overview

**Cool the Earth** is an innovative social media platform committed to driving positive change for our environment. Our mission is to encourage sustainable living and raise awareness about the urgent need to combat climate change. With a focus on practical solutions and community engagement, we provide users with the tools to make a real impact.
Cool the Earth offers a social networking experience with a green twist. It’s a space for eco-conscious users to connect, share, and inspire one another. 
Our platform is more than just a social network; it’s a hub for raising awareness about climate change and sustainable living. Users can access valuable resources and engage in conversations about practical solutions to environmental challenges. Users can create their own profiles, share information about their sustainability journey, and showcase their contributions to a greener world.

View the live project [here](https://cool-the-earth-2122f9015977.herokuapp.com/).

## Table Of Contents

## User Experience Design (UX)

## The Strategy Plane

### Project Objective
The objective of this project is to build a content sharing web application for digital design professionals, allowing users to learn about events happening in their field of work, connect with and stay up to date with other professionals in their field, and to interact with the published content. The platform allows users to view, create, edit, delete, bookmark and review event listings, as well as view, create, edit, delete, like and comment on posts. The content can be viewed in a logical order, filtered by category, and searched  by keywords and tags. Users can also view, create and edit their own profiles as well as view other user's profiles, follow each other, and engage with other's shared content.

### Agile Project Management

This project was meticulously managed through the application of agile methodologies, establishing an efficient workflow by implementing a Kanban board using GitHub Projects, which served as a pivotal project management tool. The Kanban board played a crucial role in visualizing our tasks, maintaining optimal work-in-progress limits, and enhancing overall workflow efficiency.

You can explore our Kanban board to gain insights into our project’s progression by following this [link](https://github.com/users/TeodoraAlina/projects/7). 

Each user story was thoughtfully crafted with well-defined acceptance criteria. These stories were subsequently grouped into six distinct epics: Project Inception, API build, Frontend build, Testing, Documentation, and Deployment. The development process was anchored in a phased approach. It commenced by focusing on fulfilling the “must-have” requirements to ensure the delivery of core functionalities. Subsequently, the “should-have” features were addressed, followed by the incorporation of the “could-have” elements. This approach prioritized essential project prerequisites while allowing the integration of desirable features in an iterative, capacity-based manner.

![Image of Kanban](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698571970/Screenshot_2023-10-29_at_10.13.25_hjtnzt.png)

![Image of Project Board](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698571970/Screenshot_2023-10-29_at_10.13.59_oo59vr.png)

### User Stories

#### Navigation & Authentication

- **US01.  Navigation:** 
As a user, I want a Navigation Bar available on all pages so that I can easily navigate between different sections of the application.
    
- **US02.  Routing:** 
As a user, I want quick and seamless transitions between pages, allowing me to view content without the need for page refreshing.
    
- **US03.  Authentication - Sign up:** 
As a user, I want to create a new account so that I can access all the features available to registered users.
    
- **US04.  Authentication - Sign in:** 
As a user, I want to sign in to the app to access functionality available to logged-in users.
    
- **US05.  Authentication - Logged in Status:** 
As a user, I want to easily determine whether I am logged in or not, ensuring that I can log in if needed.
    
- **US06.  Authentication - Refreshing access tokens:** 
As a user, I want my logged-in status to be maintained until I choose to log out, ensuring a seamless user experience.
    
- **US07.  Navigation - Conditional rendering:**
As a logged-out user, I want to see sign-in and sign-up options so that I can quickly and conveniently access these actions.
    
- **US08.  Avatar:** 
As a user, I want to view user avatars (profile pictures) to easily identify other users within the application.

#### Posts

- **US09.  Create posts:** 
    To share my content, I can create posts as a logged-in user.
    
- **US10.  Edit post:** 
    As the post owner, I have the ability to edit the post text, image, and tags. This allows me to make corrections or updates to my post after its creation.
    
- **US11.  Delete a post:** 
    I, as the post owner, can delete a post, ensuring it is no longer available to view on the app.
    
- **US12.  View a post:** 
    To learn more about a specific post, I can view its details as a user.
    
- **US13.  Posts list:** 
    As a user, I can see a list of posts ordered by most recent first. This provides me with an overview of what people are posting.
    
- **US14.  Search Posts:** 
    I can search for posts using keywords and tags as a user. This feature helps me find posts and user profiles that align with my interests.
    
- **US15.  View posts of followed users:** 
    To stay updated with the posts from users I follow, I can view content filtered by these users as a logged-in user.
    
#### Events

- **US16. Create events:** 
    As a user, I wish to create events while logged into the app. This empowers me to share the events I'm promoting.

- **US17. Edit an event:** 
    As a user and the owner of an event, I want the ability to edit it, ensuring I can make necessary corrections or updates even after the event's creation.

- **US18. Delete an event:** 
    In my role as a user and the owner of an event, I should have the option to delete the event from the app, making it no longer visible to other users.

- **US19. View all events:** 
    As a user, I'd like to view a list of all events to gain a comprehensive overview of the events available on the app.

- **US20. View a single event:** 
    In my capacity as a user, I should be able to access all the details for a specific event by viewing a single event page.

- **US21. Search Events:**
    As a user, I expect to have the capability to search for events using titles, profiles, dates, or tags. This functionality helps me find events that pique my interest.

- **US22. View events of followed users:** 
    As a user, I want to stay updated with events posted by users I follow. Therefore, I seek the ability to view events from these followed users.

#### Likes

- **US24. Like a post:** 
    As a user, I have the ability to like a post when logged in. This allows me to express my support for posts that capture my interest.

- **US25. Unlike a post:** 
    As a user, I am able to unlike a post when logged in, offering the flexibility to change my mind regarding posts I wish to support.

- **US26. View liked posts:** 
    In my role as a user, I can easily access the posts I've liked while logged in. This feature ensures I can find these posts conveniently at a later date.

#### Going

- **US27. Express Interest in an Event:** 
    As a user, I have the ability to express my interest in an event when logged in. By clicking "Going," I can indicate my intention to attend the event and easily revisit it later.

- **US28. Change Interest in an Event:** 
    In my role as a user, I can click "UnGoing" for an event while logged in, allowing me the flexibility to change my mind about the events I wish to attend.

- **US29. Keep Track of Attended Events:** 
    While logged in, I can view a list of events that I've indicated interest in by clicking "Going." This feature helps me maintain a schedule of events I'm interested in attending.

#### Comments

- **US30. Share Thoughts via Comments:** 
    As a user, when logged in, I can contribute comments to a post, providing me with the opportunity to express my thoughts and opinions about the post content.

- **US31. Display Comment Timestamp:** 
    In my user role, I can view the time elapsed since a comment was made. This feature allows me to determine how recent or dated a particular comment is.

- **US32. Read User Comments:** 
    In the capacity of a user, I have the ability to read comments on posts. This functionality enables me to gain insights into what other users think and express about the posts.

- **US33. Control Comment Removal:** 
    As a comment owner, I can delete my own comments when logged in, providing me with control over the removal of my comments from the application.

- **US34. Edit Existing Comments:** 
    When logged in and acting as a comment owner, I can edit my comments. This empowers me to make corrections or updates to my existing comments as needed.

#### Profiles

- **US40. Explore User Profiles:** 
    As a user, I can explore the profiles of other users. This feature allows me to discover their posts and events, gain insights into their activity (including the number of posts, events, followers, and users followed), and learn more about their backgrounds, careers, and personal information.

- **US41. Discover Popular Profiles:** 
    In my user role, I have the ability to discover a list of the most popular profiles. This functionality enables me to identify profiles that are widely followed and popular within the community.

- **US42. Manage User Connections:** 
    When logged in as a user, I can choose to follow or unfollow other users. This control allows me to curate the posts I see in my feed by selecting or deselecting specific users to follow.

- **US43. Review a User's Posts:** 
    In my role as a user, I can access and review all posts published by a specific user. This enables me to catch up on their recent posts or decide whether to follow their content.

- **US44. Explore a User's Events:** 
    As a user, I can explore the events listed by a specific user. This provides me with the opportunity to view their events and decide whether I want to follow their event updates.

- **US45. Customize Profile Information:** 
    While logged in, I can edit my profile to make changes to my profile picture and bio. This functionality allows me to keep my profile information up-to-date and relevant.

- **US46. Secure Profile Information:** 
    When logged in, I can update my username and password, ensuring that my display name can be modified, and my profile remains secure.

### Developer User Stories

**Profiles**

- **View All Profiles:**
    As a developer/superuser, I can access a comprehensive list of all profiles created, providing an overview of the entire user base.

- **Inspect Individual Profile:**
    In the role of a developer/superuser, I can delve into the details of an individual profile to access specific user data.

- **Edit Personal Information:**
    Being a developer/superuser, I have the ability to modify personal information within a profile when logged in. This enables users to keep their details up-to-date.

- **Delete User Account:**
    In the capacity of a developer/superuser, I can perform user account deletions, ensuring the option to remove profiles from the API.

**Posts**

- **List All Posts:**
    As a developer/superuser, I can review a comprehensive list of all posts in one view, facilitating efficient post management.

- **Access Single Post Details:**
    In the role of a developer/superuser, I can view detailed information about a single post, including any associated comments.

- **Create New Posts:**
    Being a developer/superuser, I possess the capability to generate new posts, ensuring their display within the posts list.

- **Edit Created Posts:**
    In my role as a developer/superuser, I can amend the content of posts that I created, facilitating corrections or updates as necessary.

- **Delete Created Posts:**
    In the capacity of a developer/superuser, I can remove posts created by me, effectively eliminating post data from the API.

**Events**

- **List All Events:**
    As a developer/superuser, I can access an extensive list of all events at once, simplifying event management.

- **Access Single Event Details:**
    In my role as a developer/superuser, I can view in-depth information about a single event, including any associated reviews.

- **Create New Events:**
    Being a developer/superuser, I have the authority to generate new events, ensuring their inclusion within the events list.

- **Edit Created Events:**
    As a developer/superuser, I can make modifications to events I've created, allowing corrections or updates.

- **Delete Created Events:**
    In the capacity of a developer/superuser, I can delete events created by me, effectively removing event data from the API.

**Comments**

- **Generate Comments:**
    As a developer/superuser, I can create comments, associating them with specific posts, thus facilitating user interaction.

- **View Comment List:**
    In my role as a developer/superuser, I can retrieve a complete list of all comments created within the API, streamlining comment management.

- **Access Individual Comment by ID:**
    Being a developer/superuser, I can retrieve and view a single comment using its unique identifier. This capability allows for editing or deletion of the comment.

- **Edit My Comments:**
    As a developer/superuser, I can make edits to comments I've created, affording the ability to rectify or update the content.

- **Delete My Comments:**
    In the capacity of a developer/superuser, I can remove comments created by me, effectively eliminating comment data from the API.

### Developer User Stories

**Likes**

- **Create Liked Object:**
    As a developer/superuser, I can establish a "liked" object linked to a single event, thereby enabling users to demonstrate interest in an event.

- **Delete Liked Object:**
    In the role of a developer/superuser, I can delete a "liked" object created by me, ensuring the ability to remove "liked" data from the API.

- **Prevent Unauthorized Deletion:**
    Being a developer/superuser, I can implement measures to prevent the unauthorized deletion of "liked" objects that I did not create.

- **List All Liked Objects:**
    In my capacity as a developer/superuser, I can access a comprehensive list of all "liked" objects created in the API, facilitating the management of these user interactions.

**EventGO**

- **Create Going Object:**
    As a developer/superuser, I can establish a "going" object linked to a single event, allowing users to express their interest in attending an event.

- **Delete Going Object:**
    In the role of a developer/superuser, I have the capability to delete a "going" object created by me, ensuring the ability to remove "going" data from the API.

- **Prevent Unauthorized Deletion:**
    Being a developer/superuser, I can implement safeguards to prevent the unauthorized deletion of "going" objects that I did not create.

- **List All Going Objects:**
    In my capacity as a developer/superuser, I can access a comprehensive list of all "going" objects created in the API, streamlining the management of user attendance preferences.

**Followers**

- **Create a Follow:**
    As a developer/superuser, I can establish a "follow" relationship with another user, allowing users to connect and receive updates.

- **View List of Follows:**
    In my role as a developer/superuser, I can access a list of all "follows" created within the API, providing insights into user connections.

- **Delete Follow:**
    Being a developer/superuser, I can delete a "follow" relationship, offering users the option to unfollow another user's profile.

**Search and Filter**

- **Implement Search Functionality:**
    As a developer/superuser, I can introduce a search field in both the events and posts lists, enhancing user experience by enabling search for specific events or posts.

- **Filter Events by Category:**
    In my role as a developer/superuser, I can enable category-based event filtering, allowing users to view events related to a specific category.

- **View Followed Profiles' Content:**
    Being a developer/superuser, I can provide a feature that allows users to see events and posts exclusively from profiles they follow.

- **Display Liked Posts:**
    In my capacity as a developer/superuser, I can offer users a dedicated view of posts they've liked, simplifying post retrieval.

- **Show Attending Events:**
    In the role of a developer/superuser, I can enable users to access a list of events they plan to attend, improving event tracking.

- **Browse Content by User:**
    Being a developer/superuser, I can enable users to view events and posts created by a specific user, promoting personalized content discovery.

- **Retrieve Post Comments:**
    In my capacity as a developer/superuser, I can provide a feature that allows users to access comments linked to a particular post, enhancing the understanding of user interactions.