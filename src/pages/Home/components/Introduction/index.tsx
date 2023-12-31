import {
  IntroductionContainer,
  IntroductionContent,
  Topic,
  TopicIcon,
  TopicsGrid,
} from './styles'
import IntroductionImage from '../../../../assets/images/introduction-image.svg'
import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <TopicsGrid>
          <Topic>
            <TopicIcon $backgroundColor="yellow-dark">
              <ShoppingCartSimple weight="fill" size={14} />
            </TopicIcon>
            <p>Compra simples e segura</p>
          </Topic>

          <Topic>
            <TopicIcon $backgroundColor="gray">
              <Package weight="fill" size={14} />
            </TopicIcon>
            <p>Embalagem mantém o café intacto</p>
          </Topic>

          <Topic>
            <TopicIcon $backgroundColor="yellow">
              <Timer weight="fill" size={14} />
            </TopicIcon>
            <p>Entrega rápida e rastreada</p>
          </Topic>

          <Topic>
            <TopicIcon $backgroundColor="purple">
              <Coffee weight="fill" size={14} />
            </TopicIcon>
            <p>O café chega fresquinho até você</p>
          </Topic>
        </TopicsGrid>
      </IntroductionContent>

      <img src={IntroductionImage} alt="" />
    </IntroductionContainer>
  )
}
