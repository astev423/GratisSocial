-Refactor comments and then likes, they need refactor badly

-Instead of having seperate comments and likes fetch, which spams API, just retrieve comments and likes
on post when getting posts and pass that as props to children

-Add date and clickable link to user profile in comments

-Fix posts going to top if you comment/like on them

-Add a way to refetch info but only for a specific post so we don't requery all posts everytime
like or comment happens

-Only fetch 3 comments, allow users to see more comments if they click a dropdown, also add delete
to comments

-Add server actions

-Allow user to change user username when they change their username in clerk, make sure no duplicates

-Add dm mechanic

-Allow users to post images

-Allow accounts to be private and add follow requests

-Clerk webhooks to add user to db

-Use react dev tools to test performance
