import React, { useEffect } from 'react';

export default function Content(props) {
  const { prop } = props
  useEffect(() => {
    console.log('执行了useEffect') // 可在此处执行接口请求
  })
  return(
    <div>
      {prop}
    </div>
  )
}
