import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <p>
        <time className="thumbnail-date">{node.frontmatter.date}</time>
        <span className="category"> | {node.frontmatter.category}</span>
      </p>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>

      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
