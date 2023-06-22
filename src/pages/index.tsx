import { Fragment } from "react"


export default function Home() {
  return (
    <Fragment>
      <title>Beningin</title>
      <main>
        <div className="w-[40%] mx-auto py-32 text-center">
          <img className="w-[80%] mx-auto" src="/images/logo.png" alt="" />
          <div className="text-white uppercase">
            <h1>Start game</h1>
            <h1>Continue</h1>
            <h1>Settings</h1>
            <h1>Credits</h1>
            <h1>Exit Game</h1>
          </div>
        </div>
      </main>
    </Fragment>
  )
}
