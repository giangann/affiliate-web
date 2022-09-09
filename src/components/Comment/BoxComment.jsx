import React, { useState, useRef, useEffect } from 'react'
import { Button } from '~/components/Buttons'
import './style.css'
import { addReply, getMe } from '~/apis'

const INITIAL_HEIGHT = 36
const EXPAND_HEIGHT = 130

export const BoxComment = ({ userName, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const [user, setUser] = useState({})

  const textRef = useRef(null)

  const handleChange = (e) => {
    setReplyContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('reply content', replyContent)
    props.onSubmit(replyContent)
    setReplyContent('')
    setIsExpanded(false)
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
      setIsExpanded(true)
    }
  }
  useEffect(() => {
    getMe().then((data) => {
      setUser(data.data)
    })
  }, [])

  return (
    <div
      className="box-comment"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: isExpanded ? EXPAND_HEIGHT : INITIAL_HEIGHT,
        border: `1px solid ${isExpanded ? '#3490dc' : '#606f7b'}`
      }}
    >
      <textarea
        ref={textRef}
        onClick={onExpand}
        onFocus={onExpand}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder={`@${userName}`}
        value={replyContent}
        className="comment-input"
      />
      <div
        className={`actions ${!isExpanded ? 'hide' : 'show'}`}
        style={{
          display: 'flex',
          width: '100%'
        }}
      >
        <div style={{ flex: 2 }}>
          <input type="text" placeholder="Name" className="action-input" />
          <input type="text" placeholder="Email" className="action-input" />
        </div>
        <div
          style={{
            flex: 1,
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          className="action-button"
        >
          <Button type="button-grey" onClick={handleClose} sx={{ marginRight: '8px' }}>
            CANCEL
          </Button>

          <Button type="button-blue" onClick={handleSubmit} disabled={replyContent.length < 1}>
            REPLY
          </Button>
        </div>
      </div>
    </div>
  )
}
