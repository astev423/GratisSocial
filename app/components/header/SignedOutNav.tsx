import { SignInButton, SignUpButton } from "@clerk/nextjs"

export default function SignedOutNav() {
  return (
    <div className="flex gap-20">
      <SignInButton>
        <div className="clickable-scale-animation">Sign in</div>
      </SignInButton>
      <SignUpButton>
        <div className="clickable-scale-animation">Sign up</div>
      </SignUpButton>
    </div>
  )
}
