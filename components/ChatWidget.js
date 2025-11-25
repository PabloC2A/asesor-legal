'use client'

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    const style = document.createElement('style')
    
    document.head.appendChild(style)
  }, [])

  return (
    <df-messenger
      location="us-central1"
      project-id={process.env.NEXT_PUBLIC_DIALOGFLOW_PROJECT_ID}
      agent-id={process.env.NEXT_PUBLIC_DIALOGFLOW_AGENT_ID}
      language-code="es"
      max-query-length="-1">
      <df-messenger-chat chat-title="Abogado"></df-messenger-chat>
    </df-messenger>
  )
}
