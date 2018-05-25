import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

/* eslint react/no-array-index-key: "off" */

const Links = ({ entries }) => (
  <StyledLinkList>
    {entries.map(({ entry }, key) => (
      <EntryListItem key={key}>
        <Link to={entry.childMarkdownRemark.fields.slug}>
          <EntryTitle>{entry.childMarkdownRemark.frontmatter.title}</EntryTitle>
        </Link>
      </EntryListItem>
    ))}
  </StyledLinkList>
)

const ChapterList = ({ chapters, entries, title, level = 0 }) => (
  <StyledChapterList>
    {title && (
      <ChapterListItem key={`${title}${level}`}>
        <ChapterTitle level={level}>{title}</ChapterTitle>
      </ChapterListItem>
    )}
    <ChapterListItem>{entries && <Links entries={entries} />}</ChapterListItem>
    <ChapterListItem>
      {chapters &&
        chapters.map((chapter, index) => (
          <ChapterList {...chapter} level={level + 1} key={`${index}`} />
        ))}
    </ChapterListItem>
  </StyledChapterList>
)

const TableOfContents = ({ chapters }) => (
  <TOCWrapper>
    {chapters.map((chapter, index) => <ChapterList {...chapter} key={index} />)}
  </TOCWrapper>
)

export default TableOfContents

const TOCWrapper = styled.div`
  padding: ${props => props.theme.sitePadding};
  margin: 0;
`

const StyledChapterList = styled.ol`
  list-style: none;
  margin: 0;
  
`

const StyledLinkList = styled.ol`
  list-style: none;
  
`

const EntryTitle = styled.a`
  display: inline-block;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.5;
  text-decoration: none;
  color: #707070;
  a:hover {
  color: #444;

  }
`

const ChapterListItem = styled.li`
  margin: 0;
`

const EntryListItem = styled.li`
  margin: 0;

`

const ChapterTitle = styled.h5`
  font-weight: ${({ level }) => {
    switch (level % 3) {
      case 1:
        return '600'
      case 2:
        return '600'
      default:
        return '600'
    }
  }};
  font-size: ${({ level }) => {
    switch (level % 3) {
      case 1:
        return '1.2rem'
      case 2:
        return '1.2rem'
      default:
        return '1.2rem'
    }
  }};
  
  text-transform: ${({ level, theme }) => {
    switch (level % 3) {
      case 1:
        return 'inherit'
      case 2:
        return 'inherit'
      default:
        return 'uppercase'
    }
  }};

`
