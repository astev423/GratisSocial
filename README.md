## IDEAS AND PROBLEMS


Use react dev tools for site
PROBLEMS:
-I dont think follow info shows for other users since it is based off client's id
-Too much info in my components and pages, use layout and globals to prevent repetition. try to split it up more
-Have multiple folders for components, and a dedicated pages folder for all pages

IDEAS: Remove once repo made public
-try fetching on server components https://www.youtube.com/watch?v=rGPpQdbDbwo&list=WL&index=23
-use adapter pattern for getting userId from clerk incase clerk changes how id is gotten
-add button to delete posts
-add follower mechanic
-add dm mechanic

## IMPORTANT NOTES
-Try to to use SSR when possible, especially for fetching info. Much easier than doing useEffect on a client component

## WELCOME TO GratisSocial

Open social media platform, we don't sell your data, in fact we can't, since there are no ads! Just a
nice, simple, intuitive platform anyone can use.
Built using NextJS, typescript, Prisma ORM, and Clerk

## HOW TO USE

You will need to clone the repo, then run

npm install

Then you need to make a database and have it running in the backround (I use psql on linux)
Then you need to connect it to Prisma (follow the prisma website tutorial)
You will also need to set up Clerk (follow their website tutorial aswell)
