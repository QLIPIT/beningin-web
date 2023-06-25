import Link from "next/link"
import { Fragment } from "react"

export default function Home() {

  return (
    <Fragment>
      <title>Beningin</title>
      <main>
        <div className="w-[40%] mx-auto py-32 text-center">
          <img className="w-[80%] mx-auto" src="/images/logo.png" alt="" />
          <div className="text-white uppercase">
            <Link href={'/select'}><h1 className="zoom">Start game</h1></Link>
            <h1 className="zoom">Continue</h1>
            <h1 className="zoom">Settings</h1>
            <h1 className="zoom">Credits</h1>
            <h1 className="zoom">Exit Game</h1>
          </div>
        </div>
      </main>
    </Fragment >
  )
}
