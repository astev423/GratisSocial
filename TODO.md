That’s the classic N+1 pattern. It’s usually a big difference, and the fix is to stop doing a per-post “liked?” request.

Better options (pick one):

1) Include viewer_has_liked in the posts response (best)

When you fetch posts, have the backend join against the likes table for the current user and return a boolean per post.

Response shape:

posts: [{ id, …, viewerHasLiked: true/false, likeCount, … }]

This turns 1 + N requests into 1 request, and lets you render immediately.

-Make API route names more descriptive and make them only do ONE THING

-Hide comments initially, instead say like "2 comments" and add dropdown to see them if > 0 comments
this helps makes post all consistent size initially and avoid CLS

-Instead of having seperate comments and likes fetch, which spams API, just retrieve comments and likes
on post when getting posts and pass that as props to children

-Only fetch first 10 posts, then automatically fetch next ten if user scrolls to bottom of the screen, use 
index to avoid constant sorting of posts by date whenever we request new posts

-Add date and clickable link to user profile in comments
-Add server actions

-Allow user to change user username when they change their username in clerk, make sure no duplicates

-Add dm mechanic

-Allow users to post images

-Allow accounts to be private and add follow requests

-Clerk webhooks to add user to db

-Use react dev tools to test performance
