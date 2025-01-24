import LauguageModal from '@/components/model/LauguageModal'
import ScrollUpButton from '@/components/model/ScrollUpButton'

const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollUpButton />
      <LauguageModal />
      {children}
    </>
  )
}

export default ModelProvider
