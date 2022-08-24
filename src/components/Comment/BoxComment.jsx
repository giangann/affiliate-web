import React, { useState, useRef, useEffect } from 'react'

const INITIAL_HEIGHT = 46

export const BoxComment = ({ userName, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const outerHeight = useRef(INITIAL_HEIGHT)
  const textRef = useRef(null)
  const containerRef = useRef(null)

  //   const handleExpand = () => {
  //     setIsExpanded(!isExpanded)
  //   }

  const handleChange = (e) => {
    setCommentValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(commentValue)
    setCommentValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight
      setIsExpanded(true)
    }
  }

  console.log(outerHeight.current, isExpanded)

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        //   className={cn('comment-box', {
        //     expanded: isExpanded,
        //     collapsed: !isExpanded,
        //     modified: commentValue.length > 0
        //   })}
        style={{
          display: 'inline-block',
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={handleChange}
          placeholder={`@${userName}`}
          value={commentValue}
          style={{ height: '100%' }}
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Respond
          </button>
        </div>
      </form>
    </div>
  )
}
