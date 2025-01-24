import { useState } from 'react'
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'

type LikeIconProps = {
  isLike?: boolean
}

const LikeIcon = (props: LikeIconProps) => {
  const [isLike, setIsLike] = useState(props.isLike)

  return (
    <>
      <div>
        {isLike ? (
          <MdOutlineStarPurple500
            className="h4 w-4 cursor-pointer text-hotcoin"
            onClick={() => setIsLike(!isLike)}
          />
        ) : (
          <MdOutlineStarOutline
            className="h4 w-4 cursor-pointer"
            onClick={() => setIsLike(!isLike)}
          />
        )}
      </div>
    </>
  )
}

export default LikeIcon
