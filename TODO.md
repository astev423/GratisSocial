-Have one "authenticator" backend function that authenticates and returns user id so I dont have to manually type it out every time

-Refactor comments and then likes, they need refactor badly

-Add a way to refetch info but only for a specific post so we don't requery all posts everytime
like or comment happens

-Only fetch 3 comments, allow users to see more comments if they click a dropdown, also add delete
to comments

-Optimize DB queries, findMany looks through entire DB, don't use it if we only want 1 thing

-Reuse backend queries functions instead of manually writing them in API routes

-Add server actions

-Use react dev tools to test performance

-Allow user to change user username when they change their username in clerk, make sure no duplicates

-Add dm mechanic

-Allow users to post images

-Allow accounts to be private and add follow requests

-Clerk webhooks to add user to db
