import Button from "../components/Button";
import Image from "next/image";
import image1 from "../../../public/images/7d2e335b4004272f096f61eca801a9ac.png";

const page = () => {
  return (
    <div className="grid grid-cols-2 my-16">
      <div className="px-4">
        <div className="text-lg font-semibold">
          How would you like to get your order?
        </div>
        <div className="text-base font-medium">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information. Learn More
        </div>

        <div className="flex p-4 m-4 border-2 border-black rounded-2xl">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9538 9.12293L20.3077 1.61523H3.69228L1.10767 8.93831V20.6306H22.9538V9.12293ZM4.3692 2.53831H19.6307L21.7846 8.63062H2.21536L4.3692 2.53831ZM21.9692 19.7691H2.03074V9.5537H22.0307L21.9692 19.7691Z"
              fill="#111111"
              stroke="#111111"
              stroke-width="0.692308"
              stroke-linejoin="round"
            />
            <path
              d="M15.6902 12.2609L15.5976 12.1619C15.3364 11.8826 14.8983 11.8679 14.619 12.129C14.6158 12.1321 14.6125 12.1352 14.6093 12.1383L10.65 15.9876L9.39079 14.7633C9.11665 14.4968 8.67835 14.503 8.41182 14.7771C8.40869 14.7803 8.40559 14.7836 8.40252 14.7869L8.30992 14.8859C8.05236 15.1613 8.06263 15.5922 8.33301 15.8551L10.1674 17.6386C10.4361 17.8998 10.8639 17.8998 11.1326 17.6386L15.6671 13.2301C15.9375 12.9672 15.9477 12.5363 15.6902 12.2609Z"
              fill="#111111"
            />
            <path
              d="M12.4614 2.69238H11.5383V8.23084H12.4614V2.69238Z"
              fill="#D8D8D8"
              stroke="black"
              stroke-width="0.923077"
            />
          </svg>
          &nbsp;&nbsp;&nbsp;&nbsp;Deliver It
        </div>
        <div className="flex flex-col">
          <div className="mt-8">Enter your name and address:</div>
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="text"
            placeholder="First Name"
          />
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="text"
            placeholder="Address Line 1"
          />
          <div className="text-sm font-light">
            &nbsp;&nbsp;&nbsp;&nbsp;We do not ship to P.O. boxes
          </div>
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="text"
            placeholder="Address Line 2"
          />
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="text"
            placeholder="Address Line 3"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              className="pl-2 py-2 border-2 mt-4 rounded-lg"
              type="text"
              placeholder="Postal Code"
            />
            <input
              className="pl-2 py-2 border-2 mt-4 rounded-lg"
              type="text"
              placeholder="Locality"
            />
            <select
              className="pl-2 py-2 border-2 mb-4 rounded-lg"
              name=""
              id=""
            >
              <option value="">State/Territory</option>
            </select>
            <select
              className="pl-2 py-2 border-2 mb-4 rounded-lg"
              name=""
              id=""
            >
              <option value="">India</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="" id="" /> &nbsp;&nbsp;Save this
            address to my profile
          </div>
          <div>
            <input type="checkbox" name="" id="" /> &nbsp;&nbsp;Make this my
            preferred address
          </div>

          <div className="text-xl font-medium mt-8">
            How would you like to get your order?
          </div>
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="email"
            placeholder="Email"
          />
          <div className="text-sm font-light">
            &nbsp;&nbsp;&nbsp;&nbsp;A confirmation email will be sent after
            checkout.
          </div>
          <input
            className="pl-2 py-2 border-2 mt-4 rounded-lg"
            type="tel"
            placeholder="Phone Number"
          />
          <div className="text-sm font-light">
            &nbsp;&nbsp;&nbsp;&nbsp;A carrier might contact you to confirm
            delivery.
          </div>
        </div>

        <div className="text-xl font-medium mt-8">What's your PAN? </div>
        <input
          className="pl-2 py-2 border-2 mt-4 rounded-lg"
          type="number"
          placeholder="PAN"
        />
        <div className="text-sm font-light">
          &nbsp;&nbsp;&nbsp;&nbsp;Enter your PAN to enable payment with UPI, Net
          Banking or local card methods
        </div>

        <div>
          <input type="checkbox" name="" id="" /> &nbsp;&nbsp;Save PAN details
          to Nike Profile
        </div>
        <div>
          <input type="checkbox" name="" id="" /> &nbsp;&nbsp;I have read and
          consent to eShopWorld processing my information in accordance with the{" "}
          <u>Privacy Statement</u> and <u>Cookie Policy</u>. eShopWorld is a
          trusted Nike partner.
        </div>

        <Button
          text="Continue"
          classNames="rounded-3xl bg-slate-50	text-slate-500 mt-8	py-4 px-auto"
        />
      </div>
      <div className="px-4">
        <div className="text-xl font-medium mt-8">
          Order Summary
          <div className="text-lg flex justify-between mt-4 text-slate-400">
            <div>Subtotal</div>
            <div>₹ 20 890.00</div>
          </div>
          <div className="text-lg flex justify-between text-slate-400">
            <div>Delivery/Shipping</div>
            <div>Free</div>
          </div>
          <hr />
          <div className="text-lg my-4 flex justify-between">
            <div>Total</div>
            <div>₹ 20 890.00</div>
          </div>
          <hr />
          <div className="text-xs">
            (The total reflects the price of your order, including all duties
            and taxes)
          </div>
          <div className="py-4">
            <div className="font-bold text-xl">
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={image1}
                alt="Nike Air Max 97 SE"
                width={208}
                height={208}
                className="mx-auto"
              />
              <div>
                <div className="text-sm ">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</div>
                <div className="text-sm text-slate-400">Qty 1</div>
                <div className="text-sm text-slate-400">Size L</div>
                <div className="text-sm text-slate-400">₹ 3 895.00</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src={image1}
                alt="Nike Air Max 97 SE"
                width={208}
                height={208}
                className="mx-auto"
              />
              <div>
                <div className="text-sm ">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</div>
                <div className="text-sm text-slate-400">Qty 1</div>
                <div className="text-sm text-slate-400">Size L</div>
                <div className="text-sm text-slate-400">₹ 3 895.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
