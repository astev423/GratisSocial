-Data validation with ZOD is super important, also can just import types from @prisma instead of manually
typing them, if you want to remove stuff then just make a type of that with Omit<>, also use zod or
other validation library in all http reqs and responses, using zod's .pick() or .omit() is even better for
making types

-Chore: come up with better names for zod objects and validation, watch vids on zod

-Add wrapper for functions that need zod validation to avoid duplicate logic

-New lines don't get preserved when submitting post, make them preserve

-Long titles don't wrap around post, instead going out of bounds, make them wrap

-Fix comments UI (dropdown to view comments looks bad)

-Keep eye out for unneeded css

-Only fetch first 10 posts, then automatically fetch next ten if user scrolls to bottom of the screen, 
use index to avoid constant sorting of posts by date whenever we request new posts

-Add date and clickable link to user profile in comments

-Add ability to like and dislike comments, reusing functionality from posts

-Add feature to only fetch first 10 comments, then user can click to fetch 10 next ones, etc

-Add server actions for refetching data like comments, post follow info, etc

-Allow user to change user username when they change their username in clerk, make sure no duplicates

-Add dm mechanic

-Allow users to post images

-Allow accounts to be private and add follow requests

-Clerk webhooks to add user to db

-Use react dev tools to test performance
