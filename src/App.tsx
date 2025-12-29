import { useState } from "react";
import Interest from "./assets/components/Interest";
import { desc, head, interestOpts } from "./assets/utils/data";
import Message from "./assets/components/Message";

const App = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [showMaxMsg, setShowMaxMsg] = useState(false)
  const handleInterest = (label: string) => {
    if (selectedInterests?.length === 5) {
      setSelectedInterests((prev: string[]) => {
        if (prev.includes(label)) {
          setShowMaxMsg(false)
          return prev.filter(interest => interest !== label)
        }
        if (prev.length === 5) {
          setShowMaxMsg(true)
          return prev
        }
        setShowMaxMsg(false)
        return [...prev, label]
      })

      setShowMaxMsg(false)
    }
    else {
      setShowMaxMsg(false)
      setSelectedInterests((prev: string[]) => prev?.includes(label) ? prev?.filter(interest => label !== interest) : [...prev, label])
    }
  }
  return (
    <div className="min-h-screen bg-grayMd flex justify-center items-center">
      <div className="container">
        {/* WRAP */}
        <div className="max-w-[600px] bg-gray-300 rounded-xl border border-grayMd p-4 capitalize shadow-xl">
          {showMaxMsg && <Message />}
          <p className="font-bold text-xl text-grayDrk">{head}</p>
          <p className="text-grayMd text-sm">{desc}</p>
          {/* LENGTH */}
          <p className="text-grayDrk text-sm capitalize mt-6 font-semibold">{`selected interests (${selectedInterests?.length})`}</p>
          {/* OPTIONS */}
          <div className="flex flex-wrap gap-2 py-4 max-h-[300px] overflow-auto">
            {interestOpts?.map((interest: string, index: number) => <Interest key={index} label={interest} getInterestFn={() => handleInterest(interest)} selected={selectedInterests?.includes(interest)} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
