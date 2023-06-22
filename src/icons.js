import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const icons = {
  defaultIcon: icon({ name: 'star' }),
  availableIcons: [
    icon({ name: 'avocado', style: 'solid' }),
    icon({ name: 'rocket', family: 'duotone', style: 'solid' }),
    icon({ name: 'bomb' }),
    icon({ name: 'ghost' }),
    icon({ name: 'brush', family: 'duotone', style: 'solid' })
  ]
}

export default icons
