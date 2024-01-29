import { MouseEvent, useContext } from "react";
import {
  Address,
  PaymentType,
  StoreContext,
} from "../../contexts/StoreContext";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import {
  AddressWrapper,
  CheckoutWrapper,
  OrderDetailsWrapper,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PaymentMethodWrapper,
  TotalPrices,
} from "./styles";
import { AddressForm } from "./components/AddressForm";
import CoffeesJson from "../../assets/coffees/CoffeesData.json";
import { CoffeeInfo } from "./components/CoffeeInfo";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { storeState, selectPaymentMethod, addAddressInfo } =
    useContext(StoreContext);

  // Regras de validação
  const addressFormValidationSchema = zod.object({
    zipCode: zod.string().min(1, "Campo obrigatório"),
    street: zod.string().min(1, "Campo obrigatório"),
    number: zod.string().min(1, "Campo obrigatório"),
    complement: zod.string(),
    neighbourhood: zod.string().min(1, "Campo obrigatório"),
    city: zod.string().min(1, "Campo obrigatório"),
    state: zod.string().min(1, "Campo obrigatório"),
  });

  // Obtenção de tipo
  type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

  // Desconstrução do retorno de useForm
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighbourhood: "",
      city: "",
      state: "",
    },
  });

  // Obtenção dos métodos
  const { handleSubmit } = addressForm;

  const navigate = useNavigate();

  function getItemsValue() {
    let total = 0;

    const values = storeState.shoppingCart.map((item) => {
      const coffee = CoffeesJson.CoffeesData.find(
        (coffee) => coffee.id === item.coffeeId
      );

      return (coffee?.price || 0) * item.amount;
    });

    total = values.reduce((sum, currentValue) => sum + currentValue, 0);

    return total;
  }

  function handleSelectPaymentMethod(
    event: MouseEvent<HTMLButtonElement>,
    paymentMethod: number | undefined
  ) {
    console.log(event);
    selectPaymentMethod(paymentMethod);
  }

  function handleConfirmOrder(data: AddressFormData) {
    // Fazer uma validação aqui, só adicionar o endereço no state caso esteja tudo certo com o pedido
    if (
      storeState.shoppingCart.length > 0 &&
      Object.values(PaymentType).includes(storeState.paymentMethod ?? -1)
    ) {
      const address: Address = {
        zipCode: data.zipCode,
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighbourhood: data.neighbourhood,
        city: data.city,
        state: data.state,
      };

      addAddressInfo(address);

      navigate("/checkout/complete");
    }
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CheckoutWrapper>
      <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
        <section>
          <h1>Complete seu pedido</h1>
          <AddressWrapper>
            <span>
              <MapPinLine size={22} />
              <p>Endereço de entrega</p>
            </span>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <FormProvider {...addressForm}>
              <AddressForm />
            </FormProvider>
          </AddressWrapper>

          <PaymentMethodWrapper>
            <span>
              <CurrencyDollar size={22} />
              <p>Pagamento</p>
            </span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>

            <PaymentMethodButtonsContainer>
              <PaymentMethodButton
                type="button"
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.credit)
                }
              >
                <CreditCard /> <p>CARTÃO DE CRÉDITO</p>
              </PaymentMethodButton>
              <PaymentMethodButton
                type="button"
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.debit)
                }
              >
                <Bank /> <p>CARTÃO DE DÉBITO</p>
              </PaymentMethodButton>
              <PaymentMethodButton
                type="button"
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.money)
                }
              >
                <Money /> <p>DINHEIRO</p>
              </PaymentMethodButton>
            </PaymentMethodButtonsContainer>
          </PaymentMethodWrapper>
        </section>

        <section>
          <h1>Cafés selecionados</h1>
          <OrderDetailsWrapper>
            {storeState.shoppingCart.map((item) => (
              <CoffeeInfo key={item.coffeeId} coffees={item} />
            ))}

            <TotalPrices>
              <span>
                <p>Total de itens</p>
                <p>{formatter.format(getItemsValue())}</p>
              </span>
              <span>
                <p>Entrega</p>
                <p>{"R$ 3,50"}</p>
              </span>
              <span>
                <h1>Total</h1>
                <h1>{formatter.format(getItemsValue() + 3.5)}</h1>
              </span>

              <button type="submit">CONFIRMAR PEDIDO</button>
            </TotalPrices>
          </OrderDetailsWrapper>
        </section>
      </form>
    </CheckoutWrapper>
  );
}
