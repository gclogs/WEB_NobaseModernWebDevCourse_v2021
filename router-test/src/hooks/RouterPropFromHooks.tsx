import { useState } from 'react';

type MenuType = {
  length?: number;
  menus: {
    /* 인덱스 시그니처 사용 [key: type] */
    [key: string]: {
      name: string;
      price: number;
    }
  }
}

function Menu() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const [menus, setMenus] = useState<MenuType>({menus: {}});
  
  const onChangeName = (e: any) => {
    setName(e.target.value)
  }

  const onChangePrice = (e: any) => {
    setPrice(e.target.value)
  }

  function handleAddMenus<T>(e: T) {
    setMenus({menus: {
      [`${Math.random()}`]: {
        name: name,
        price: price
      }
    }})
    console.log(menus);
  }
  
  return (
    <>
      <div>
        <input type="text" onChange={onChangeName} />
        <input type="text" onChange={onChangePrice} />
        <input type="button" value="등록" onClick={handleAddMenus} />
        <h1>메뉴</h1>
        <p></p>
      </div>
    </>
  )
}

export default Menu;