import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const accordions = [
  {
    title: '什么是理财赚币？',
    description:
      '理财赚币是一种数字货币的投资方式，用户可以通过将自己的加密货币借给平台，以获取一定的利息或奖励。它类似于银行的定期存款，但以加密货币为基础。',
  },
  {
    title: '理财赚币如何运作？',
    description:
      '用户将数字资产存入理财平台，平台会将这些资产借给需要的人或机构，并收取一定的利息。平台会将部分利息支付给用户，作为用户投资的回报。',
  },
  {
    title: '支持哪些数字货币？',
    description:
      '不同的理财赚币平台支持的数字货币种类各不相同。常见的支持货币包括比特币（BTC）、以太坊（ETH）、泰达币（USDT）等。建议您在选择平台时查看其支持的货币列表。',
  },
  {
    title: '我是否有资格加入理财赚币？',
    description:
      '大多数理财赚币平台没有严格的资格要求，只要您拥有数字货币，并且在平台上完成注册，即可加入。但部分平台可能会有地区限制，请您在注册前仔细阅读相关条款。',
  },
  {
    title: '如何开始赚取收益？',
    description:
      '通常，您需要在理财平台上注册账户，并将您持有的数字货币转移到平台账户。然后，选择您要投资的理财产品，确认条款后即可开始赚取收益。',
  },
  {
    title: '收益值为何存在波动？',
    description:
      '理财赚币的收益值通常会受到市场供需、平台策略、以及所借出货币的价格波动等因素影响，所以可能存在波动。风险是数字货币投资的一部分，请您谨慎投资。',
  },
  {
    title: '活期理财和定期理财有何区别？',
    description:
      '活期理财类似于活期存款，您可以随时存取资产，但收益率可能较低。定期理财类似于定期存款，您需要将资产锁定一段时间，收益率通常较高。',
  },
  {
    title: '在哪里可以查看我的持仓情况？',
    description:
      '您通常可以在理财平台的个人账户页面，查看您的持仓情况、收益记录以及其他相关信息。请您仔细查看平台提供的操作指南。',
  },
]

const QA = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="my-[62px] text-center text-[28px] font-semibold">
        常见问题
      </h1>
      <div>
        <Accordion type="multiple" className="w-full">
          {accordions.map(({ title, description }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger className="text-base font-semibold">
                {title}
              </AccordionTrigger>
              <AccordionContent>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default QA
