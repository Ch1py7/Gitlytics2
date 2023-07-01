import styled from 'styled-components'

export const FirstContributionCards = styled.div`
  display: flex;
  gap: 4rem;
`

export const BugBounty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  padding: 0.7rem 0;
  background-color: #30363d;
  border-radius: 1rem;
  border: 1px solid #8c8c8c;
  font-weight: 700;
  gap: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #202020;
    scale: 1.1;
  }
`

export const FirstOf = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  padding: 0.7rem 0;
  background-color: #30363d;
  border-radius: 1rem;
  border: 1px solid #8c8c8c;
  font-weight: 700;
  gap: 2rem;
  color: #efefef;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #202020;
    scale: 1.1;
  }
`
