import React, { memo } from 'react'

const Manual = memo(() => {

  return(
    <div className="manuel-page">
      <h1>MANUAL</h1>
      <ol>
        <li>
          1. LUCKY SEVEN
          <ul>
            <li>- START버튼을 누르면 슬롯머신이 작동합니다.</li>
            <li>- 슬롯의 정중앙을 클릭하면 슬롯이 멈춥니다.</li>
            <li>- 모든 슬롯을 행운의 숫자 7로 만들어야 합니다.</li>
            <li>- 멈춘 슬롯을 클릭하면 다시 움직입니다.</li>
          </ul>
        </li>          
          
        <li>
          2. CATCH MOLE
          <ul>
            <li>- 화살표 버튼으로 난이도를 조절할 수 있습니다.</li>
            <li>- START버튼을 누르면 난이도에 따른 칸이 생성됩니다.</li>
            <li>- 두더지가 나오면 클릭하여 두더지를 잡습니다.</li>
            <li>- 모든 칸의 두더지를 잡으면 성공합니다.</li>
          </ul>
        </li>        
      </ol>
    </div>
  )
})

export default Manual;