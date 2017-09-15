import React from 'react';
import Menu from '../../components/Menu/Menu'
import createContainer from '../../HoC/CreateCardContainer/CreateCardContainer'



// i am using high order function to create menu container
const MenuCard = createContainer(Menu);






export default MenuCard



