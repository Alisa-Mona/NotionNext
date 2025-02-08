import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  // 控制是否显示版权信息的条件
  const showPoweredBy = false; // 设置为 false 时，版权信息将不会显示
  
  // 如果不显示版权信息，直接返回 null，不渲染任何内容
  if (!showPoweredBy) return null;

  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'>
        NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
