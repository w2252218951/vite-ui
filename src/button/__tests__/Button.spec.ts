import Button from "../index";

import {shallowMount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest'

// happy-dom

// 创建一个测试分组
describe('Button', () => {
    // 使用test 函数创建一个测试用例
    test('mount @vue/test-utils', () => {
        // 使用 shallowMount 初始化一个组件
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            }
        })
        expect(wrapper.text()).toBe('Button')
    })
})
