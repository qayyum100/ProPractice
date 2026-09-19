import React from 'react'

interface VirtualKeyboardProps {
  activeKey?: string
  errorKey?: string
}

const KEYBOARD_ROWS = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Space']
]

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  activeKey,
  errorKey
}) => {
  const normActive = activeKey?.toLowerCase()
  const normError = errorKey?.toLowerCase()

  const getKeyWidth = (key: string) => {
    switch (key) {
      case 'Backspace': return 'w-16 sm:w-20'
      case 'Tab': return 'w-12 sm:w-16'
      case 'Caps': return 'w-14 sm:w-18'
      case 'Enter': return 'w-16 sm:w-20'
      case 'Shift': return 'w-20 sm:w-24'
      case 'Space': return 'w-64 sm:w-80'
      default: return 'w-8 sm:w-11'
    }
  }

  const isHomeRow = (key: string) => ['f', 'j'].includes(key.toLowerCase())

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-3xl bg-neutral-100/70 dark:bg-[#121216]/70 border border-neutral-200/80 dark:border-[#22222a] flex flex-col items-center gap-1.5 sm:gap-2 select-none">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex items-center gap-1 sm:gap-1.5">
          {row.map((key, keyIdx) => {
            const isMatch = normActive === key.toLowerCase() || (key === 'Space' && activeKey === ' ')
            const isErr = normError === key.toLowerCase() || (key === 'Space' && errorKey === ' ')

            let keyStyle = 'bg-white dark:bg-[#1a1a22] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-[#2c2c36]'

            if (isErr) {
              keyStyle = 'bg-red-500 text-white border-red-600 scale-95 shadow-red-500/30'
            } else if (isMatch) {
              keyStyle = 'bg-sky-500 text-white border-sky-600 scale-95 shadow-sky-500/30'
            }

            return (
              <div
                key={keyIdx}
                className={`h-9 sm:h-11 ${getKeyWidth(key)} rounded-xl border flex items-center justify-center font-mono text-xs sm:text-sm font-medium transition-all duration-100 shadow-sm relative ${keyStyle}`}
              >
                <span>{key}</span>
                {isHomeRow(key) && (
                  <span className="absolute bottom-1 w-2 h-0.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
