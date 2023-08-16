import { EventName, createComponent } from '@lit-labs/react'
import React from 'react'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ComponentProps<T> {
  tagName: string
  webComponent: new () => T
  events: Record<string, EventName | string>
}

export function createReactComponent({ tagName, webComponent, events }: ComponentProps<HTMLElement>) {
  return createComponent({
    tagName,
    elementClass: webComponent,
    react: React,
    events,
  })
}
