# Cool the Earth

## Frontend Testing

### Table of Contents
- [Code Validation](#code-validation)
- [Automated Testing](#automated-testing)
- [Manual Testing](#manual-testing)
- [Browser Compatibility](#browser-compatibility)
- [Lighthouse Testing](#lighthouse-testing)
- [Known Bugs](#known-bugs)

### Code Validation

The Cool the Earth site has been passed through the [W3C html Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [ESLint Validator](https://eslint.org/play/).

#### W3C HTML Validation Results

No errors were found when the deployed URL was passed through W3C HTML validation checker.

![HTML testing](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698611647/Screenshot_2023-10-29_at_21.34.00_abxaz0.png)

#### W3C CSS Validation Results

No errors or warnings were found when the deployed URL was passed through the W3C CSS Validation checker.

![CSS testing](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698611752/Screenshot_2023-10-29_at_21.35.45_di0eyh.png)

### Automated Testing

The following components have been tested using Jest, and all tests passed:

- Avatar.js
- Asset.js
- NavBar.js
- NotFound.js

![Jest testing](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698612361/Screenshot_2023-10-29_at_21.45.55_drzgir.png)

### Manual Testing

As well as the automated tests, I carried out the following manual tests to check all the user story scenarios:

#### Authentication - Logged Out User

| Test Description                                     | Test Result                                    |
|-----------------------------------------------------|------------------------------------------------|
| Typing posts feed URL redirects to homepage        | ✓ Passed                                      |
| Typing events feed URL redirects to homepage       | ✓ Passed                                      |
| Typing bookmarked URL views the homepage            | ✓ Passed                                      |
| Typing create post URL redirects to homepage        | ✓ Passed                                      |
| Typing create event URL redirects to homepage       | ✓ Passed                                      |
| Typing edit profile form URL redirects to homepage  | ✓ Passed                                      |
| Typing event edit form URL redirects to homepage    | ✓ Passed                                      |
| Desktop and tablet users see an image next to the sign-in form | ✓ Passed                |
| Mobile users can't see an image next to the sign-in form for desktop and tablet users | ✓ Passed                |
| Desktop and tablet users see an image next to the sign-up form | ✓ Passed                |
| Mobile users can't see an image next to the sign-up form for desktop and tablet users | ✓ Passed                |

#### Navigation - Logged In User

| Test Description                                   | Test Result    |
|---------------------------------------------------|----------------|
| Clicking the navbar brand logo loads the home page | ✓ Passed      |
| User can't see the sign-in button in the navigation bar profile section dropdown menu | ✓ Passed |
| User can't see the sign-up button in the navigation bar profile section dropdown menu | ✓ Passed |
| The user can see the profile page link in the navigation bar | ✓ Passed |
| The user can see the sign-out link in the navigation bar | ✓ Passed |
| Users can see the Explore menu option in the navigation bar | ✓ Passed |
| Users can see the Feed menu option in the navigation bar | ✓ Passed |
| Users can see the 'Add Post' button in the navigation bar | ✓ Passed |
| Users can see the 'Add Event' button in the navigation bar | ✓ Passed |
| Tablet and mobile users can see the navigation bar options in a burger menu dropdown | ✓ Passed |

#### Posts Page / Homepage - Logged Out User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Users cannot view the follow button under each Popular Profile | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Users can view all posts - content, image, and tags             | ✓ Passed    |
| Users can view the likes count                                  | ✓ Passed    |
| Users can view the comments count                               | ✓ Passed    |
| Clicking on a post image redirects users to the selected post detail page | ✓ Passed    |
| Clicking on a post comments count redirects users to the selected post detail page | ✓ Passed    |
| Clicking on a post owner avatar redirects users to the selected profile page | ✓ Passed    |
| Users can search for a particular post by typing in the post title, the username of the post owner, or the post tag | ✓ Passed |

#### Posts Page / Homepage - Logged In User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Users can view the follow button under each Popular Profile     | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Clicking on a popular profile follow button enables users to follow or unfollow the profile | ✓ Passed |
| Users can view all posts - content, image, and tags             | ✓ Passed    |
| Users can view the likes count                                  | ✓ Passed    |
| If the logged-in user is the post owner, user cannot click the like button (tooltip warning given) | ✓ Passed |
| Clicking on the like button, if the logged-in user is not the post owner, like count goes up and down on a toggle | ✓ Passed |
| Users can view the comments count                               | ✓ Passed    |
| Clicking on a post image redirects users to the selected post detail page | ✓ Passed    |
| Clicking on a post comments count redirects users to the selected post detail page | ✓ Passed    |
| Clicking on a post owner avatar redirects users to the selected profile page | ✓ Passed |

#### Events Page - Logged Out User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Users cannot view the follow button under each Popular Profile | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Users can view all events - title, description, event date, event category, image, and tags | ✓ Passed    |
| Users can view the going count                                  | ✓ Passed    |
| Clicking on an event image redirects users to the selected event detail page | ✓ Passed    |
| Clicking on an event owner avatar redirects users to the selected profile page | ✓ Passed    |
| Users can search for a particular event by typing in the event title, the username of the event owner, the event date, or the event tag | ✓ Passed |

#### Events Page - Logged In User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Users cannot view the follow button under each Popular Profile | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Users can view all events - title, description, event date, event category, image, and tags | ✓ Passed    |
| Users can view the going count                                  | ✓ Passed    |
| Clicking on an event image redirects users to the selected event detail page | ✓ Passed    |
| Clicking on an event owner avatar redirects users to the selected profile page | ✓ Passed    |
| If the logged-in user is the event owner, user cannot click the going button (tooltip warning given) | ✓ Passed |
| Clicking on the going button, if the logged-in user is not the event owner, going count goes up and down on a toggle | ✓ Passed |
| If the logged-in user is the owner of the event, they can see the three dots edit/delete menu next to the created at date | ✓ Passed |
| User can edit their own events via the three dots edit/delete menu | ✓ Passed |
| On clicking edit event, user is redirected to the edit events page | ✓ Passed |
| User can delete their own events via the three dots edit/delete menu | ✓ Passed |
| On clicking delete event, user is taken to the create event page | ✓ Passed |

#### Post Page - Logged Out User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Users can view details of a single post                         | ✓ Passed    |
| Clicking on a post owner avatar redirects users to the selected profile page | ✓ Passed    |
| Clicking on the like button, users are advised to log in to like a post | ✓ Passed |
| Users cannot see the create comment form                        | ✓ Passed |

#### Post Page - Logged In User

| Test Description                                               | Test Result  |
|---------------------------------------------------------------|--------------|
| Users can view the Popular Profiles component                  | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed    |
| Users can view details of a single post                         | ✓ Passed    |
| Users can view the like count                                   | ✓ Passed    |
| Users can view the comments count                               | ✓ Passed    |
| Clicking on a post owner avatar redirects users to the selected profile page | ✓ Passed    |
| Clicking on the like button, like count goes up and down on a toggle | ✓ Passed |
| If the logged-in user is the post owner, user cannot click the like button (tooltip warning given) | ✓ Passed |
| Users can view any published comment posted about this post     | ✓ Passed    |
| Users can view the create comment form                          | ✓ Passed    |
| Users can type into the comment form and submit a comment to the post | ✓ Passed |
| On submitting a comment, the comment count increases by 1      | ✓ Passed    |
| If the logged-in user is the owner of a published comment, they can see the three dots edit/delete menu next to it | ✓ Passed |
| User can edit their own comment via the three dots edit/delete menu | ✓ Passed |
| User can delete their own comment via the three dots edit/delete menu | ✓ Passed |
| On deleting a comment, the comment count decreases by 1         | ✓ Passed    |
| If the logged-in user is the owner of the post, they can see the three dots edit/delete menu next to the created at date | ✓ Passed |
| User can edit their own posts via the three dots edit/delete menu | ✓ Passed |
| On clicking edit post, user is redirected to the edit post page | ✓ Passed |
| User can delete their own posts via the three dots edit/delete menu | ✓ Passed |
| On clicking delete post, user is taken to the create post page   | ✓ Passed    |

#### Event Page - Logged Out User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed |
| Users can view details of a single event            | ✓ Passed    |
| Clicking on an event owner avatar redirects users to the selected profile page | ✓ Passed |
| Clicking on the going button, users are advised to log in to click going to an event | ✓ Passed |

#### Event Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar redirects users to the selected profile page | ✓ Passed |
| Users can view details of a single event            | ✓ Passed    |
| Users can view the going count                      | ✓ Passed    |
| Clicking on an event owner avatar redirects users to the selected profile page | ✓ Passed |
| Clicking on the going button, going count goes up and down on a toggle | ✓ Passed |
| If the logged-in user is the event owner, user cannot click the going button (tooltip warning given) | ✓ Passed |
| If the logged-in user is the owner of the event, they can see the three dots edit/delete menu next to the created at date | ✓ Passed |
| User can edit their own events via the three dots edit/delete menu | ✓ Passed |
| On clicking edit event, user is redirected to the edit events page | ✓ Passed |
| User can delete their own events via the three dots edit/delete menu | ✓ Passed |
| On clicking delete event, user is taken to the create event page | ✓ Passed |

#### Add Post Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the empty form to create a new post | ✓ Passed    |
| Users can upload an image into the form            | ✓ Passed    |
| Users can change an uploaded image                 | ✓ Passed    |
| Users can't submit the form without an image - warning message displayed | ✓ Passed |
| Users can't submit the form without at least one tag - warning message displayed | ✓ Passed |
| Users can't submit the form without filling out the post text field - warning message displayed | ✓ Passed |

#### Add Event Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the empty form to create a new event | ✓ Passed    |
| Users can upload an image into the form            | ✓ Passed    |
| Users can change an uploaded image                 | ✓ Passed    |
| Users can't submit the form without an image - warning message displayed | ✓ Passed |
| Users can't submit the form without at least one tag - warning message displayed | ✓ Passed |
| Users can't submit the form without filling out the event title field - warning message displayed | ✓ Passed |
| Users can't submit the form without filling out the event description field - warning message displayed | ✓ Passed |
| Users can't submit the form without selecting an event date - warning message displayed | ✓ Passed |

#### Edit Event Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the event form pre-populated with the current event details | ✓ Passed |
| Users can upload an image into the form            | ✓ Passed    |
| Users can change an uploaded image                 | ✓ Passed    |
| Users can't submit the form without an image - warning message displayed | ✓ Passed |
| Users can't submit the form without at least one tag - warning message displayed | ✓ Passed |
| Users can't submit the form without filling out the event title field - warning message displayed | ✓ Passed |
| Users can't submit the form without selecting an event date - warning message displayed | ✓ Passed |
| Users can't submit the form without filling out the event description field - warning message displayed | ✓ Passed |

#### Edit Post Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the post form pre-populated with the current post details | ✓ Passed |
| Users can upload an image into the form            | ✓ Passed    |
| Users can change an uploaded image                 | ✓ Passed    |
| Users can't submit the form without an image - warning message displayed | ✓ Passed |
| Users can't submit the form without at least one tag - warning message displayed | ✓ Passed |
| Users can't submit the form without entering written content for the post - warning message displayed | ✓ Passed |

#### Event Feed - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can view the follow button under each Popular Profile | ✓ Passed |
| Clicking on a popular profile follow button, users can become a follower of the selected profile | ✓ Passed |
| Users can view all events posted by profiles they follow - title, description, event date, category, image, and tags | ✓ Passed |
| Users can view the going count                      | ✓ Passed    |
| Users see a no results found message if they don't follow any profiles, or the profiles they follow haven't posted any events | ✓ Passed |
| Clicking on an event image, users are redirected to the selected event page | ✓ Passed |
| Clicking on the going button, going count goes up and down on a toggle | ✓ Passed |
| If the logged-in user is the event owner, user cannot click the going button (tooltip warning given) | ✓ Passed |
| Clicking on an event owner avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can search for a particular event by typing in the event title, the username of the event owner, the event date, or the event tag | ✓ Passed |

#### Post Feed - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can view the follow button under each Popular Profile | ✓ Passed |
| Clicking on a popular profile follow button, users can become a follower of the selected profile | ✓ Passed |
| Users can view all posts posted by profiles they follow - written content, image, and tags | ✓ Passed |
| Users can view the likes count                      | ✓ Passed    |
| Users can view the comments count                   | ✓ Passed    |
| Users see a no results found message if they don't follow any profiles, or the profiles they follow haven't created any posts | ✓ Passed |
| Clicking on a post image, users are redirected to the selected post page | ✓ Passed |
| Clicking on the like button, likes count goes up and down on a toggle | ✓ Passed |
| If the logged-in user is the post owner, user cannot click the like button (tooltip warning given) | ✓ Passed |
| Clicking on a post comments count, users are redirected to the selected post detail page | ✓ Passed |
| Clicking on a post owner avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can search for a particular post by typing in keywords from the post content, the username of the post owner, or the post tag | ✓ Passed |

#### Going - User Logged In

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can view the follow button under each Popular Profile | ✓ Passed |
| Clicking on a popular profile follow button, users can become a follower of the selected profile | ✓ Passed |
| Users can view all events where they have clicked the going button - title, description, event date, event time, city, country, category, image, and tags | ✓ Passed |
| Users see a no results found message if they haven't clicked the going button on any events | ✓ Passed |
| Users can view the going count                      | ✓ Passed    |
| Clicking on an event image, users are redirected to the selected event page | ✓ Passed |
| Clicking on the going button, going count goes down and the event is removed from the going page | ✓ Passed |
| Clicking on an event owner avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can search for a particular event by typing in the event title, keywords from the description, the username of the event owner, the event date, or the event tag | ✓ Passed |

#### Liked - User Logged In

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can view the follow button under each Popular Profile | ✓ Passed |
| Clicking on a popular profile follow button, users can become a follower of the selected profile | ✓ Passed |
| Users can view all posts where they have clicked the like button - description, location, environmental metrics, image, and tags | ✓ Passed |
| Users see a no results found message if they haven't clicked the like button on any posts | ✓ Passed |
| Users can view the likes count                      | ✓ Passed    |
| Clicking on a post image, users are redirected to the selected post page | ✓ Passed |
| Clicking on the like button, likes count goes down and the post is removed from the liked page | ✓ Passed |
| Clicking on a post owner avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can search for a particular post by typing in the post title, keywords from the description, the username of the post owner, or the post tag | ✓ Passed |

#### Profile Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the Popular Profiles component      | ✓ Passed    |
| Clicking on a popular profile avatar, users are redirected to the selected profile page | ✓ Passed |
| Users can view the number of posts the profile owner has posted | ✓ Passed |
| Users can view the number of events the profile owner has posted | ✓ Passed |
| Users can view the number of followers the selected profile has | ✓ Passed |
| Users can view the number of other profiles the selected profile is following | ✓ Passed |
| Users can view the profile owner's username         | ✓ Passed |
| If the profile owner has provided this information, users can view the profile owner's about section | ✓ Passed |
| Users can view the posts which were posted by the selected profile | ✓ Passed |
| Users can view the events which were posted by the selected profile | ✓ Passed |
| Clicking on the post image, users are redirected to the selected post page | ✓ Passed |
| Clicking on the event image, users are redirected to the selected event page | ✓ Passed |
| Clicking on the like button, like count goes up and down for post on a toggle | ✓ Passed |
| Clicking on the going button, going count goes up and down for event on a toggle | ✓ Passed |
| If the logged in user is the post owner, the user cannot click the like button - tooltip warning given | ✓ Passed |
| If the logged in user is the event owner, the user cannot click the going button - tooltip warning given | ✓ Passed |
| Clicking on post comments count, users are redirected to the selected post page | ✓ Passed |
| If the user is viewing their own profile page, they can see the three dots edit profile menu next to the profile stats | ✓ Passed |
| Users can edit their own profile page via the three dots edit/delete menu | ✓ Passed |
| On clicking edit profile, the user is redirected to the edit profile page | ✓ Passed |
| User can edit their own username via the three dots edit profile menu | ✓ Passed |
| User can edit their own password via the three dots edit profile menu | ✓ Passed |

#### Edit Profile Page - Logged In User

| Test Description                                   | Test Result  |
|---------------------------------------------------|--------------|
| Users can view the profile form pre-populated with the current profile details | ✓ Passed |
| Users can upload an avatar image into the form      | ✓ Passed    |
| Users can change the uploaded image                 | ✓ Passed    |
| Users can input information into their about section on the form | ✓ Passed    |

### Browser Compatibility

Chrome DevTools was used to test the responsiveness of the application on different screen sizes. In addition, testing has been carried out on the following browsers:

- Chrome Version 107.0.5304.87
- Edge Version 107.0.1418.24
- Firefox Version 94.0.1
- Safari on macOS (Safari Version 15.6)

### Lighthouse Testing

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of _Performance_, _Accessibility_, _Best Practices_ and _SEO_. The testing showed the following:

- Home Page - Performance: 76, Accessibility: 95, Best Practises: 75, SEO: 100

![Lighthouse test](https://res.cloudinary.com/dxajyjfpw/image/upload/v1698618207/Screenshot_2023-10-29_at_23.23.20_ior8ya.png)

### Known Bugs

Currently, there is a bug causing unexpected glitches within the entire navigation bar, when interacting with the Explore and Feed navigation dropdown menus.

## Backend Testing

### Table of Contents
   -   [Automated Testing](#automated-testing-1)
   -   [Manual Testing](#manual-testing-1)

### Automated Testing

20 automated tests have been written into the drf_api to test user story scenarios. Automated tests were created to cover the following apps: posts, events, comments, likes, eventgo and profiles. All tests passed.

#### Manual Testing

| **Profiles**                                           | **Posts**                                            | **Events**                                        | **Comments**                                    |
| ------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| ✓ Profile List can be ordered by posts_count in ascending order | ✓ Posts List can be ordered by comments_count in ascending order | ✓ Event List can be ordered by going_count in ascending order | ✓ Comment List can be filtered by post      |
| ✓ Profile List can be ordered by posts_count in descending order | ✓ Posts List can be ordered by comments_count in descending order | ✓ Event List can be ordered by going_count in descending order | ✓ Comment List can be filtered by post      |
| ✓ Profile List can be ordered by events_count in ascending order | ✓ Posts List can be ordered by likes_count in ascending order | ✓ Event List can be searched by owner | ✓ Comment List can be filtered by post      |
| ✓ Profile List can be ordered by events_count in descending order | ✓ Posts List can be ordered by likes_count in descending order | ✓ Event List can be searched on by title | ✓ Comment List can be filtered by post      |
| ✓ Profile List can be ordered by followers_count in ascending order | ✓ Posts List can be searched by owner | ✓ Event List can be searched on by tag |                                               |
| ✓ Profile List can be ordered by followers_count in descending order | ✓ Posts List can be searched on by content | ✓ Event List can be searched on by event_date |                                               |
| ✓ Profile List can be ordered by following_count in ascending order | ✓ Posts List can be searched on by tag | ✓ Event List can be filtered by category |                                               |
| ✓ Profile List can be ordered by following_count in descending order |   |   |                                               |
