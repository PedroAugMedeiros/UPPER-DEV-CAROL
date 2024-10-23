import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import { CheckBox } from "components/CheckBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TermsandconditionsRowlinetwentyon from "./TermsandconditionsRowlinetwentyon";
import React from "react";

export default function TermsandconditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms and conditions</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="flex flex-col items-center">
          <div className="relative h-[2288px] content-center self-stretch md:h-auto">
            <div className="mx-auto flex flex-1 flex-col items-center">
              <div className="flex flex-col items-end self-stretch">
                <TermsandconditionsRowlinetwentyon />
                <Img
                  src="images/img_image_2.png"
                  alt="Imagetwo"
                  className="relative mt-[-394px] h-[872px] w-[34%] object-contain opacity-50"
                />
              </div>
              <Heading
                size="headingxs"
                as="h2"
                className="flex flex-col mt-[-174px] w-[58%] font-bevietnampro text-[17.41px] font-extrabold leading-[160%] text-gray-700 md:w-full md:px-5 se"
              >
                <span>
                  <>
                    1- Satisfaction Promise:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    We stand by the quality of our service. If you&#39;re not
                    fully satisfied, we offer a free re-clean. Simply notify us
                    within 24 hours of your cleaning appointment.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    2- Operating Hours:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    Our team is available for cleaning services from 7:30 a.m.
                    to 4:30 p.m. Our office hours for customer support are from
                    8:00 a.m. to 5:00 p.m. If you reach out after hours, we will
                    get back to you the following business day. Current clients
                    with urgent after-hours requests will receive our best
                    possible attention. If we can&#39;t accommodate immediately,
                    we’ll prioritize it for the next visit.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    3- Home Access Options:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    You can choose from four entry methods: being present during
                    the cleaning, providing a copy of the key, sharing the
                    garage or door code, or leaving the key in a lockbox. If you
                    opt to unlock the door remotely, the company is not
                    responsible for locking the house after.
                    <br />
                    <br />
                  </>
                </span>
                <span>
                  <>
                    4- Handling Valuables:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    We handle your valuables with care. If any damage occurs,
                    we’ll notify you and work to repair or replace the item. For
                    items of special significance, please inform us and secure
                    them on cleaning days (e.g., jewelry, artwork, collectibles,
                    weapons).
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    5- Service Exclusions:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    For an additional fee, we offer services such as cleaning
                    ovens, refrigerators, freezers, walls, dishes, laundry,
                    pre-cleaning organization, and decluttering. If you have a
                    specific request, feel free to ask—we may be able to
                    accommodate it.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    6- Rescheduling & Cancellation:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  To maintain discounted rates, regular cleanings are
                  encouraged. We accommodate schedule changes when possible;
                  cancellations within 48 hours will incur a 50% fee, and
                  cancellations within 24 hours will require full payment.
                  Emergency cases will be reviewed individ
                </span>
                <span>
                  <>
                    ually.
                    <br />
                    <br />
                    7- Payment Terms:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    Payment is required in full at the beginning of each month
                    to secure your preferred day and time, ensuring consistent
                    service. Payment must be made via Venmo/Zelle, which will be
                    securely stored when the service agreement is finalized. If
                    payment is not received on time, we reserve the right to
                    cancel or reschedule your service.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    8- Ending Services:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    Both parties agree to provide 30 days&#39; notice before
                    permanently ending services, as a courtesy.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    9- Pricing Adjustments:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    We reserve the right to update rates and will notify you in
                    advance of any changes.
                    <br />
                    Employee Policy:
                    <br />
                    Clients agree not to request personal services from our
                    staff or exchange contact details. Breaching this policy
                    will result in a $2,500 fee and immediate termination of the
                    contract.
                    <br />
                  </>
                </span>
                <span>
                  <>
                    <br />
                    10- Media Use:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    We may take before-and-after photos of specific areas (e.g.,
                    stove, refrigerator, kitchen counter, shower, toilet) for
                    training and reference purposes.
                    <br />
                    We respect your privacy and will not share any images
                    without your consent.
                    <br />
                    <br />
                  </>
                </span>
                <span>
                  <>
                    11- Privacy:
                    <br />
                  </>
                </span>
                <span className="font-medium">
                  <>
                    To safeguard the well-being of our cleaners and to maintain
                    your privacy, we kindly ask that you secure any confidential
                    or potentially illegal documents and substances prior to
                    your scheduled cleaning. This includes, but is not limited
                    to, jewelry, valuable items, important personal documents,
                    and illegal drugs. We appreciate your cooperation in helping
                    us create a safe and professional environment for everyone
                    involved.
                    <br />
                  </>
                </span>
              </Heading>
            </div>
            <Heading
              size="headingmd"
              as="h3"
              className="absolute left-0 right-0 top-[23%] m-auto w-[64%] font-bevietnampro text-[22.91px] font-extrabold leading-[160%] text-gray-700"
            >
              We are committed to delivering transparent and honest
              communication, ensuring you feel comfortable sharing your thoughts
              with us. Your trust in us to care for your home is deeply valued.
            </Heading>
          </div>
          <CheckBox
            name="iconfirmthatiha"
            label="I confirm that I have read, understood, and agreed to the above Terms of Service.
By approving the estimate, I accept these terms as legally binding."
            id="iconfirmthatiha"
            className="flex gap-2 left-0 right-0 top-[23%] m-auto w-[58%] font-bevietnampro text-[22.91px] leading-[160%] text-gray-700 items-center"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
