import { useFlutterwave, closePaymentModal} from "flutterwave-react-v3";
import { successCardData, failedCardData } from "../assets/data/data";
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const { globalState } = useGlobalContext();
  const { data } = globalState;
  const navigate = useNavigate();

    // Payment integration
    const config = {
      public_key: 'FLWPUBK_TEST-f8180e48d2352e0e27d378926d683d3c-X',
      tx_ref: Date.now(),
      amount: data.grandTotal,
      currency: 'NGN',
      payment_options:"card",
      customer: {
          email: data.email,
          name: data.name,
      },
      customizations: {
          title: 'EmmancipatedOne',
          description: 'Payment for a room',
      },
  }

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <section className="Checkout">

      <div className="testing-container">
        <div className="testing-cards">
          <h2>Testing Cards</h2>
        <h3>Successful Payment Test</h3>
        <div className="testing-wrapper">
          {successCardData.map(data => (
          <div className="testing-data" key={data.content}>
            <h4>{data.title} : </h4>
            <h4>{data.content}</h4>
            </div>
          ))}
        </div>
        <h3>Failure Payment Test</h3>
        <div className="testing-wrapper">
          {failedCardData.map(data => (
            <div className="testing-data" key={data.content}>
              <h4>{data.title} : </h4>
              <h4>{data.content}</h4>
            </div>
          ))}
        </div>
        </div>

        <button
          type="submit"
                onClick={() => {
                    handleFlutterPayment({
                     
                        callback: (response) => {
                            setTimeout(() => {
                                console.log(response);
                                navigate('/');
                                closePaymentModal();
                            }, 3000);
                            
                        },
                        onClose: (repo) => {
                            console.log("Just closed now");
                            console.log(repo);
                        }
                    });
                }}
            >
                Test Payment
            </button>
      </div>
    </section>
  )
}

export default Checkout;