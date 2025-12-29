import { IoIosAdd, IoIosCheckmark } from "react-icons/io"
import type { InterestProps } from "../utils/types"

const Interest: React.FC<InterestProps> = ({ label, selected, getInterestFn }) => {
    return (
        <div className={`shadow-md rounded-xl flex items-center py-1 pr-4 pl-2 border cursor-pointer ${selected ? 'border-green-600' : ' border-grayDrk'}`} onClick={getInterestFn}>
            {selected ? <IoIosCheckmark color="#16a34a" size={28} /> : <IoIosAdd color="#111827" size={28} />}
            <p className={`capitalize font-semibold ${selected ? 'text-green-600' : 'text-grayDrk'}`}>{label}</p>
        </div>
    )
}

export default Interest