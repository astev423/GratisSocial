import HeaderNav from "./HeaderNav"
import SiteLogo from "./SiteLogo"

export default async function Header() {
  return (
    <div className="flex flex-wrap bg-white p-8 items-center justify-between">
      <SiteLogo />
      <HeaderNav />
    </div>
  )
}
