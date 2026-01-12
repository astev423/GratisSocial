-Routes should use dbqueries api instead of directly working with prisma

-Try adding wrapper for getting id to db queries, make sure they return the right info

-Refactor comments and then likes, they need refactor badly

-Refactor backend queries functions instead of manually writing them in API routes

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
