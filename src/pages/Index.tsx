import ClientBaza from "../components/Clientbaza"
import Floating from "../components/Floating"
import Footer from "../components/Footer"
import Income from "../components/Incomebg"
import Materials from "../components/Materials"
import Offer from "../components/Offer"
import Profit from "../components/Profit"
import Variant from "../components/Variant"
import Zeroblock from "../components/Zeroblock"

const Index = () => {
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full max-w-[600px]">
        <Zeroblock />
        <Offer />
        <Materials />
        <Profit />
        <Income />
        <ClientBaza />
        <Variant />
        <Footer />

        <Floating />
      </div>
    </div>
  )
}

export default Index