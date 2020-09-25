import { relative } from 'path'
import React from 'react'
import { usePinnedReposQuery } from '../generated/graphql'

export const PinnedRepos: React.FC = () => {
  const [{ data }] = usePinnedReposQuery()
  return (
    <>
      {data?.viewer.pinnedItems.edges ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'left',
            position : 'absolute',
            background : 'none',
            border : '2px solid #73AD21',
            borderRadius : '25px',
            marginBottom : '6%',
            marginRight : '1%',
            padding : '1%'
          }}
        >
          {data.viewer.pinnedItems.edges.map((node, index) => {
            if (node && node.node) {
              const { name, description, url, homepageUrl, pushedAt } = {
                name: '',
                description: '',
                url: '',
                homepageUrl: '',
                pushedAt: '',
                ...node.node
              }
              return (
                <div
                  key={index}
                  style={{ marginLeft: '1rem', maxWidth: '24rem', background:'none',padding:'0.2%',borderRadius:'25px' }}
                >
                  <h2>{name}</h2>
                  {pushedAt ? <p>updated: {pushedAt}</p> : null}
                  <h4 style={{ marginBottom: 0 }}>Description</h4>
                  <p style={{ marginTop: 0 }}>
                    {description ? description : 'no description'}
                  </p>
                  <a href={url}>View on GitHub</a>
                  {homepageUrl ? (
                    <a href={homepageUrl} style={{ marginLeft: '1rem' }}>
                      View website
                    </a>
                  ) : null}
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      ) : (
        <div className="loading">
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
	<div className="line"></div>
</div>
      )}
    </>
  )
}

export default PinnedRepos