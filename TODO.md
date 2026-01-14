-Instead of having seperate comments and likes fetch, which spams API, just retrieve comments and likes
on post when getting posts and pass that as props to children, find way to update posts specifically
rather than all posts, like broken because of that, this needs a big refactor

-Add date and clickable link to user profile in comments

-Fix posts going to top if you comment/like on them

-Keep posts the same size unless user clicks to show more comments, make post with no comments and post with comments same size unless click more basically, AVOID CLS

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
