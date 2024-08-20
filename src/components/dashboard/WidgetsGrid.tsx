"use client";

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { CiShoppingCart } from "react-icons/ci";

export const WidgetsGrid = () => {

    const { count } = useAppSelector(state => state.counter)
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget title={count.toString()} subtitle={'Products added'} icon={<CiShoppingCart size={40} className='text-blue-600' />
            } label={'Counter'} href={'/dashboard/counter'} />
        </div>
    )
}
