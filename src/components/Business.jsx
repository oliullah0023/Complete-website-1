
import { features } from '../constants'
import styles from '../style'
import Button from './Button'


const FeatureCard = ({icon, title, content, index}) => (
  <div className=' flex flex-row p-6 rounded-[20px] mt-5 hover:bg-slate-800'>
    <div>
      <img className='h-[64px] w-[64px]' src={icon} alt="icon" />
    </div>
    <div className=' flex flex-col justify-start  ml-6 '>
      <h3 className=' font-poppins text-white text-[18px]'>{title}</h3>
      <p className=' font-poppins text-dimWhite text-[16px] leading-6 mt-3'> {content} </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <div className={`${styles.paddingY}  flex  flex-col sm:flex-row mt-8 gap-9`}>
      <div className='  flex-[1.8] flex flex-col'>
        <h1 className=' font-poppins font-bold text-white text-[48px]'>You do the business, we’ll handle the money.</h1>

        <p className=' font-poppins text-dimWhite text-[18px] leading-[30.6px] mt-5 mb-7'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
       <Button />
      </div>

      <div className='flex-[1] flex flex-col'>
       {
        features.map((feature) =>(
          <FeatureCard key={feature.id} {...feature} />
        ))
       }
      </div>
    </div>
  )
}

export default Business
