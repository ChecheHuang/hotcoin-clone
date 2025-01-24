'use client'

import i18n from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { create } from 'zustand'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { languageList } from '@/config/list'
import { cn } from '@/lib/utils'

type useLauguageModelStore = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useLauguageModel = create<useLauguageModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

const list = ['language', 'currency']

export default function LauguageModal() {
  const { isOpen, onClose } = useLauguageModel()
  const { t } = useTranslation()

  const onChange = (open: boolean) => {
    if (!open && onClose) {
      onClose()
    }
  }

  const [option, setOption] = useState(list[0])

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="h-[382px] min-w-[680px]">
        <DialogTitle>
          <ToggleGroup
            defaultValue={option}
            onValueChange={setOption}
            type="single"
            className="space-x-6"
          >
            {list.map((value) => (
              <ToggleGroupItem
                key={value}
                className={cn(
                  '',
                  option === value ? 'text-hotcoin' : 'text-muted-foreground',
                )}
                value={value}
              >
                {t(value)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </DialogTitle>
        <DialogDescription>
          <div className="grid auto-rows-[minmax(50px,auto)] grid-cols-4 gap-4">
            {languageList.map(({ text, value }, index) => {
              return (
                <Button
                  onClick={() => {
                    i18n.changeLanguage(value)
                    onClose()
                  }}
                  key={index}
                  className={cn('', i18n.language === value && 'text-hotcoin')}
                  variant="ghost"
                >
                  {text}
                </Button>
              )
            })}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
