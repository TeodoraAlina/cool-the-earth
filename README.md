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


## The Structure Plane

### Project Structure

Cool the Earth exhibits two distinct user experiences contingent upon the user's authentication status. Whether logged in or logged out, these states dictate varying content accessibility and user capabilities.

For logged-out users, the Navigation Bar provides access to the Home, About, Sign In, and Sign Up pages. Upon logging in, the user gains access to additional features within the Feed, encompassing Posts, Events, Liked, Going, Sign Out, and the Profile Page.

The transition to a logged-in state empowers users with the ability to perform actions beyond the scope of logged-out users:
Logged-in users can create events and posts, modify their profile details, including their username and password, manage their comments, express their preference for posts through likes and unlikes, indicate their interest in events by clicking 'going' or 'un-going,' and expand their network by following or unfollowing other users.

## Features

### Navigation

The navigation bar boasts an elegant and minimalist design, ensuring an exceptional user experience. Its appearance dynamically adapts based on your authentication status. On tablets and mobile devices, the navigation bar transforms into a user-friendly hamburger menu.

When a user is logged out, the following menu items are readily accessible:

- **Cool the Earth Logo:** This logo serves as a constant presence across the site, providing all users with a convenient link back to the homepage.
- **Home:** Users can navigate to the "Home" section, where a diverse array of posts populates the platform.
- **About:** This link directs users to the "About" page, where they can gain deeper insights into the platform's mission and purpose.
- **Authentication:** For quick access, the "Sign In" and "Sign Up" icons are prominently displayed, offering seamless entry into the respective authentication processes.

![NavBar Desktop Logged out](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698580286/Screenshot_2023-10-29_at_12.48.14_okrlr1.png)

![NavBar Mobile Logged out](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698580286/Screenshot_2023-10-29_at_12.50.40_k3vayt.png)

When a user is logged in, a range of additional options becomes accessible:

- **Feed:** Logged-in users have access to a dynamic dropdown menu, allowing them to navigate to the "Feed" page, which includes posts and events. Here, they can explore content from profiles they follow, view events they plan to attend, and revisit posts they've liked.

- **Authentication:** The authentication icons transform as well. Instead of displaying "Sign In" and "Sign Up" options, they now feature a direct link to the user's profile page and a convenient "Sign Out" option to exit the site.

- **Add Event and Add Post:** For users who are logged in, links to create new events and posts are readily accessible.

![NavBar Desktop Logged in](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698580287/Screenshot_2023-10-29_at_12.48.46_axspro.png)

![NavBar Mobile Logged in](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698580287/Screenshot_2023-10-29_at_12.50.22_ldeayr.png)

### Authentication

Users who have not created an account can click on the Sign Up link on the Navigation Bar to create a user account. I have used the standard dj-rest/auth/registration user account signup process for this.

![Sign Up Page](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698582291/Screenshot_2023-10-29_at_13.22.58_wpdyof.png)

If a user has a Cool the Earth user account, they can click on the Sign In menu option in the Navigation Bar to sign into their account.

![Sign in Page](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698582394/Screenshot_2023-10-29_at_13.26.22_jezdee.png)

To sign out, already signed in users can access the Sign Out option in the Navigation Bar.

### Posts Page / Homepage

The Posts Page, which also serves as the website Homepage, consists of three main React components:

1. **Popular Profiles Component**
2. **Posts**
3. **Search**

- **Popular Profiles Component**

The Popular Profiles Component is a prominent feature throughout the website. On larger screens, it appears to the right of all pages, while on smaller screens, it occupies the top section. This component utilizes a filter to rank all site users by their follower count, listing the top ten profiles on larger screens and the top four on smaller screens.

![Popular Profiles Logged Out](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698597589/PNG_image_3_ojdngg.jpg)

For users who aren't logged in, the component displays the profile avatar and the username. In contrast, logged-in users have the additional option to follow or unfollow the profile. Clicking on any profile avatar allows the user to view the complete profile page of that individual.

![Profile Details Logged in](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698597259/Screenshot_2023-10-29_at_17.21.56_jiwljg.png)

- **Posts**

The Posts section showcases all posts created by users on the platform. Posts are retrieved from the API, sorted by creation date, with the most recent posts featured at the top in descending order.

![Posts](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698597590/PNG_image_4_n8bl7t.jpg)

Each post includes details about the user who created it, the date of creation, the written content, an image, location, environmental metrics and relevant tags. Users can also view the number of likes and comments on each post. Clicking on the post image or the comments count takes the user to the post's individual page.

- **Search**

To find specific posts, users can utilize the search bar. This feature enables searching by the username of the post creator, the written content within the post, and associated post tags.

![Search](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698597269/Screenshot_2023-10-29_at_17.33.38_x6goiu.png)

### Events Page

The Events Page can be accessed via the 'Discover' dropdown in the Navigation Bar. It shares a similar layout with the Posts Page and utilizes several key components. The Events Page is made up of the following main React components:

1. **Popular Profiles Component**
2. **Event**
3. **Search and Filter**

- **Event**: 
  The Events Page displays all events created by users on the Cool the Earth platform. These events are retrieved from the API and sorted by creation date, with the most recently created events appearing at the top in descending order.

   ![Event](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698598528/PNG_image_5_z9wnix.jpg)

  Each event provides information about the user who created it, the creation date, the event title, description, date, category, image, and tags. Users can also see how many participants have marked their attendance. Clicking on the event image directs users to the event's dedicated page.

- **Search**:
  Users can easily search for specific events using the search bar. They can search for events based on the username of the creator, the event description, and event tags.

   ![Search](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698598581/Screenshot_2023-10-29_at_17.56.12_otmgll.png)

### Feed

To access the feed pages, simply click on the 'Feed' option in the Navigation Bar. The Posts Feed and Events Feed pages have a familiar layout reminiscent of their respective Posts Page and Events Page counterparts. However, their function diverges in how content is filtered. On the feed pages, they pull all Posts and Events from the API, but the magic happens with the applied filter. This filter ensures that only Posts or Events created by profiles that the logged-in user follows are displayed. Keep in mind that this page is exclusively accessible to logged-in users. In cases where a user isn't following any profiles yet, a 'No Results Found' message will be thoughtfully presented.

![Feed](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698601877/Screenshot_2023-10-29_at_18.51.10_elmxn3.png)

### Going Page

The Going Page maintains the visual harmony of the Events Page while boasting a distinct function. The Event component here is filtered to display only those events that have captured the interest of the logged-in user. To access this exclusive page, select the 'Going' option from the Navigation Bar.

### Create a Post

Logged-in users have the privilege to share their thoughts and experiences with the community by creating new posts. By selecting the 'Add Post' option from the Navigation Bar, users are seamlessly directed to the Create Post form. This user-friendly form demands all essential fields to be filled, and it's worth noting that uploading an image is mandatory for successful submission. After submitting the form, the newly created post is swiftly available on the Posts Page. Users will be automatically redirected to the post's individual page, where they can view their masterpiece. Additionally, for every post created, the user's posts count increases, proudly displayed in their profile page stats for others to see their engagement and contribution.

![Create a Post](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698602887/Screenshot_2023-10-29_at_19.07.14_kyvwdt.png)

### Create an Event

For users who are logged in, the opportunity to host and share exciting events with the community is just a click away. By selecting the 'Add Event' option from the Navigation Bar, users are guided to the Create Event form. Every field in this form is required, and the inclusion of an image is crucial for a successful event submission. Once the form is submitted, users can immediately access the newly created event on the Events Page. A swift redirection takes users to the event's dedicated page, allowing them to view and share it. Furthermore, each event hosted increases the user's events count, which is prominently showcased in their profile page stats, offering insight into their contributions as event hosts.

![Create an Event](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698602890/Screenshot_2023-10-29_at_19.08.04_yttnnh.png)

### Post Page

The Post Page offers a detailed view of an individual post, presenting both post details and comments. Users can access this page by clicking on the post image or comment icon from the Posts Page or Posts Feed. If the user is the post's owner, they gain the ability to edit or delete the post by selecting the three dots next to the post's creation date.

Beneath the post details lies the comments section. In the absence of comments, users encounter a message indicating no comments have been posted. When users are not logged in, they can read published comments but cannot create comments until they log in. Once logged in, a comment form appears above existing comments, allowing users to share their thoughts on the post.

![Post Page](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698603524/Screenshot_2023-10-29_at_19.18.34_erlg9q.png)

Choosing the "Delete" option removes the post from the API, making it invisible on the platform. Users are then redirected to the Post Create form, offering the option to create a new post. Opting for "Edit" redirects users to the Post Edit Form, pre-populated with the existing post's information. Users can modify this information, save the changes, and return to the Post Page, now featuring the updated post.

![Edit Post](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698603591/Screenshot_2023-10-29_at_19.19.44_hfpxav.png)

### Event Page

The Event Page provides a comprehensive display of a specific event's details. Users can navigate to this page by clicking on an event image from the Events Page or Events Feed. If the user is the event's organizer, they have the option to edit or delete the event by selecting the three dots next to the event's creation date.

![Event Page](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698603652/Screenshot_2023-10-29_at_19.20.43_ccw0bo.png)

Opting for "Delete" removes the event from the API, rendering it invisible on the platform. Users are then redirected to the Event Create form, providing the opportunity to create a new event. If "Edit" is selected, users are directed to the Event Edit Form, pre-filled with the existing event's information. Users can make adjustments, save the changes, and view the updated event on the Event Page.

![Edit Event](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698603698/Screenshot_2023-10-29_at_19.21.24_kau4mc.png)

### Comments

On each Post Page, a "Post a Comment" button invites users to engage with that specific post. The comment form includes a single text input field for users to compose their comments. All fields are required, ensuring that comments are not published unless text is provided. Upon publishing a comment, the comment count visibly increments for that post.

![Comment Form](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698603997/Screenshot_2023-10-29_at_19.26.31_njvhot.png)

Comment owners who wish to make modifications to their comments after publishing have the option to edit or delete comments by using the three dots menu located to the right of the published comment.

### Profile Page

The Profile Page provides an in-depth look at a user's identity and activity on Cool the Earth. Users can access Profile Pages by clicking on profile avatars found throughout the site, including popular profiles, post and event authors, and comments. Users can also access their own Profile Page via the authentication icon in the Navigation Bar.

![Profile Page](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698604382/Screenshot_2023-10-29_at_19.32.54_zhudsl.png)

A user's Profile Page displays various information, including:

- Profile picture
- Username
- Profile Stats
- About section
- Published posts
- Published events

When a user signs up for Cool the Earth, a basic profile is automatically created with a username, password, and default avatar image. The only information initially generated on the profile page is the user's Profile Stats, which encompass:

- The number of events the user has published
- The number of posts the user has published
- The number of profiles the user is following
- The number of profiles following the user

The user's "About" section remains blank until the user visits their own Profile Page and chooses to edit the profile by adding personal details. Clicking on the "Edit Profile" option leads them to a form where they can update their profile picture and about section. Users have the flexibility to share as much or as little personal information as they prefer.

![Edit Profile](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698604486/Screenshot_2023-10-29_at_19.34.37_iy2dr4.png)

Each profile also includes a "Follow" button, allowing other users to follow or unfollow that profile. The user's published posts and events are listed on their Profile Page, which can be accessed through React-Bootstrap tabs for easy navigation.

### Reusable React Components

1. **Asset**
    - This versatile component is used throughout the website to load images, display messages, and indicate loading spinners.

    ![Asset](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698604632/Screenshot_2023-10-29_at_19.37.06_emw5ak.png)

2. **Avatar**
    - The Avatar component is consistently utilized to display user avatars across different pages of the website.

3. **NavBar**
    - The NavBar component serves as the primary navigation bar and is consistently present on every page of the website.

4. **Not Found**
    - The Not Found component is presented to users when they attempt to access an invalid URL.

5. **MoreDropdown**
    - Reused to enable users to edit and delete various items, such as events, posts and comments.

    ![MoreDropdown](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698604744/Screenshot_2023-10-29_at_19.38.56_oussxc.png)
    ![MoreDropdown](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698604714/Screenshot_2023-10-29_at_19.38.27_ctvw2m.png)

### Future Features

1. **Real-time User Interactions**
 - Enjoy real-time chat, notifications, and user-to-user messaging for seamless communication.
2. **Personalised User Profiles**
- Customise your profile further, adding new sections and options to make it uniquely yours.
3. **Mobile App Development**
- Stay tuned for the mobile app, extending accessibility to your favorite environmental platform.

## The Skeleton Plane

### Wireframes

<details><summary>About Page Desktop</summary>


![About Page Desktop](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609356/About-us-desktop_dwcdll.png)

  

</details>


<details><summary>About Page Mobile</summary>

  

![About Page Mobile](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609357/about-us-mobile_knycvd.png)

  

</details>



<details><summary>Home Page desktop</summary>

  

![Home Page Desktop](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609357/Homepage-desktop_yojkjo.png)

  

</details>

<details><summary>Home Page mobile</summary>

  

![Home Page Mobile](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609361/homepage-mobile_egnt0r.png)

  

</details>

<details><summary>Create Post desktop</summary>

  

![Create Post desktop](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609362/new-post-desktop_pe6skz.png)

  

</details>

<details><summary>Create Post mobile</summary>

  

![Create Post mobile](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609363/new-post-mobile_kgfkmi.png)

  

</details>

<details><summary>Create Event desktop</summary>

  

![Create Event desktop](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609360/new-event-desktop_pcj9yt.png)

  

</details>

<details><summary>Create Event mobile</summary>

  

![Create Event mobile](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698609362/new-event-mobile_eznbr2.png)

  

</details>

### Database Structure

I've meticulously crafted the database structure for the Cool the Earth Backend API. Here are the core models:

- **Users:** These are slightly customized from Django's standard User model to align with our requirements.
- **Profiles:** Automatically generated upon user registration, these profiles are tailored to encompass essential information.
- **Posts:** Users can create posts, which are shared on the platform.
- **Likes:** Indicate if a user appreciates another user's post.
- **Comments:** Enable users to provide feedback and commentary on posts.
- **Events:** Users can create posts for upcoming events, providing valuable event details.
- **Eventgo:** Signals a user's interest in a publicized event.
- **Followers:** Empower users to follow each other within the platform.

To understand the relationships between these models, please refer to the Entity-Relationship diagram:

![Entity Relationship Diagram](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698608965/Screenshot_2023-10-29_at_20.48.05_kf93gw.png)

A few considerations about the ER diagram:

- The diagram represents a logical data model, emphasizing the relationships between entities.
- The Users table in the diagram offers a logical view of user registration data and its connection to the application's data model. Please note that it doesn't encompass all the columns and constraints within the physical database tables managed by Django modules.

## The Surface Plane

### Design

#### Colour Scheme
#### Color Scheme

The "Cool the Earth" project incorporates a distinct color scheme to reflect its unique identity and mission. These carefully selected colors are inspired by nature and sustainability, emphasizing the platform's dedication to environmental consciousness.

- **Midnight Green (#0E3B43)**: This deep shade of green symbolizes the profound connection to the environment, echoing the lush forests and pristine landscapes that "Cool the Earth" aims to protect.

- **Myrtle Green (#357266)**: Myrtle green represents growth and vitality, illustrating our commitment to fostering a sustainable future through collective action.

- **Pearl (#E5E1BF)**: The subtle pearl hue reflects purity and clarity, highlighting the importance of preserving the planet's natural beauty.

- **Buff (#D19C64)**: Buff, a warm and earthy tone, signifies community and collaboration, embodying the sense of togetherness that "Cool the Earth" encourages.

This thoughtfully crafted color palette resonates with users who share our passion for environmental preservation and sustainability. It serves as a visual reminder of our mission to "Cool the Earth" and create a more eco-friendly world for future generations. The exact hex colours and colour scheme were generated by the [https://coolors.co/](https://coolors.co/)  colour scheme generator.

![Colour scheme](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698610530/Screenshot_2023-10-29_at_21.15.17_urohzx.png)
    
#### Logo
    
The logo was created with the [logo.com](https://logo.com/)  logo generator. I selected the typography, colour scheme, and icon, and then applied it through the website and as the favicon. Legibility was a priority, as well as its clear portrayal of the app purpose.

![Logo](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698610633/Screenshot_2023-10-29_at_21.17.00_yg0pbp.png)
    
#### Typography

In the "Cool the Earth" project, the Poppins font has been thoughtfully chosen to enhance the visual aesthetics and readability of the platform. Poppins is a versatile sans-serif typeface that can be found on [Google Fonts](https://fonts.google.com/specimen/Poppins).

Poppins is a modern and highly legible font, making it an excellent choice for the project. Its clean, geometric design offers exceptional clarity and readability, making it accessible to a wide audience. Poppins is perfectly suited for various text sizes, ensuring that the platform remains visually appealing and easy to navigate, even on smaller screens.

With a harmonious balance of style and functionality, Poppins complements the project's overall design, providing a user-friendly and visually engaging experience. The Poppins font enhances the accessibility and aesthetics of "Cool the Earth," contributing to a more pleasant and readable environment for users.
    
#### Imagery
    
- The illustrations used across the app were generated using [Canva](https://canva.com/), I picked this illustration set for their artfulness, playful tone, and appropriate subject matter - I then colour-edited them to the app's colour scheme. 

- The images for the posts, events and profiles created on the website were sourced from free stock image provider [Pexels](https://www.pexels.com/) and some from my sister.
- The icons were imported from [Font Awesome](https://fontawesome.com/).





