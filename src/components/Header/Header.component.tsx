import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import * as S from './Header.styles'
import { useContext } from 'react'
import { LightModeContext } from 'context'

export const Header: FC = (): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  return (
    <S.Header>
      <S.Title lightMode={lightMode}>
        Github <br /> Analytics
      </S.Title>
      <S.Phrase lightMode={lightMode}>The fastest way to see your statistics and curious graphs of Github.</S.Phrase>
      <S.ButtonsContainer>
        <S.Anchor href='#analyze' lightMode={lightMode}>
          Get Analytics
          <Icon icon='formkit:arrowright' width={24} height={24} />
        </S.Anchor>
      </S.ButtonsContainer>
    </S.Header>
  )
}
