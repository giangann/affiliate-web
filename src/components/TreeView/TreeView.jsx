import * as React from 'react'
import { CommentReply } from '../Comment'

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

const commentTree = createTree(comments)

export function TreeView() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {commentTree.map((comment) => {
        return <CommentReply key={comment.id} comment={comment} first={true} />
      })}
    </div>
  )
}
