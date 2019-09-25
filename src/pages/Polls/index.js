import React, { useState } from 'react'
import './Polls.scss'
import Layout from '../../components/Layout'
import Poll from './Poll'

const Polls = () => {
  const [polls] = useState([
    {
      id: 1,
      question: 'Favourite programming language?',
      published_at: '2014-11-11T08:40:51.620Z',
      url: '/questions/1',
      choices: [
        {
          choice: 'Swift',
          url: '/questions/1/choices/1',
          votes: 2048
        },
        {
          choice: 'Python',
          url: '/questions/1/choices/2',
          votes: 1024
        },
        {
          choice: 'JavaScript',
          url: '/questions/1/choices/3',
          votes: 512
        },
        {
          choice: 'C#',
          url: '/questions/1/choices/4',
          votes: 256
        }
      ]
    }
  ])
  return (
    <Layout>
      {polls.map(poll => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </Layout>
  )
}

export default Polls
