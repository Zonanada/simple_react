import Header from "./Header"
import TeachSection from "./components/TeachSection"
import ButtonSection from "./components/ButtonSection"
import TabsSection from "./components/TabsSection"
import IntroSection from "./components/IntroSections"
import FeedBackSection from "./components/FeedBackSection"
import EffectSection from "./components/EffectSection"
import { useState } from "react"


export default function App() {
  const [tab, setTab] = useState("main")

  return (
    <>
      <Header />
      <main>
        <IntroSection/>
        <TabsSection active = {tab} onChange={(current) => setTab(current)}/>

        {tab == "main" && <><TeachSection />
        <ButtonSection /></>}
        {tab === "feedback" && <FeedBackSection/> }
        
        {tab === 'effect' && <EffectSection/>}

      </main>
    </>
  )
} 
