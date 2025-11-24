import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function SignedOutNav() {
  const scaleItemAnimation = 'hover:scale-130 duration-300 hover:cursor-pointer';

  return (
    <div className="flex gap-20">
      <SignInButton>
        <div className={scaleItemAnimation}>Sign in</div>
      </SignInButton>
      <SignUpButton>
        <div className={scaleItemAnimation}>Sign up</div>
      </SignUpButton>
    </div>
  );
}
