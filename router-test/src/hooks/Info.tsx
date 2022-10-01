import { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  const onChangeName = (e: any) => {
    console.log(e);
    setName(e.target.value)
  }

  const onChangeNickName = (e: any) => {
    setNickName(e.target.value);
  }

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickname}</b>
        </div>
      </div>
    </div>
  )
}

export default Info;