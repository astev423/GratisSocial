## IDEAS AND PROBLEMS

PROBLEMS:
-HUGE SECURITY ISSUE WITH fetchUser API CALL, IT RETURNS ALL INFO OF USER.
To fix this I think it should only return username, firstname, and lastname
No need to return email or id, also don't let people search by ID, try and keep id secret

IDEAS: Remove once repo made public
-add button to delete posts
-add follower mechanic
-add dm mechanic

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
