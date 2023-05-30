import { json } from "stream/consumers"
import "./stripeCard.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router"

type SubmitToPq = {
    cost: number;
    nights: number;
    reserve: () => Promise<void>;
}

function StripeCard ({cost, nights, reserve}: SubmitToPq) {
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const stripeUrl = 'http://localhost:3001/housifyPay/stripeConnect'
    const stripeHandler = async (e:any) => {
        const total:number = (cost * 100) * nights;

        if(!stripe || !elements){
            console.log("stripe error")
            return
        }
        const res = await fetch(stripeUrl, {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "cost": total
            })
        }).then(res => res.json())  
        const cardType = elements.getElement(CardElement)

        reserve()

        if(cardType){
            const confirmPayment = await stripe.confirmCardPayment(res.success, {
                payment_method: {
                    card: cardType,
                    billing_details: {
                        "name": "user"
                    }
                },
            })
            if(confirmPayment){
                console.log(confirmPayment)
                navigate('/')
                alert('payment successful')
            }else{
                alert('payment error')
            }
        }
    }
    const check = () => {
        console.log(cost)
        console.log(nights)
    }

    return (
        <div className="ml-6 mt-4" >
            <h2 className="text-xl">Enter Credit Card</h2>
            <CardElement className="mt-2"></CardElement>
            <button id="makeResBtn" onClick={(e) => stripeHandler(e)} className="ml-4">Confirm Payment</button>
        </div>
    )
}
export default StripeCard