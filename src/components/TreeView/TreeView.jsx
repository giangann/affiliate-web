import * as React from 'react'
import { CommentReply } from '../Comment'
import { useQuery } from 'react-query'
import axios from 'axios'
import { baseURL } from '~/apis/request'

const comments = [
  {
    id: 1,
    parentId: null,
    text: 'Love this article!',
    author: 'john',
    children: null
  },
  {
    id: 3,
    parentId: 1,
    text: 'Agreed! this article is great',
    author: 'kevin',
    children: null
  },
  {
    id: 2,
    parentId: 1,
    text: 'What r u talking about this article is terrible...',
    author: 'james',
    children: null
  },
  {
    id: 5,
    parentId: null,
    text: 'Sweet article! Nice job always high quality.',
    author: 'steve',
    children: null
  },
  {
    id: 4,
    parentId: 2,
    text: 'come on, its a good article and u know it',
    author: 'sarah',
    children: null
  },
  {
    id: 6,
    parentId: 5,
    text: 'agreed, solid content here for sure!',
    author: 'jeff',
    children: null
  },
  {
    id: 7,
    parentId: 2,
    text: 'Cha toi id la 2, ong toi id la 1 What r u talking about this article is terrible...',
    author: 'Bao dzz123',
    children: null
  },
  {
    id: 8,
    parentId: 7,
    text: 'Cha toi id la 7, ong toi id la 2',
    author: 'Bao 321',
    children: null
  },
  {
    id: 9,
    parentId: 8,
    text: 'Cha toi id la 7, ong toi id la 2',
    author: 'Bao 321',
    children: null
  },
  {
    id: 10,
    parentId: 9,
    text: 'Cha toi id la 7, ong toi id la 2',
    author: 'Bao 321',
    children: null
  }
]

function createTree(list) {
  var map = {},
    node,
    roots = [],
    i

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i // initialize the map
    list[i].children = [] // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i]
    if (node.parentId) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}

export function TreeView({ ...props }) {
  const [listReplies, setListReplies] = React.useState([])
  const replyTree = createTree(listReplies)

  React.useEffect(() => {
    const getRepliesByReviewId = async () => {
      const res = await axios.get(
        `${baseURL}interaction/getInteractionByIdReview?reviewId=${props.reviewId}`
      )
      const listOfReplies = res.data.data.map((item, index) => ({
        id: item.id,
        parentId: null,
        text: item.reply_content,
        author: item.user.name
      }))
      setListReplies(listOfReplies)
    }
    getRepliesByReviewId()
  }, [props.reRender])
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {replyTree.map((comment) => {
        return <CommentReply key={comment.id} comment={comment} first={true} />
      })}
    </div>
  )
}
