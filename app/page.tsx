// Replace the entire file with a redirect to the dashboard home page
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/dashboard")
}
