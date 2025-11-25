'use client'

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      df-messenger {
        z-index: 999;
        position: fixed;
        bottom: 16px;
        right: 16px;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <df-messenger
      location="us-central1"
      project-id="newagent-mvav"
      agent-id="4b945d8b-097c-412e-ad7a-0a71bf8a8888"
      language-code="es"
      max-query-length="-1">
      <df-messenger-chat chat-title="Abogado"></df-messenger-chat>
    </df-messenger>
  )
}
