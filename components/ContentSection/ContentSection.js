import Link from "next/link";
import styles from "./ContentSection.module.css";

const ContentSection = () => {
  return (
    <div className={styles.contentBlock}>
      <div className="container">
        <div className={styles.ContentSectionContainer}>
          <div>
            <h2 className={styles.title2}>2021&apos;s Top Pet Insurance Providers</h2>
            <p className={styles.txt}>Looking to protect yourself against major vet bills in case your pet becomes injured or sick?</p>
            <p className={styles.txt}>
              Our experts reviewed numerous pet insurance companies to find the top seven pet insurance options
              below. We chose these pet insurance policies based on monthly premiums, policy features, coverage
              options, and customer service that sets them apart from other providers in the marketplace.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Best Overall: Pumpkin Pet Insurance</h3>
            <p className={styles.txt}>
              <Link href="https://hello.pumpkin.care/compare-insurance-ranked/"><a className={styles.link} target="_blank">Pumpkin Pet Insurance</a></Link> is our choice for the best overall
              pet insurance. Pumpkin offers both accident & illness coverage and wellness coverage without
              expensive add-on fees. The insurance coverage protects your pet when it is hurt
              or sick and does not have annual limits or per-condition deductibles. Plus, there
              are no 6-month or 1-year waiting periods for knee injuries or hip dysplasia.
              The Preventative Essentials Pack helps take care of routine care with full
              coverage for annual wellness exams, key vaccines, and lab tests. Discounts
              are also available when you have more than one pet insured.
            </p>
            <p>
              With Pumpkin, you&apos;ll also receive the best coverage for older pets because it has no upper age limits or breed exclusions.
              No matter how old your pet is, you can get approved with Pumpkin. Its policies let you choose your own vet and includes 90%
              reimbursement for all covered procedures and treatments, even as your pet ages.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Best for Accident & Illness Only: Healthy Paws Pet Insurance</h3>
            <p className={styles.txt}>
              Our choice for the best accident and illness coverage is
              <Link href="https://www.healthypawspetinsurance.com/"><a className={styles.link} target="_blank"> Healthy Paws</a></Link>.
              You can choose any vet or emergency clinic that you like rather than being restricted to in-network vets. There are no
              limits on claims with no per-incident, annual, or lifetime caps on payouts. And it offers quick reimbursement of vet
              bills with 99% of claims paid within two days.
            </p>
            <p className={styles.txt}>
              Healthy Paws policies cover accidents, illnesses, cancer, emergency care, genetic condition, and alternative care.
              Policies start at $15 per month for cats and $20 per month for dogs. This low price does mean that its policies do
              not cover preventative care, vaccinations, or dental exams. Additionally, age restrictions do apply for pets older
              than 8 years old and pets 6 years and older must have a physical exam prior to approval. For every pet insurance
              quote, Healthy Paws makes a donation to a homeless pet&apos;s medical care.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Best for Multiple Pets: ASPCA Pet Health Insurance</h3>
            <p className={styles.txt}>
              The best coverage for multiple pets is offered by <Link href="https://www.aspcapetinsurance.com/top_plans#/start">
                <a className={styles.link} target="_blank"> ASPCA Pet Health Insurance</a></Link>
              . For every pet that you cover, it offers a 10% discount for each additional pet. Combine that discount with the ability to adjust your annual limit,
              deductible, and reimbursement percentage to find coverage that fits your budget. Accident-only plans are also available.
            </p>
            <p className={styles.txt}>
              ASPCA offers illness and accident insurance with optional preventative care for regular wellness visits and vaccinations. Plus, you can choose any vet
              that you like. Unlike some other pet insurance policies, ASPCA covers exam fees, alternative therapies, behavioral issues, and microchipping as part
              of its Complete Coverage Plan.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Best Deductible: Embrace Pet Insurance</h3>
            <p className={styles.txt}>
              Many pet insurance policies require a deductible before claims are paid. <Link href="https://www.embracepetinsurance.com/">
                <a className={styles.link} target="_blank">Embrace Pet Insurance</a></Link> rewards long-term
              customers by offering a diminishing deductible that decreases by $50 every year that you don&apos;t have a claim.
              These savings can really add up in the years that your pet is healthy and accident-free.
            </p>
            <p className={styles.txt}>
              Its policies cover accidents and illnesses, including breed-specific, hereditary, and congenital conditions.
              Plus, curable pre-existing conditions are covered when your pet has been symptom-free for 12 months. Optional
              wellness rewards can also be added to cover other costs like wellness exams, training, grooming, and vaccinations.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Best for Low Price: Pawp</h3>
            <p className={styles.txt}>
              Pet owners on a budget can protect their pets with <Link href="https://pawp.com/emergency-welcome/">
                <a className={styles.link} target="_blank">Pawp </a></Link>
              for one low price. Protection for up to six pets is included for just $24 per month. This includes
              24/7 access to licensed vets with instant and unlimited video chats. In case of illness or an
              accident, each policy includes a $3,000 emergency protection fund to cover one unexpected vet bill per year.
            </p>
            <p className={styles.txt}>
              With the focus on the digital experience, you must first speak with a vet via video call before activating
              your emergency fund. Once approved, you can see any vet in the U.S. within four hours. There&apos;s no co-pay,
              deductible, or credit check and Pawp pays the vet directly, so you don&apos;t need to worry about being reimbursed.
            </p>
          </div>
          <div>
            <h3 className={styles.title3}>Pumpkin</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://hello.pumpkin.care/compare-insurance-ranked/"><a className={styles.link} target="_blank">Pumpkin</a></Link> covers annual wellness exams, screenings, and vaccines
              </li>
              <li>No upper age limits or breed exclusions</li>
              <li>90% reimbursement at your choice of vet</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>ASPCA</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://www.aspcapetinsurance.com/top_plans#/start"><a className={styles.link} target="_blank">Customizable plans</a></Link> to meet your needs and budget
              </li>
              <li>Visit any vet in the U.S. or Canada and receive up to 90% reimbursement</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>Pawp</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://pawp.com/emergency-welcome/"><a className={styles.link} target="_blank">Protection for up to 6 pets under one $24/month plan</a></Link>
              </li>
              <li>Instant & unlimited video chats with vets 24/7</li>
              <li>Emergency fund protection up to $3,000</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>Embrace</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://pawp.com/emergency-welcome/"><a className={styles.link} target="_blank">Industry-leading diminishing deductible</a></Link> feature
              </li>
              <li>No networks and &quot;nose-to-tail&quot; insurance coverage</li>
              <li>Optional wellness rewards cover routine care</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>Healthy Paws</h3>
            <ul className={styles.list}>
              <li>Most claims are processed within 2 days</li>
              <li>
                <Link href="https://www.healthypawspetinsurance.com/"><a className={styles.link} target="_blank">No per-incident, annual, or lifetime caps on claim payouts</a></Link>
              </li>
              <li>Use any U.S. licensed vet or emergency clinic</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>Spot</h3>
            <ul className={styles.list}>
              <li>Comprehensive coverage for your pet</li>
              <li>
                Plans offering thousands in coverage with options
                <Link href="https://spotpetins.com/pet-insurance-quote/"><a className={styles.link} target="_blank"> starting at less than a cup of coffee per day</a></Link>
              </li>
              <li>Discounts available to reduce the cost of insurance</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title3}>Prudent Pet</h3>
            <ul className={styles.list}>
              <li>
                <Link href="https://app.prudentpet.com/"><a className={styles.link} target="_blank">Lightning fast claims processing</a></Link> powered by AI
              </li>
              <li>Unlimited 24/7 vet chat included with all policies</li>
              <li>Coverage includes breed-specific conditions</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title2}>What is pet insurance?</h2>
            <p className={styles.txt}>
              Pet owners love their pets because of the joy and companionship that they provide. However, when a pet becomes sick or injured,
              the veterinary bills can be overwhelming. One of the methods people use to reduce the cost of major vet bills is by purchasing
              a pet insurance policy.
            </p>
            <p className={styles.txt}>
              Pet insurance typically helps to pay for routine care, like vaccinations and wellness visits, while also protecting against
              major expenses for injuries and illnesses. What&apos;s included in your policy varies on the insurance provider, the type of
              policy purchased, and the options you select.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>What is purchasing pet insurance important?</h2>
            <p className={styles.txt}>
              Purchasing pet insurance is important for people who are worried about unexpected veterinary bills. While most pet owners
              are capable of covering typical vet expenses, like wellness visits and vaccinations, the big bills when something goes
              wrong can quickly overwhelm their finances. Buying a pet insurance policy eliminates that worry because most policies
              cover 90% or more of covered exams, treatments, and procedures.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>When should you buy pet insurance?</h2>
            <p className={styles.txt}>
              Like most insurance policies, it can be very expensive when you try to buy coverage after an injury or illness strikes.
              In most cases, the application won&apos;t be approved or the injury or illness that you&apos;re trying to get covered will be excluded.
              For this reason, it is best to buy pet insurance as soon as possible. This will offer financial protection and peace of mind
              for a fixed price in case of an emergency or illness.
            </p>
            <p className={styles.txt}>
              Additionally, some policies won&apos;t cover pets once they reach a certain age. Because of this, buying pet insurance
              when your pet is young will increase the chances that their insurance application will be approved.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>Benefits of pet insurance</h2>
            <p className={styles.txt}>
              The benefits of pet insurance go beyond the health of your pet. Many of the benefits of pet insurance address how your
              finances are affected by unexpected accidents and illnesses that occur. The purpose of insurance is to convert an
              unknown expense that can be overwhelming into a more manageable monthly payment.
            </p>
            <p className={styles.txt}>Here are a few of the benefits that pet insurance can provide you and your pet:</p>
            <ul className={styles.list}>
              <li>Wellness visits and vaccinations covered</li>
              <li>Protection in case of accident or illness</li>
              <li>Converts an unknown expense into a fixed monthly cost</li>
              <li>Allows you to focus on your pet&apos;s health, not what the procedure will cost</li>
              <li>Increases treatment options for your pet that are normally cost-prohibitive</li>
              <li>Saves money on expensive treatments and follow-up care</li>
              <li>Peace of mind knowing that a financial risk is covered</li>
              <li>Helps you budget for the care of your pet</li>
              <li>Keeps you from using savings or going into debt in case of emergency</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title2}>The pet insurance process and timeline</h2>
            <p className={styles.txt}>
              When shopping for pet insurance, most companies provide instant quotes online after answering
              a few questions. Once you&apos;ve found the policy and options that work best for you, you&apos;ll approve
              the quote and submit payment to purchase the policy.
            </p>
            <p className={styles.txt}>
              Once your application is approved and payment is made, you must wait for the coverage to begin. Each company&apos;s
              waiting period for illness and accidents vary, but it is typical to have to wait 14 days for coverage to begin.
              If your pet has an eligible pre-existing condition, you may have to wait 180 days after the last treatment or
              symptom before coverage begins for that condition.
            </p>
            <p className={styles.txt}>
              When your pet needs veterinary care, visit your eligible veterinarian to receive service. Most policies
              allow you to choose your own vet. Since most pet insurance plans reimburse you for eligible treatments,
              you&apos;ll need to pay the vet bill, then submit your receipts for reimbursement. The insurance company will
              then process your claim and send a check to your home or electronic deposit to your bank for your pet&apos;s
              covered treatments.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>How to compare pet insurance providers</h2>
            <p className={styles.txt}>
              When comparing pet insurance providers, don&apos;t just look for the lowest insurance premium. While cost is a
              big factor, so are the coverages, waiting periods, exclusions, deductibles, and more. Below are many of the
              questions you should ask when comparing pet insurance options:
            </p>
            <ul className={styles.list}>
              <li>What are the annual/monthly premiums?</li>
              <li>What discounts are available?</li>
              <li>Are there different plans available?</li>
              <li>Which optional add-ons are available?</li>
              <li>Can I visit any vet or do I have to stay within a network?</li>
              <li>Are wellness visits covered?</li>
              <li>Is preventative care included?</li>
              <li>Are annual screenings and vaccinations covered?</li>
              <li>Is there a deductible?</li>
              <li>What is the reimbursement percentage on approved claims?</li>
              <li>Are claims reimbursed or paid directly to the vet?</li>
              <li>Is there a waiting period for illness or injury?</li>
              <li>Are pre-existing conditions covered?</li>
              <li>If so, what is the waiting period?</li>
              <li>Is there an age limit on new policies or renewals?</li>
              <li>Are all breeds accepted for coverage?</li>
              <li>Do you offer a money-back guarantee? If so, for how long?</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title2}>How much does pet insurance cost?</h2>
            <p className={styles.txt}>
              Pet insurance premiums vary depending on the coverage that you purchase and the benefits of the policy.
              Typically, the higher the premiums paid, the more expansive your coverage is. An emergency-only policy
              is just $24 per month with Pawp, while more robust policies start at just $1 per day with GEICO Pet
              Insurance. As with other types of insurance, when you increase the deductible or qualify for discounts,
              your premiums can be reduced.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>Types of pet insurance</h2>
            <p className={styles.txt}>
              When comparing pet insurance options, there are three categories of policies – accident only, accident & illness, and comprehensive coverage.
            </p>
            <ul className={styles.list}>
              <li><strong>Accident only.</strong> Covers your pet for harm or injuries due to accidents.</li>
              <li><strong>Accident & illness.</strong> Includes accidents plus illness caused by sickness or disease.</li>
              <li>
                <strong>Comprehensive coverage.</strong> Covers accidents, illness, and routine care, which
                usually includes vaccinations, worming treatments, de-sexing, microchipping, and dental.
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title2}>Frequently Asked Questions</h2>
            <h3 className={styles.title3}>Is it worth it to get pet insurance?</h3>
            <p className={styles.txt}>
              For most pet owners, it is worth it to buy pet insurance. The insurance policy protects them against
              major vet bills and, if they buy a comprehensive policy, it also covers routine wellness visits, exams,
              and vaccinations in one easy monthly payment.
            </p>
            <h3 className={styles.title3}>What is the cheapest pet insurance alternative?</h3>
            <p className={styles.txt}>
              The lowest-priced pet insurance alternative that we found was $24 per month from
              <Link href="https://pawp.com/emergency-welcome/"><a className={styles.link} target="_blank"> Pawp</a></Link>. This plan offers
              unlimited video chats with a veterinarian and includes a $3,000 emergency protection fund for your pet.
            </p>
            <h3 className={styles.title3}>What are the best pet insurance plans?</h3>
            <p className={styles.txt}>
              The best pet insurance plan is one that offers the coverage you need at a price you can afford.
            </p>
            <p className={styles.txt}>
              Our choice for the best pet insurance plan is
              <Link href="https://hello.pumpkin.care/compare-insurance-ranked/"><a className={styles.link} target="_blank"> Pumpkin Pet Insurance </a></Link>
              because it covers all breeds 8 weeks and up with no
              upper age limits. It includes discounts for multiple pets and offers optional preventative care for comprehensive coverage.
              You can choose your own vet and receive up to 90% reimbursement on covered vet bills without sneaky add-on fees,
              per-condition deductibles, or confusing annual limits.
            </p>
            <h3 className={styles.title3}>Does pet insurance cover routine vet visits?</h3>
            <p className={styles.txt}>
              Yes, depending upon the type of policy and options that you choose, your routine vet visits for checkups,
              vaccinations, and more are covered. This coverage is commonly referred to as a comprehensive pet insurance policy.
            </p>
            <h3 className={styles.title3}>What is not covered by pet insurance?</h3>
            <p className={styles.txt}>
              While pet insurance typically covers injuries, illness, and wellness visits, it does not cover every vet bill.
              If your pet has a pre-existing condition, most pet insurance policies will not cover those bills. Additionally,
              cosmetic procedures (e.g. cropping ears or docking tails), grooming, and other elective procedures are typically
              not covered. Congenital or hereditary disorders may be excluded as well, depending upon the insurer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
