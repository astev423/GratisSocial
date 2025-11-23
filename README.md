## IDEAS AND PROBLEMS

PROBLEMS:

-Have separate fetchPosts for user profile so can use enum and usernames can be "myPosts"

-Move state down, client comps too high up

-Change user username when they change their username in clerk, make sure no duplicates

-Too much info in my components and pages, use layout and globals to prevent repetition. Try to split it up more

-Have multiple folders for components, and a dedicated pages folder for all pages

-Allow users to filter posts by following or all public posts (private posts only see via follow)

## IDEAS: Remove once repo made public

-add suspense for loading posts and other info

-try fetching on server components https://www.youtube.com/watch?v=rGPpQdbDbwo&list=WL&index=23

-use adapter pattern for getting userId from clerk in case clerk changes how ID is gotten

-add button to delete posts

-add follower mechanic

-add dm mechanic

## IMPORTANT NOTES

-Try to use SSR when possible, especially for fetching info. Much easier than doing useEffect on a client component

## WELCOME TO GratisSocial

Open social media platform, we don't sell your data, in fact we can't, since there are no ads! Just a
nice, simple, intuitive platform anyone can use.
Built using NextJS, typescript, Prisma ORM, and Clerk

## HOW TO SET UP GRATIS

**1. You will need to clone the repo, then run**

```
npm install
```
**2. Then, make a database and run it in the background (my DB is psql on linux)**

**3. Then connect your DB to Prisma (follow the prisma website tutorial or read steps below (my steps might not work))**

For connecting it to psql I simply made a .env file with my database information

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

and then ran the commands:

```
npx prisma migrate dev --name init
npx prisma generate
```
**3. You will also need to set up Clerk (follow their website tutorial or steps below)**

Make a clerk account and get your API keys and then put it in the .env file like so
```
<other env file above>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_key_here
CLERK_SECRET_KEY=your_private_key_here
```
