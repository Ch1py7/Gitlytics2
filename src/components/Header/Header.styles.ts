import styled from 'styled-components'

interface LightMode {
  lightMode: boolean
}

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 105px);
  width: 100%;
  padding: 4rem 0;
  text-align: center;
`

export const Title = styled.h1<LightMode>`
  padding-bottom: 1.8rem;
  background-image: ${({ lightMode }) =>
    lightMode
      ? 'linear-gradient(to bottom, #000, #a0a0a0, #000)'
      : 'linear-gradient(to bottom, #2b2b2b, #f3f3f3, #2b2b2b)'};
  background-clip: text;
  font-weight: 900;
  font-size: 12.8rem;
  color: transparent;
  line-height: 1;
  -webkit-background-clip: text;
  @media (max-width: 768px) {
    height: 20rem;
    font-size: 7.2rem;
  }
`

export const Phrase = styled.p<LightMode>`
  margin-top: 2rem;
  font-weight: 700;
  font-size: 2rem;
  color: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
  line-height: 2.8rem;
  transition: all 0.2s ease-in-out;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Anchor = styled.a<LightMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 1.6rem;
  border: ${({ lightMode }) => (lightMode ? '1px solid #0a0a0a' : '1px solid #f3f3f3')};
  border-radius: 0.375rem;
  background-color: transparent;
  gap: 1.2rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ lightMode }) => (lightMode ? '#0a0a0a' : '#f3f3f3')};
    color: ${({ lightMode }) => (lightMode ? '#f3f3f3' : '#0a0a0a')};
  }
`
