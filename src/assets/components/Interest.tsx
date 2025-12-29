import { IoIosAdd, IoIosCheckmark } from "react-icons/io"
import type { InterestProps } from "../utils/types"

const Interest: React.FC<InterestProps> = ({ label, selected, getInterestFn }) => {
    return (
        <div className={`bg-grayDrk rounded-xl flex items-center py-1 pr-4 pl-2 border ${selected ? 'border-green-500' : ' border-transparent'}`} onClick={getInterestFn}>
            {selected ? <IoIosCheckmark color="#16a34a" size={28} /> : <IoIosAdd color="#ffffff" size={28} />}
            <p className={`text-grayLt capitalize ${selected ? 'text-green-300' : ''}`}>{label}</p>
        </div>
    )
}

export default Interest