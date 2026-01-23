-Fix utils, add api request function with abort controller for cancelling, then useFetch can call that
which allows us to make api requests even if we don't need to fetch data

-Remove unneeded CSS

-Hide comments initially, instead say like "2 comments" and add dropdown to see them if > 0 comments
this helps makes post all consistent size initially and avoid CLS

-Fix linting errors and warnings

-Lots of repitition in client utils.ts. make one central fetcher with abort controller. or maybe
find way to combine useFetch and fetch methods below

-Only fetch first 10 posts, then automatically fetch next ten if user scrolls to bottom of the screen, 
use index to avoid constant sorting of posts by date whenever we request new posts

-Add date and clickable link to user profile in comments

-Add server actions

-Allow user to change user username when they change their username in clerk, make sure no duplicates

-Add dm mechanic

-Allow users to post images

-Allow accounts to be private and add follow requests

-Clerk webhooks to add user to db

-Use react dev tools to test performance
