import {defineComponent, PropType} from "vue";

import 'virtual:uno.css'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

export const props = {
    color: {
        type: String as PropType<IColor>
    },
    icon: {
        type: String,
        default: ''
    }
}

export default defineComponent({
    name: 'SButton',
    props, // 注册属性
    setup(props, {slots}) {
        return () => <button
        class={`
            py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
        `}>
            { props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : '' }
            {slots.default ? slots.default() : ''}
        </button>
    }
})
/*
export default defineComponent({
    name: 'SButton',
    setup(props, {slots}) {
        return () => <button
            class={`
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
      `}>
            {slots.default ? slots.default() : ''}
        </button>
    }
})
*/
