import { TextL, TextM, TitleXL } from '../../../../styles/fonts'
import {
  IntroductionContainer,
  IntroductionContent,
  Topic,
  TopicIcon,
} from './styles'
import IntroductionImage from '../../../../assets/introduction-image.svg'
import { ShoppingCartSimple } from '@phosphor-icons/react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <TitleXL $fontColor="title">
          Encontre o café perfeito para qualquer hora do dia
        </TitleXL>
        <TextL $fontColor="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </TextL>

        <Topic>
          <TopicIcon $backgroundColor="yellow-dark">
            <ShoppingCartSimple weight="fill" size={14} />
          </TopicIcon>
          <TextM $fontColor="text">Compra simples e segura</TextM>
        </Topic>

        <Topic>
          <TopicIcon $backgroundColor="gray">
            <ShoppingCartSimple weight="fill" size={14} />
          </TopicIcon>
          <TextM $fontColor="text">Compra simples e segura</TextM>
        </Topic>

        <Topic>
          <TopicIcon $backgroundColor="yellow">
            <ShoppingCartSimple weight="fill" size={14} />
          </TopicIcon>
          <TextM $fontColor="text">Compra simples e segura</TextM>
        </Topic>

        <Topic>
          <TopicIcon $backgroundColor="purple">
            <ShoppingCartSimple weight="fill" size={14} />
          </TopicIcon>
          <TextM $fontColor="text">Compra simples e segura</TextM>
        </Topic>
      </IntroductionContent>

      <img src={IntroductionImage} alt="" />
    </IntroductionContainer>
  )
}
