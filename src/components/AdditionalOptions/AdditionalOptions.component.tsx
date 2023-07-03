import { ToggleSwitch } from 'components/ToggleSwitch'
import { FC, ReactElement } from 'react'
import * as S from './AdditionalOptions.styles'

export const AdditionalOptions: FC = (): ReactElement => {
  return (
    <>
      <S.AdditionalOptions>
        <ToggleSwitch />
        <S.SocialsContainer>
          <a href='https://github.com/Ch1py7' target='_blank' rel='noreferrer'>
            <S.Socials icon='mdi:github' height={26} width={26} />
          </a>
          <a href='https://www.linkedin.com/in/gerardo-bulbsum/' target='_blank' rel='noreferrer'>
            <S.Socials icon='bi:linkedin' height={22} width={22} />
          </a>
        </S.SocialsContainer>
      </S.AdditionalOptions>
      <S.Mobile>
        <S.BurgerMenu icon='iconamoon:menu-burger-horizontal-bold' />
      </S.Mobile>
    </>
  )
}
