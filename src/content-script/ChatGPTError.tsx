import React from 'react'
import { isBraveBrowser } from './utils'

interface ChatGPTErrorProps {
  error?: string
  retry: number
}

function ChatGPTError(props: ChatGPTErrorProps) {
  const { error, retry } = props

  const handleOptionLinkClick = React.useCallback(() => {
    // TODO
  }, [])
  const handleSwitchToAiKit = React.useCallback(() => {
    // TODO
  }, [])

  if (error === 'UNAUTHORIZED' || error === 'CLOUDFLARE') {
    return (
      <p>
        请登录ChatGPT并通过真人验证&nbsp;
        <a href="https://chat.openai.com" target="_blank" rel="noreferrer">
          chat.openai.com
        </a>
        {retry > 0 &&
          (() => {
            if (isBraveBrowser()) {
              return (
                <span className="block mt-2">
                  还是不工作？
                  <a href="https://www.yuque.com/wnow20/urfk3b/ul6rxvqbsy997z4y">
                    AiKit常见问题解决办法
                  </a>
                </span>
              )
            } else {
              return (
                <span className="italic block mt-2 text-xs">
                  ChatGPT(OpenAI)需要每隔一段时间通过一次安全检查。 如果还是访问不了，还可以在
                  <a onClick={handleOptionLinkClick}>设置</a>
                  里修改AI接口服务商为AiKit官方接口。
                  <a onClick={handleSwitchToAiKit}>一键切换</a>
                </span>
              )
            }
          })()}
      </p>
    )
  }
  if (error) {
    return (
      <p>
        Failed to load response from ChatGPT:
        <span className="break-all block">{error}</span>
      </p>
    )
  }
  return null
}

export default React.memo(ChatGPTError)